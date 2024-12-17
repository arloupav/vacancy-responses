import Icon from '../UI/Icon.jsx';
import {iconsName} from '../../constants/constants.js';
import {useNavigate} from 'react-router';

const MainButtonControllers = ({
                                   totalVacancies,
                                   totalIdListForRemove,
                                   removeVacancies,
                                   createNewVacancy,
                                   portionSize,
                               }) => {

    let navigate = useNavigate();

    const createNewVacancyHandler = async () => {
        const lastPage = (Math.ceil(totalVacancies / portionSize));

        if (totalVacancies % portionSize === 0) {
            navigate(`?page=${lastPage + 1}`);
            createNewVacancy(lastPage + 1);
        } else {
            navigate(`?page=${lastPage}`);
            createNewVacancy(lastPage);
        }
    };

    return (
        <div className={`main-buttons-controller ${totalVacancies ? 'filed-list' : ''} `}>
            {(totalIdListForRemove >= 2) && <Icon title={'remove selected vacancies'}
                                                  classname={`remove-selected-btn`}
                                                  name={iconsName.REMOVE_SELECTED}
                                                  onClick={removeVacancies}
            />}
            <Icon title={'add new vacancy'}
                  classname={`add-vacancy-btn`}
                  name={iconsName.ADD}
                  onClick={createNewVacancyHandler}
            />
        </div>
    );
};

export default MainButtonControllers;

