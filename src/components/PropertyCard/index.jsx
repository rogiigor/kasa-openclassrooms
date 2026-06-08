import { Link } from 'react-router-dom'
import './PropertyCard.scss'

const PropertyCard = ({ property }) => {
    return (
        <Link to={`/property/${property.id}`} className='property-card-link'>
            <div className='property-card'>
                <img
                    src={property.cover}
                    alt={property.title}
                    className='property-card__img'
                />
                <h3 className='property-card__title'>{property.title}</h3>
            </div>
        </Link>
        
    )
}

export default PropertyCard