import logo from '../../assets/logo.png'
import { NavLink } from 'react-router-dom'
import './Header.scss'

const Header = () => {
    return (
        <header className='header'>
            <div className='header-content'>
                <img src={logo} alt='Kasa logo' className='header-content__kasa-logo' />
                <nav className='header-content__nav'>
                    <NavLink to='/' end="" className='header-content__nav-link'>Home</NavLink>
                    <NavLink to='/about' className='header-content__nav-link'>About</NavLink>
                </nav>
            </div>    
        </header>
    )
}

export default Header