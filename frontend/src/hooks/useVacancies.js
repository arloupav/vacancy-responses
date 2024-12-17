import {useContext} from 'react';
import {VacanciesContext} from '../components/Providers/VacanciesProvider.jsx';

export const useVacancies = () => {
    return useContext(VacanciesContext);
};

