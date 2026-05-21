import '../styles/NavMenu.scss'

const NavMenu = () => {
    return (
        <nav className='nav-menu'>
            <ul className='nav-list'>
                <li>
                    <a href='#' className='anchor-menu'>Home</a>
                </li>
                <li>
                    <a href='#' className='anchor-menu'>About</a>
                </li>
            </ul>
        </nav>
    )
} 

export default NavMenu