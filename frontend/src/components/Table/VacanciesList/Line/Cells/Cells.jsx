import Cell from './Cell/Cell.jsx';

const Cells = ({vacancy}) => {

    const mapping = (obj, parentKey = '') => {
        const vacancyKeys = Object.keys(obj).filter(key => key !== 'id' && key !== '_id');
        return vacancyKeys.map((vacancyKey, ind) => {
            if (typeof obj[vacancyKey] === 'object') {
                return (
                    <div key={ind} className={'cell-multi'}>
                        {mapping(obj[vacancyKey], vacancyKey)}
                    </div>
                );
            }
            return <Cell vacancyId={vacancy.id}
                         key={ind} initialValue={obj[vacancyKey]}
                         name={parentKey ? (parentKey + '.' + vacancyKey) : vacancyKey}/>;
        });
    };

    return mapping(vacancy);

};

export default Cells;