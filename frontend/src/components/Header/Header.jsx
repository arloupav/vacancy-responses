import Search from '../../search/Search.jsx';
import {Link} from 'react-router';
import Icon from '../UI/Icon.jsx';
import {iconsName} from '../../constants/constants.js';

const Header = ({totalVacancies, search}) => {

    return (
        <header className={'header'}>
            <Link to={'/'}>
                <Icon name={iconsName.HOME}/>
            </Link>
            {(totalVacancies >= 2 || search) && <Search search={search}/>}
        </header>
    );
};

export default Header;