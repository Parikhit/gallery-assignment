import { useContext } from 'react';

import { SliderContext } from '../contexts/slider.context';

const MediaContent = ({ isZoomed }) => {
    const { data, currentIndex } = useContext(SliderContext);

    const currentMedia = data[currentIndex];

    return (
        <>
            {/* conditionally rendering video/image for media preview */}
            {currentMedia.type === 'image' ? (
                <img
                    src={currentMedia.path}
                    alt={currentMedia.alt}
                    className={`w-full h-auto max-h-screen ${
                        isZoomed ? 'scale-125 z-10' : 'scale-100'
                    } transition-transform`}
                />
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
