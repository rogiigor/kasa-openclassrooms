import './Footer.scss'
import logoWhite from '../../assets/logo-white.png'

const Footer = () => {
    return (
        <footer className='footer-container'>
            <main className='footer-container__content-404'>
                <img src={logoWhite} className='footer-logo' alt='footer logo' />
                <p>@ 2020 Kasa. All rights reserver</p>
            </main>
        </footer>
    )
}

export default Footer