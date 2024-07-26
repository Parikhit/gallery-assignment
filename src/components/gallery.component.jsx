import { useState, useContext } from 'react';

//context
import { SliderContext } from '../contexts/slider.context';

const Gallery = () => {
    const [mediaCount, setMediaCount] = useState(6);
    const [clicked, setClicked] = useState(false);

    const { setSelectedMediaIndex, data } = useContext(SliderContext);

    const handleMediaClick = (index) => setSelectedMediaIndex(index);

    const handleMoreMedia = () => {
        const totalMediaCount = data.length;

        setClicked((prev) => !prev);
        setMediaCount(totalMediaCount);

        if (clicked) {
            setMediaCount(6);
            return;
        }
    };

    return (
        <>
            <main className='max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 gap-4 mt-14 p-3'>
                {data?.slice(0, mediaCount).map((item, index) => {
                    const { id, type, path, alt } = item;

                    return (
                        <div
                            key={id}
                            className='relative border border-black rounded-lg flex items-center justify-center p-2 cursor-pointer hover:scale-105 transition-transform'
                            onClick={() => handleMediaClick(index)}
                        >
                            {type === 'image' ? (
                                <img
                                    width={400}
                                    height={300}
                                    src={path}
                                    alt={alt}
                                />
                            ) : (
                                <>
                                    <video className='relative w-full h-auto'>
                                        <source
                                            src={path}
                                            type='video/mp4'
                                        />
                                    </video>
                                    <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                                        <img
                                            className='text-gray-200 text-5xl'
                                            width={80}
                                            height={80}
                                            src='src/assets/play.svg'
                                            alt='play-button'
                                        />
                                    </div>
                                </>
                            )}
                        </div>
                    );
                })}
            </main>
            <div className='max-w-7xl mx-auto flex justify-end text-blue-800 text-lg font-medium mb-4'>
                <button onClick={handleMoreMedia}>{clicked ? 'Less...' : 'More...'}</button>
            </div>
        </>
    );
};

export default Gallery;
