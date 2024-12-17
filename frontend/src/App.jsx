import {useEffect} from 'react';
import './App.css';
import Table from './components/Table/Table.jsx';
import {useVacancies} from './hooks/useVacancies.js';
import {useHandlers} from './hooks/useHandlers.js';
import MainButtonControllers from './components/MainButtonControllers/MainButtonControllers.jsx';
import Pagination from './components/Pagination/Pagination.jsx';
import Header from './components/Header/Header.jsx';
import Error from './components/Error/Error.jsx';
import Loader from './components/Loader/Loader.jsx';

const App = () => {

    const {
        totalVacancies, totalIdListForRemove, isLoad, error, portionSize, page, search
    } = useVacancies();
    const {
        setVacancies, createNewVacancy, removeVacancies
    } = useHandlers();
    useEffect(() => {
        setVacancies(page, search);
    }, [page, search]);

    if (error) return <Error error={error}/>;
    if (isLoad) return <Loader text={'Loading...'}/>;

    return (
        <div className={'wrapper'}>
            <Header totalVacancies={totalVacancies} search={search}/>
            <main>

                {(!!totalVacancies || search) && < Table/>}
                <MainButtonControllers totalIdListForRemove={totalIdListForRemove}
                                       createNewVacancy={createNewVacancy}
                                       removeVacancies={removeVacancies}
                                       totalVacancies={totalVacancies}
                                       portionSize={portionSize}

                />
                {(totalVacancies > portionSize) && <Pagination totalVacancies={totalVacancies}
                                                               currentPage={page}
                                                               portionSize={portionSize}
                                                               search={search}

                />}
            </main>
        </div>
    );

};

export default App;

