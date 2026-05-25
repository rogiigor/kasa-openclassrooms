import PropertyCard from '../../components/PropertyCard'
import { propertiesData } from '../../data/properties'
import headerImage from '../../assets/header-mountains.jpg'
import './Home.scss'

const Home = () => {
    return (
        <div className='page'>
            <div className='page-header'>
                <img src={headerImage} alt="mountains over water" className="header-image" />
                <h4 className='header-title'>At home, everywhere, and anywhere</h4>
            </div>

            <div className='properties-container'>
                    {propertiesData.map((property) => (
                        <PropertyCard key={property.id} property={property} />
                ))}
            </div>

        </div>
    )
}

export default Home