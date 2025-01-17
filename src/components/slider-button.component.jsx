const SliderButton = ({ handleClick, name, className }) => {
    return (
        // Generalized button component for slider controls
        <button
            onClick={handleClick}
            className={`${className} hover:scale-110 transition-transform outline outline-white rounded-full w-9 h-9 sm:w-16 sm:h-16 flex items-center justify-center z-20 text-center`}
        >
            {name}
        </button>
    );
};

export default SliderButton;
