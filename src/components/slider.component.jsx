import { useContext } from 'react';

//context
import { SliderContext } from '../contexts/slider.context';

//components
import MediaContent from './media-content.component';
import SliderButton from './slider-button.component';
import HorizontalStrip from './horizontal-strip.component';

const Slider = () => {
    //Using slider context values
    const { data, currentIndex, next, prev, setCurrentIndex, handleClosePreview } =
        useContext(SliderContext);

    const handleThumbnailClick = (index) => setCurrentIndex(index);

    //null check for media availability.
    if (!data || data.length === 0 || !data[currentIndex]) {
        return null;
    }

    return (
        <div className='fixed inset-0 bg-black bg-opacity-75 flex flex-col items-center justify-center z-50 sm:gap-14'>
            <div className='relative max-w-screen-lg w-full h-4/5 bg-black flex items-center justify-center'>
                {/* close button */}
                <SliderButton
                    className='absolute top-0 right-0 m-4 text-black font-semibold text-[30px] sm:text-[43px] z-10 outline-none bg-gray-50'
                    handleClick={handleClosePreview}
                    name='&times;'
                />

                {/* previous button */}
                <SliderButton
                    className='absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-2xl sm:text-4xl z-10'
                    handleClick={prev}
                    name='&#10094;'
                />

                {/* next button */}
                <SliderButton
                    className='absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-2xl sm:text-4xl z-10'
                    handleClick={next}
                    name='&#10095;'
                />

                {/* media preview */}
                <div className='flex items-center justify-center'>
                    <MediaContent />
                </div>
            </div>

            {/* Horizontal strip to show below the preview */}
            <HorizontalStrip handleThumbnailClick={handleThumbnailClick} />
        </div>
    );
};

export default Slider;
