import { useContext } from 'react';

//context
import { SliderContext } from '../contexts/slider.context';

const HorizontalStrip = ({ handleThumbnailClick }) => {
    const { data, currentIndex } = useContext(SliderContext);

    return (
        <div className='mt-4 flex overflow-x-auto space-x-2'>
            {data.map((item, index) => (
                <div
                    key={index}
                    className={`cursor-pointer p-1 ${
                        currentIndex === index ? 'border-2 border-white' : 'border border-gray-300'
                    } hover:scale-95 transition-transform`}
                    onClick={() => handleThumbnailClick(index)}
                >
                    {item.type === 'image' ? (
                        <img
                            src={item.path}
                            alt={item.alt}
                            className='w-20 h-20 object-cover'
                        />
                    ) : (
                        <div className='relative'>
                            <video className='w-20 h-20 object-cover'>
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
                                    src='src/assets/play.svg'
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