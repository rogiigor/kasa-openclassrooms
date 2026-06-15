import './Carousel.scss'
import { useState } from 'react'
import rightAngle from '../../assets/right-angle.png'
import leftAngle from '../../assets/left-angle.png'

const Carousel = ({ property }) => {
    const [imagePosition, updateImagePosition] = useState(0);

    const propertyImagesSize = property.pictures.length;

    const previousImage = () => (imagePosition + propertyImagesSize - 1) % propertyImagesSize;
    const nextImage = () => (imagePosition + 1) % propertyImagesSize;

    const [fade, setFade] = useState(false);

    const changeImage = (newIndex) => {
        setFade(true);
        setTimeout(() => {
            updateImagePosition(newIndex);
            setFade(false);
        }, 300 ); 
    };

    return (
        <div className='carousel'>
            <button onClick={() => changeImage(previousImage())}
                className={propertyImagesSize > 1 ? `carousel__button carousel__button--left` : 'hidden'} aria-label="Précédent">
                    <img src={leftAngle} alt="left arrow" className='carousel__button--left-icon'></img>
            </button >
            <img
                src={property.pictures[imagePosition]}
                alt={property.title}
                className={`carousel__picture ${fade ? 'carousel__picture--fade' : ''}`}
            />
            <button onClick={() => changeImage(nextImage())} 
                    className={propertyImagesSize > 1 ? `carousel__button carousel__button--right` : 'hidden'} aria-label='Suivant'>
                        <img src={rightAngle} alt="right arrow" className='carousel__button--right-icon'></img>
            </button>
            <div className={propertyImagesSize > 1 ? `carousel__image-position` : 'hidden'} > {imagePosition + 1}/{propertyImagesSize}</div>
        </div>
    )
}

export default Carousel