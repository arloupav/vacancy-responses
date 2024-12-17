import {createContext, useState} from 'react';
import {vacanciesAPI} from '../../api/vacancies-api.js';
import {useLocation} from 'react-router';
import queryString from 'query-string';

export const VacanciesContext = createContext({});
export const HandlersContext = createContext({});

const VacanciesProvider = ({children}) => {
    const location = useLocation();

    const {page, search} = queryString.parse(location.search);

    const portionSize = 10;
    const initialPage = 1;
    const [vacanciesList, setVacanciesList] = useState([1]);
    const [idListForRemove, setIdListForRemove] = useState([]);
    const [totalVacancies, setTotalVacancies] = useState(0);
    console.log(vacanciesList);
    const [isLoad, setIsLoad] = useState(false);
    const [error, setError] = useState(null);

    const totalIdListForRemove = idListForRemove.length;

    const updateVacanciesData = async (currentPage, searchQuery) => {
        const res = await vacanciesAPI.getVacancies(currentPage ?? initialPage, portionSize, searchQuery ?? '');
        if (res.ok) {
            const data = await res.json();
            setTotalVacancies(data.totalCount);
            setVacanciesList([...data.vacancies]);
        } else {
            setError(`Error ${res.status} ${res.statusText}`);
        }
    };

    const setVacancies = async (incomingPage, searchQuery) => {
        setIsLoad(true);
        await updateVacanciesData(incomingPage, searchQuery);
        setIsLoad(false);
    };

    const removeVacancies = async () => {
        const res = await vacanciesAPI.removeVacancies(idListForRemove);
        if (res.ok) {
            await updateVacanciesData(page, search);
            setIdListForRemove([]);
        } else {
            setError(`Error ${res.status} ${res.statusText}`);
        }
    };

    const removeVacancy = async (newId) => {
        const res = await vacanciesAPI.removeVacancies([newId]);
        if (res.ok) {
            await updateVacanciesData(page, search);
            const newIdList = idListForRemove.filter(id => id !== newId);
            setIdListForRemove([...newIdList]);
        } else {
            setError(`Error ${res.status} ${res.statusText}`);
        }
    };

    const createNewVacancy = async (incomingPage) => {
        const res = await vacanciesAPI.createNewVacancy();
        if (res.ok) {
                await updateVacanciesData(incomingPage);
        } else {
            setError(`Error ${res.status} ${res.statusText}`);
        }
    };

    const updateVacancy = async (name, updateValue, vacancyId, previousValue) => {
        if (updateValue === previousValue) return;

        const res = await vacanciesAPI.updateVacancy({[name]: updateValue}, vacancyId);
        if (res.ok) {
            const updateVacancy = await res.json();
            const newList = vacanciesList.map(vacancy => {
                if (vacancy.id !== updateVacancy.id) return vacancy;
                return updateVacancy;
            });
            setVacanciesList(newList);
        } else {
            setError(`Error ${res.status} ${res.statusText}`);
        }
    };

    const toggleIdFromRemoveList = (newId) => {
        if (idListForRemove.includes(newId)) {
            const newIdList = idListForRemove.filter(id => id !== newId);
            setIdListForRemove([...newIdList]);
        } else {
            setIdListForRemove([...idListForRemove, newId]);
        }
    };

    return (
        <VacanciesContext.Provider value={{
            isLoad,
            error,
            vacanciesList,
            totalVacancies,
            totalIdListForRemove,
            idListForRemove,
            portionSize,
            page,
            search,
        }}>
            <HandlersContext.Provider
                value={{
                    setVacancies,
                    createNewVacancy,
                    updateVacancy,
                    removeVacancies,
                    removeVacancy,
                    toggleIdFromRemoveList,

                }}>
                {children}
            </HandlersContext.Provider>
        </VacanciesContext.Provider>
    );
};

export default VacanciesProvider;

