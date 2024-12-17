import {Link} from 'react-router';

const Pagination = ({totalVacancies, portionSize, search, currentPage}) => {
    const pages = [];
    const pagesCount = Math.ceil(totalVacancies / portionSize);

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i.toString());
    }


    return (
        <div className={'pagination'}>
            {pages.map((page, ind) => <Link className={((currentPage ?? '1') === page) ? 'active' : ''} key={ind}
                                            to={`/?page=${page}&?search=${search ?? ''}`}>{page}</Link>)}
        </div>
    );
};

export default Pagination;