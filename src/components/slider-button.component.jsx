const SliderButton = ({ handleClick, name, className }) => {
    return (
        // Generalized button component for slider controls
        <button
            onClick={handleClick}
            className={`${className} hover:scale-110 transition-transform outline outline-white rounded-full w-14 h-14 flex items-center justify-center z-20`}
        >
            {name}
        </button>
    );
};

export default SliderButton;
