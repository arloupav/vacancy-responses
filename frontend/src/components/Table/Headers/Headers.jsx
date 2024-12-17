const Headers = ({tableHeaders}) => {

    return (
        <div className={'headers'}>
            {tableHeaders.map((title, ind) => <span key={ind}>{title}</span>)}
        </div>
    );
};
export default Headers;