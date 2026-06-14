import './Carousel.scss'
import { useState } from 'react'

const Carousel = ({ property }) => {
    const [imagePosition, updateImagePosition] = useState(0);

    const propertyImagesSize = property.pictures.length;

    const previousImage = () => (imagePosition + propertyImagesSize - 1) % propertyImagesSize;
    const nextImage = () => (imagePosition + 1) % propertyImagesSize;

    return (
        <div className='carousel'>
            (<button onClick={() => updateImagePosition(previousImage())}
                className={propertyImagesSize > 1 ? `carousel__button carousel__button--left` : 'hidden'} aria-label="Précédent">
                    <i className='fa-solid fa-angle-left carousel__button--left-icon'></i>
            </button >)
            <img
                src={property.pictures[imagePosition]}
                alt={property.title}
                className='carousel__picture'
            />
            <button onClick={() => updateImagePosition(nextImage())} 
                    className={propertyImagesSize > 1 ? `carousel__button carousel__button--right` : 'hidden'} aria-label='Suivant'>
                        <i className='fa-solid fa-angle-right carousel__button--left-icon'></i>
            </button>
            <div className={propertyImagesSize > 1 ? `carousel__image-position` : 'hidden'} > {imagePosition + 1}/{propertyImagesSize}</div>
        </div>
    )
}

export default Carousel