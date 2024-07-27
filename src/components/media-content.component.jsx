import { useContext, useState } from 'react';

import { SliderContext } from '../contexts/slider.context';

import SliderButton from './slider-button.component';

const MediaContent = () => {
    const { data, currentIndex } = useContext(SliderContext);

    //State form add zoom
    const [isZoomed, setIsZoomed] = useState(false);

    const handleZoom = () => setIsZoomed(!isZoomed);

    const currentMedia = data[currentIndex];

    return (
        <>
            {/* conditionally rendering video/image for media preview */}
            {currentMedia.type === 'image' ? (
                <>
                    <img
                        src={currentMedia.path}
                        alt={currentMedia.alt}
                        className={`w-full h-auto max-h-screen ${
                            isZoomed ? 'scale-125 z-10' : 'scale-100'
                        } transition-transform`}
                    />

                    {/* zoom button */}
                    <SliderButton
                        className='absolute bottom-0 right-4 outline-none transform -translate-y-1/2 text-white text:2xl sm:text-4xl z-10'
                        handleClick={handleZoom}
                        name='&#128269;'
                    />
                </>
            ) : (
                <video
                    controls
                    className='w-full h-auto max-h-screen'
                >
                    <source
                        src={currentMedia.path}
                        type='video/mp4'
                    />
                </video>
            )}
        </>
    );
};

export default MediaContent;
