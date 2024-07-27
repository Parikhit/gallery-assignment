import { useContext, useEffect, useRef } from 'react';

//context
import { SliderContext } from '../contexts/slider.context';

const HorizontalStrip = ({ handleThumbnailClick }) => {
    const { data, currentIndex } = useContext(SliderContext);

    const itemRefs = useRef([]);

    const scrollToCurrent = () => {
        if (itemRefs.current[currentIndex]) {
            itemRefs.current[currentIndex].scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'center',
            });
        }
    };

    // Call scrollToCurrent whenever currentIndex changes
    useEffect(() => {
        scrollToCurrent();
    }, [currentIndex]);

    return (
        <div className='mt-3 flex items-center sm:justify-center mx-auto overflow-x-auto space-x-2 w-4/5 no-scrollbar'>
            {data.map((item, index) => (
                <div
                    key={index}
                    ref={(el) => (itemRefs.current[index] = el)}
                    className={`cursor-pointer p-1 ${
                        currentIndex === index ? 'border-2 border-white' : 'border border-gray-300'
                    } hover:scale-95 transition-transform flex-shrink-0`}
                    onClick={() => handleThumbnailClick(index)}
                >
                    {item.type === 'image' ? (
                        <img
                            src={item.path}
                            alt={item.alt}
                            className='sm:w-20 sm:h-20 object-cover w-16 h-16'
                        />
                    ) : (
                        <div className='relative'>
                            <video
                                poster={item.poster}
                                className='w-20 h-20 object-cover'
                            >
                                <source
                                    src={item.path}
                                    type='video/mp4'
                                />
                            </video>
                            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                                <img
                                    className='text-gray-200 text-5xl'
                                    width={80}
                                    height={80}
                                    src='./assets/play.svg'
                                    alt='play-button'
                                />
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default HorizontalStrip;
