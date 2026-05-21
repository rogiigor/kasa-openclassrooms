import Logo from './Logo'
import NavMenu from './NavMenu'
import '../styles/Header.scss'

const Header = () => {
    return (
        <div className='header-container'>
            <Logo />
            <NavMenu />
        </div>
    )
}

export default Header