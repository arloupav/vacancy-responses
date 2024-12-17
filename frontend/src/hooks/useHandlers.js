import {useContext} from 'react';
import {HandlersContext} from '../components/Providers/VacanciesProvider.jsx';

export const useHandlers = () => {
    return useContext(HandlersContext);
};