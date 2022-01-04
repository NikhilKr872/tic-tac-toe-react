function Button({ text, clear }) {
    return (
        <button className="btn" onClick={clear}>
            {text}
        </button>
    );
}

export default Button;
