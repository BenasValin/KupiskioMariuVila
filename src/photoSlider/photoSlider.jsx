import React, { useRef } from 'react';
import './photoSlider.css';
import arrow from '../Images/arrowDown.png';

function PhotoSlider({ images }) {
    const sliderRef = useRef(null);

    const scrollLeft = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({ left: -200, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({ left: 200, behavior: 'smooth' });
        }
    };

    return (
        <div className='photoSliderContainer'>
            <button className='sliderButton sliderButton1' onClick={scrollLeft}>
                <img src={arrow} alt="Scroll left" />
            </button>
            <div className='photoSliderWrapper' ref={sliderRef}>
                {images.map((image, index) => (
                    <img draggable="false" key={index} className='photoSliderImage' src={image} alt={`Slide ${index}`} />
                ))}
            </div>
            <button className='sliderButton sliderButton2' onClick={scrollRight}>
                <img src={arrow} alt="Scroll right" />
            </button>
        </div>
    );
}

export default PhotoSlider;
