import { useParams } from 'react-router-dom'
import Collapsable from '../../components/Collapsable'
import Carousel from '../../components/Carousel'
import Error from '../Error'
import { getPropertyById } from '../../data/properties' 
import './PropertyDetail.scss'



const PropertyDetail = () => {
    const id = useParams()

    const property = getPropertyById(id);

    if (!property) {
        return <Error />
    }

    return (
        <div className='page'>
            <div className='property-detail'>
                <Carousel property={property} />
                <section className='property-detail__description-container'>
                    <div className='property-detail__description'>
                        <h1 className='property-detail__description-title'>{property.title}</h1>
                        <h3 className='property-detail__description-location'>{property.location.replace(/[^a-zA-Z0-9- ]/g, "")         // supprime tous les caractères parasites
                                                                                                .replace(/\s+/g, ' ')                   // eemplace tous les espaces multiples par un espace unique.
                                                                                                .replace(/^([^ ]* [^ ]*) /, "$1 - ")    // remplacer le deuxième espace par " - "
                                                                                                .replace(/[ ]/, " , ")                  // remplacer le premier espace par " , "
                                                                              }</h3>
                        <div className='property-detail__description-tags'>
                            {property.tags.map((tag, index) => (
                                <button key={`${tag}-${index}`} className='property-detail__description-tags-tag'>
                                    {tag}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className='property-detail__host-and-rating'>
                        <div className='property-detail__host'>
                            <div className='property-detail__host-name'>
                                <h2 className='property-detail__host-name--first'>{property.host.name.split(' ')[0]}</h2>
                                <h2 className='property-detail__host-name--last'>{property.host.name.split(' ')[1]}</h2>
                            </div>
                            <img className='property-detail__host-picture' 
                                src={property.host.picture}
                                alt="property host picture" 
                            />
                        </div>
                        <div className='property-detail__rating'>
                            {Array.from({ length: Number(property.rating) }).map((_, index) => (
                                <i key={index} className="fa-solid fa-star fa-active" aria-hidden="true"></i>
                            ))}
                            {Array.from({ length: 5 - Number(property.rating) }).map((_, index) => (
                                <i key={index} className="fa-solid fa-star fa-inactive" aria-hidden="true"></i>
                            ))}
                        </div>
                    </div>
                </section>
                <section className='property-detail__description-and-amenities'>
                        <Collapsable title={"Description"} info={property.description} width={"90%"}/>
                        <Collapsable title={"Amenities"} info={property.equipments} width={"90%"}/>
                </section>
            </div>
        </div>
    )
}

export default PropertyDetail
