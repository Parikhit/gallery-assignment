import { useEffect, useState } from 'react';

const useSlider = (initialIndex = 0, mediaList = []) => {
    const [currentIndex, setCurrentIndex] = useState(initialIndex);

    //custom hook for the slider functionalities such as prev, nex and close buttons.

    useEffect(() => {
        if (initialIndex !== null && initialIndex >= 0 && initialIndex < mediaList.length) {
            setCurrentIndex(initialIndex);
        }
    }, [initialIndex, mediaList.length]);

    // %mediaList.length ensures that the index wraps around to the beginning when it exceeds the length of the mediaList array.
    const next = () => setCurrentIndex((prev) => (prev + 1) % mediaList.length);

    // %mediaList.length ensures that the index wraps around to the end of the mediaList array when it goes below 0
    const prev = () => setCurrentIndex((prev) => (prev - 1 + mediaList.length) % mediaList.length);

    return {
        currentIndex,
        next,
        prev,
        setCurrentIndex,
    };
};

export default useSlider;
