import React, { useState } from 'react';

const SlideShow = ({ images }) => {
    const [index, setIndex] = useState(0);

    const nextSlide = () => {
        setIndex((index + 1) % images.length);
    }

    const prevSlide = () => {
        setIndex((index - 1 + images.length) % images.length);
    }

    return (
        <div className="flex flex-col items-center w-full h-full">
            <div className="flex flex-col items-center space-x-4 mb-4">
                <div className="w-[800px] h-[400px] overflow-hidden flex justify-center items-center bg-gray-200"> {/* Fixed width and height */}
                    <img
                        src={images[index]}
                        alt="slide"
                        className="object-cover w-full h-full" // This will crop or fit the image to the container
                    />
                </div>
                <div className='flex justify-center space-x-5 my-5'>
                    <button onClick={prevSlide} className="bg-gray-700 text-white px-4 py-2 rounded">
                        &lt;
                    </button>
                    <button onClick={nextSlide} className="bg-gray-700 text-white px-4 py-2 rounded">
                        &gt;
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SlideShow;
