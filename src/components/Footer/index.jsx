import './Footer.scss'
import logoWhite from '../../assets/logo-white.png'

const Footer = () => {
    return (
        <footer className='footer-container'>
            <img src={logoWhite} className='footer-logo' alt='footer logo' />
            <p>@ 2020 Kasa. All rights reserver</p>
        </footer>
    )
}

export default Footer