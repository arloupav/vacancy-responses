const Select = ({onChange, initialValue, onBlur, options}) => {

    return (
        <select autoFocus defaultValue={initialValue}
                onChange={e => onChange(e.target.value)}
                onBlur={onBlur}
        >
            {options.map((option, ind) => <option value={option} key={ind}> {option}</option>)}
        </select>
    );
};

export default Select;