import {memo, useState} from 'react';
import Input from '../../../../../UI/Input.jsx';
import Select from '../../../../../UI/Select.jsx';
import Textarea from '../../../../../UI/Textarea.jsx';
import {useVacancies} from '../../../../../../hooks/useVacancies.js';
import {useHandlers} from '../../../../../../hooks/useHandlers.js';

const Cell = memo(({initialValue, name, vacancyId,}) => {
    // console.log(name);
    const [isActive, setISActive] = useState(false);
    const [currentValue, setCurrentValue] = useState(initialValue);

    const {idListForRemove} = useVacancies();

    const {updateVacancy} = useHandlers();

    const handleSetValue = () => {
        setISActive(false);
        updateVacancy(name, currentValue, vacancyId, initialValue);
    };

    const handleSetIsActive = () => {
        setISActive(!isActive);
    };

    const handleKeyPress = (key) => {
        if (key === 'Enter') {
            handleSetValue();
        } else if (key === 'Escape') {
            setCurrentValue('');
            setISActive(!isActive);
        }
    };

    const sellController = () => {

        switch (name) {
            case 'note':
                return <Textarea initialValue={currentValue}
                                 onBlur={handleSetValue}
                                 onChange={setCurrentValue}
                                 onKeyDown={handleKeyPress}
                />;
            case 'status':
                return <Select initialValue={currentValue}
                               options={['не выбран', 'отправлен', 'отказ', 'приглашение']}
                               onBlur={handleSetValue}
                               onChange={setCurrentValue}
                />;
            default:
                return <Input  autoFocus={true}
                    initialValue={currentValue}
                              onBlur={handleSetValue}
                              onChange={setCurrentValue}
                              onKeyDown={handleKeyPress}
                />;
        }

    };
    const setStatusStyles = (status) => {
        switch (status) {
            case 'отправлен':
                return 'yellow';
            case 'отказ':
                return 'red';
            case 'приглашение':
                return 'green';
            default:
                return '';
        }
    };

    return (
        isActive ?
            sellController()
            :
            <span
                className={`${setStatusStyles(initialValue)} ${idListForRemove.includes(vacancyId) ? 'selected' : ''}`}
                onDoubleClick={handleSetIsActive}>
                {initialValue || currentValue}
            </span>);
});

export default Cell;


