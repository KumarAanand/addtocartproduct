import React from 'react';
import '../Styles/ImageContainer.scss';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ImageContainer = ({ imageUrls }) => {
    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
        return (
            <div className="scrollable-image-carousel">
                <Carousel>
                    {imageUrls.map((imageUrl, index) => (
                        <div key={index}>
                            <img src={imageUrl} alt={`Image ${index}`} />
                        </div>
                    ))}
                </Carousel>
            </div>
        );
    } 
    else {
        return (
            <div className="scrollable-image-column">
                <div className="image-list">
                    {imageUrls.map((imageUrl, index) => (
                        <div key={index} className="image-item">
                            <img src={imageUrl} alt={`Image ${index}`} />
                        </div>
                    ))}
                </div>
            </div>
        );
    }
};

export default ImageContainer;
