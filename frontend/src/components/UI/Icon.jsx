import xmark from '../../pic/icons/xmark.svg';
import check from '../../pic/icons/check.svg';
import trash from '../../pic/icons/trash.svg';
import add from '../../pic/icons/add.svg';
import removeSelected from '../../pic/icons/remov-selected.svg';
import search from '../../pic/icons/search.svg';
import home from '../../pic/icons/home.svg';


const Icon = ({name, classname='',onClick,title}) => {
    const icons = {
        xmark,
        check,
        trash,
        add,
        removeSelected,
        search,
        home
    };

        return <img title={title} onClick={onClick} className={`icon ${classname }`} src={icons[name]} alt={name}/>;
};

export default Icon;



