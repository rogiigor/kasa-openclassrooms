import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import './Header.scss'

const Header = () => {
    return (
        <header className='header'>
            <div className='header-content'>
                <img src={logo} alt='Kasa logo' className='kasa-logo' />
                <nav className='nav'>
                    <a href='#' className='nav-link'>Home</a>
                    <a href='#' className='nav-link'>About</a>
                </nav>
            </div>    
        </header>
    )
}

export default Header