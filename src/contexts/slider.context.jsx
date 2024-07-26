import { useState, createContext } from 'react';

import useSlider from '../hooks/useSlider.hook';

import data from '../utils/data.json';

export const SliderContext = createContext();

export const SliderProvider = ({ children }) => {
    const [selectedMediaIndex, setSelectedMediaIndex] = useState(null);
    const { currentIndex, next, prev, setCurrentIndex } = useSlider(selectedMediaIndex, data);

    const handleClosePreview = () => setSelectedMediaIndex(null);

    const value = {
        currentIndex,
        next,
        prev,
        setCurrentIndex,
        handleClosePreview,
        selectedMediaIndex,
        setSelectedMediaIndex,
        data,
    };

    return <SliderContext.Provider value={value}>{children}</SliderContext.Provider>;
};
