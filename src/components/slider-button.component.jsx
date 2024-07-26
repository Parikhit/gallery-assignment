const SliderButton = ({ handleClick, name, className }) => {
    return (
        <button
            onClick={handleClick}
            className={`${className} hover:scale-110 transition-transform`}
        >
            {name}
        </button>
    );
};

export default SliderButton;
