import { useEffect, useState } from 'react';

const useSlider = (initialIndex = 0, mediaList = []) => {
    const [currentIndex, setCurrentIndex] = useState(initialIndex);

    useEffect(() => {
        if (initialIndex !== null && initialIndex >= 0 && initialIndex < mediaList.length) {
            setCurrentIndex(initialIndex);
        }
    }, [initialIndex, mediaList.length]);

    const next = () => setCurrentIndex((prev) => (prev + 1) % mediaList.length);

    const prev = () => setCurrentIndex((prev) => (prev - 1 + mediaList.length) % mediaList.length);

    return {
        currentIndex,
        next,
        prev,
        setCurrentIndex,
    };
};

export default useSlider;
