import logo from '../../assets/logo.png'
import { NavLink } from 'react-router-dom'
import './Header.scss'

const Header = () => {
    return (
        <header className='header'>
            <div className='header-content'>
                <img src={logo} alt='Kasa logo' className='kasa-logo' />
                <nav className='nav'>
                    <NavLink to='/' end="" className='nav-link'>Home</NavLink>
                    <NavLink to='/about' className='nav-link'>About</NavLink>
                </nav>
            </div>    
        </header>
    )
}

export default Header