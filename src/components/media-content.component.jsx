import { useContext } from 'react';

import { SliderContext } from '../contexts/slider.context';

const MediaContent = () => {
    const { data, currentIndex } = useContext(SliderContext);

    const currentMedia = data[currentIndex];

    return (
        <>
            {currentMedia.type === 'image' ? (
                <img
                    src={currentMedia.path}
                    alt={currentMedia.alt}
                    className='w-full h-auto max-h-screen'
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
