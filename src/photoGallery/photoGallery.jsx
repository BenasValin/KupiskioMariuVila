import './photoGallery.css'
import zvejuNamelis from '../Images/zveju.jpg'
import arrow from '../Images/arrowDown.png'
import { useState } from 'react'
import { LazyLoadImage, blur } from 'react-lazy-load-image-component'
import pagrindinis from '../Images/pagrinidispastatas.jpg'

function PhotoGallery({ images, height }) {
    const [imageIndex, setImageIndex] = useState(0);

    // Find the initial image that starts with "1-" and move it to the front
    const initialImageIndex = images.findIndex(image => {
        const fileNameWithExtension = image.split('/').pop();
        return fileNameWithExtension.startsWith("1-");
    });

    if (initialImageIndex > 0) {
        const [initialImage] = images.splice(initialImageIndex, 1);
        images.unshift(initialImage);
    }

    const handleNextClick = () => {
        setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrevClick = () => {
        setImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const extractFileName = (url) => {
        if (!url) return '';
        const fileNameWithExtension = url.split('/').pop(); // Get the last segment after the last slash
        let fileName = fileNameWithExtension.split('.').slice(0, -1).join('.'); // Removes the extension
        // Remove the "1-" prefix if it exists
        fileName = fileName.replace(/^1-/, '');
        // Remove the hash part, assuming it follows a predictable pattern like a dot followed by a hash
        const cleanFileName = fileName.replace(/\.[0-9a-f]{10,}$/i, '');
        return cleanFileName;
    };

    return (
        <div className='photoGalleryContainer' style={{maxWidth: height}}>
            {images[imageIndex] && (
                <LazyLoadImage
                    className="photoGalleryImage"
                    src={images[imageIndex]}
                    effect={blur}>
                </LazyLoadImage>
            )}
            <div className='photoGalleryNav'>
                <button className='button' onClick={handlePrevClick}><img className="photoGalleryArrowLeft" src={arrow} alt="Previous" /></button>
                <button className='button' onClick={handleNextClick}><img className="photoGalleryArrowRight" src={arrow} alt="Next" /></button>
                <a className='photoGalleryImageName'>{extractFileName(images[imageIndex])}</a>
            </div>
        </div>
    )
}

export default PhotoGallery;
