import {useState} from 'react';
import {useHandlers} from '../../../../../hooks/useHandlers.js';
import {useVacancies} from '../../../../../hooks/useVacancies.js';
import {iconsName} from '../../../../../constants/constants.js';
import Icon from '../../../../UI/Icon.jsx';

const ControlButtons = ({vacancyId,}) => {
    const [isDeleteInProgress, setIsDeleteInProgress] = useState(false);

    const {toggleIdFromRemoveList, removeVacancy} = useHandlers();
    const {idListForRemove} = useVacancies();

    const toggleIdHandler = () => {
        setIsDeleteInProgress(true);
        toggleIdFromRemoveList(vacancyId);
        setIsDeleteInProgress(false);
    };

    const removeHandler = () => {
        setIsDeleteInProgress(true);
        removeVacancy(vacancyId);
        // setIsDeleteInProgress(false);
    };

    return (
        <div className={`control-btns`}>
            {idListForRemove.includes(vacancyId) ?
                <Icon onClick={toggleIdHandler}
                      title={'cansel'}
                      name={iconsName.XMARK}
                      classname={``}
                />
                :
                <Icon onClick={toggleIdHandler}
                      name={iconsName.CHECK}
                      classname={``}
                      title={'select  vacancy'}
                />
            }
            {idListForRemove.includes(vacancyId)
                &&
                <Icon name={iconsName.TRASH}
                      onClick={removeHandler}
                      classname={`${isDeleteInProgress ? 'pending' : ''} `}
                      title={'remove  vacancy'}
                />
            }
        </div>
    );
};

export default ControlButtons;