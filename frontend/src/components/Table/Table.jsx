import Headers from './Headers/Headers.jsx';
import VacanciesList from './VacanciesList/VacanciesList.jsx';

const Table = () => {
    const tableHeaders = ['Компания', 'Вакансия', 'Зарплатная вилка', 'Статус отклика', 'Заметка'];

    return (
        <>
            <Headers tableHeaders={tableHeaders}/>
            <VacanciesList />
        </>
    );

};

export default Table;