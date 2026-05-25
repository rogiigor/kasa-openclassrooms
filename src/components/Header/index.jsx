import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import './Header.scss'

const Header = () => {
    return (
        <header className='header'>
            <div className='header-content'>
                <img src={logo} alt='Kasa logo' className='kasa-logo' />
                <nav className='nav'>
                    <Link to='/' className='nav-link'>Home</Link>
                    <Link to='/about' className='nav-link'>About</Link>
                </nav>
            </div>    
        </header>
    )
}

export default Header