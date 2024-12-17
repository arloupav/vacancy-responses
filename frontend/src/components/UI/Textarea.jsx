const Textarea = ({onChange, initialValue, onBlur, onKeyDown}) => {

    return (
        <textarea autoFocus name="" id="" cols="30" rows="3"
                  value={initialValue}
                  onChange={(e) => onChange(e.currentTarget.value)}
                  onBlur={onBlur}
                  onKeyDown={e => onKeyDown(e.key)}
        />
    );
};

export default Textarea;