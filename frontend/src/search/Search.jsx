import {useNavigate} from 'react-router';
import {useState} from 'react';

import Input from '../components/UI/Input.jsx';
import Icon from '../components/UI/Icon.jsx';

import {iconsName} from '../constants/constants.js';

const Search = ({search}) => {
    const navigate = useNavigate();
    const [value, setValue] = useState(search);

    const sendSearchRequestHandler = () => {
        navigate(`/?page=1&search=${value}`);
    };

    const handleKeyPress = (key) => {
        if (key === 'Enter') {
            sendSearchRequestHandler();
        }
    };

    const handleClearSearchValue = () => {
        setValue('');
    };

    return (
        <div className={'search'}>
            <Input autoFocus={false}
                   initialValue={value}
                   onChange={setValue}
                   onKeyDown={handleKeyPress}
                   placeholder={'поиск'}
            />
            {value && <div className={'search__buttons'}>
                <Icon name={iconsName.XMARK} onClick={handleClearSearchValue}/>
                <Icon name={iconsName.SEARCH} onClick={sendSearchRequestHandler}/>
            </div>}
        </div>
    );
};

export default Search;