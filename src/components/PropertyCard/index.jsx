import './PropertyCard.scss'

const PropertyCard = ({ property }) => {
    return (
        <div className='property-card'>
            <img
                src={property.cover}
                alt={property.title}
                className='property-cover-img'
            />
            <h3 className='property-title'>{property.title}</h3>
        </div>
    )
}

export default PropertyCard