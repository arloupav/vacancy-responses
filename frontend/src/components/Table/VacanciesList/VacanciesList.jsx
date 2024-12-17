import Line from './Line/Line.jsx';
import {useVacancies} from '../../../hooks/useVacancies.js';

const VacanciesList = () => {
    const {vacanciesList}=useVacancies()
    return vacanciesList.map(vacancy => <Line  key={vacancy.id} vacancy={vacancy}/>);
};

export default VacanciesList;