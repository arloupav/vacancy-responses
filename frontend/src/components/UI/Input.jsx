const Input = ({initialValue, onBlur, onChange,onKeyDown,autoFocus,placeholder}) => {

    return (
        <input autoFocus={autoFocus}
               value={initialValue}
               onChange={(e) => onChange(e.currentTarget.value)}
               onBlur={onBlur}
               onKeyDown={e=>onKeyDown(e.key)}
               placeholder={placeholder}
        />
    );

};

export default Input;