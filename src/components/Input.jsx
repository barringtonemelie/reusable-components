function Input({type, placeholder, id, name}) {
    return (
        <div>
            <input
                type={type}
                id={id}
                name={name}
                placeholder={placeholder}
            />
        </div>
    )
}

export default Input;