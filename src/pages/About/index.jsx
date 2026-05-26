import Footer from "../../components/Footer"
import Header from "../../components/Header"
import Collapsable from "../../components/Collapsable"
import aboutImage from '../../assets/about-mountains.jpg'
import { valuesData } from "../../data/values"
import './About.scss'

const About = () => {
    return (
        <div className="page">
            {/* <div className='page'> */}
                <img src={aboutImage} alt="mountains over river" className="about-image" />
            {/* </div> */}

            <div className="values-container">
                {valuesData.map((value) => (
                    <Collapsable key={value.title} info={value} />
                ))}
            </div>
        </div>
 
    )
}

export default About