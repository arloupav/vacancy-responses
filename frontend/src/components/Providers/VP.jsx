// import {createContext, useMemo, useState} from 'react';
// import {vacanciesAPI} from '../../api/vacancies-api.js';
// import {useLocation} from 'react-router';
// import queryString from 'query-string';
//
// export const VacanciesContext = createContext({});
// export const HandlersContext = createContext({});
//
// const VacanciesProvider = ({children}) => {
//
//     const location = useLocation();
//     const {page} = queryString.parse(location.search);
//     const portionSize = 10;
//
//     const [vacanciesList, setVacanciesList] = useState([]);
//     const [idListForRemove, setIdListForRemove] = useState([]);
//     const [totalVacancies, setTotalVacancies] = useState(20);
//
//     const [isLoad, setIsLoad] = useState(false);
//     const [error, setError] = useState(null);
//
//     const totalIdListForRemove = idListForRemove.length;
//
//     const updateVacanciesData = async () => {
//         const res = await vacanciesAPI.getVacancies(page, portionSize);
//         if (res.ok) {
//             const data = await res.json();
//             setTotalVacancies(data.totalCount);
//             setVacanciesList([...data.vacancies]);
//         } else {
//             setError(`Error ${res.status} ${res.statusText}`);
//         }
//     };
//
//     const setVacancies = async () => {
//         // setIsLoad(true);
//         await updateVacanciesData();
//         // setIsLoad(false);
//     };
//
//     const removeVacancies = async () => {
//         const res = await vacanciesAPI.removeVacancies(idListForRemove);
//         if (res.ok) {
//             await updateVacanciesData();
//             setIdListForRemove([]);
//         } else {
//             setError(`Error ${res.status} ${res.statusText}`);
//         }
//     };
//
//     const removeVacancy = async (newId) => {
//         const res = await vacanciesAPI.removeVacancies([newId]);
//         if (res.ok) {
//             await updateVacanciesData();
//             const newIdList = idListForRemove.filter(id => id !== newId);
//             setIdListForRemove([...newIdList]);
//         } else {
//             setError(`Error ${res.status} ${res.statusText}`);
//         }
//     };
//
//     const createNewVacancy = async () => {
//         console.log('create new');
//         const res = await vacanciesAPI.createNewVacancy();
//         if (res.ok) {
//             await updateVacanciesData();
//         } else {
//             setError(`Error ${res.status} ${res.statusText}`);
//         }
//     };
//
//     const updateVacancy = async (name, updateValue, vacancyId, previousValue) => {
//         if (updateValue === previousValue) return;
//         //где это делать?
//         let modifiedProperty = {};
//         if (name === 'to' || name === 'from') {
//             modifiedProperty = {[`salary.${name}`]: updateValue};
//         } else {
//             modifiedProperty = {[name]: updateValue};
//         }
//
//         const res = await vacanciesAPI.updateVacancy(modifiedProperty, vacancyId);
//         if (res.ok) {
//             const updateVacancy = await res.json();
//             const newList = vacanciesList.map(vacancy => {
//                 if (vacancy.id !== updateVacancy.id) return vacancy;
//                 return updateVacancy;
//             });
//             setVacanciesList(newList);
//         } else {
//             setError(`Error ${res.status} ${res.statusText}`);
//         }
//     };
//
//     const toggleIdFromRemoveList = (newId) => {
//         if (idListForRemove.includes(newId)) {
//             const newIdList = idListForRemove.filter(id => id !== newId);
//             setIdListForRemove([...newIdList]);
//         } else {
//             setIdListForRemove([...idListForRemove, newId]);
//         }
//     };
//
//     const value = useMemo(() => ({
//         isLoad,
//         error,
//         vacanciesList,
//         totalVacancies,
//         totalIdListForRemove,
//         idListForRemove,
//         portionSize,
//         page
//     }), [isLoad,
//         error,
//         vacanciesList,
//         totalVacancies,
//         totalIdListForRemove,
//         idListForRemove,
//         portionSize,
//         page]);
//
//     return (
//         <VacanciesContext.Provider value={value}>
//             <HandlersContext.Provider
//                 value={{
//                     setVacancies,
//                     createNewVacancy,
//                     updateVacancy,
//                     removeVacancies,
//                     removeVacancy,
//                     toggleIdFromRemoveList,
//                 }}>
//                 {children}
//             </HandlersContext.Provider>
//         </VacanciesContext.Provider>
//     );
// };
//
// export default VacanciesProvider;