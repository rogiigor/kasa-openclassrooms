import { Link } from 'react-router-dom'
import './Error.scss'

const Error = () => {
    return (
        <div className='main-404'>
            <div className='not-found-404'>
                <div>404</div>
            </div>
            <div className='not-found-info'>
                <h3>Oop! The page you're looking for doesn't exist</h3>
            </div>
            <div className='return-to-home'>
                 <Link to='/' className='anchor-footer'>Return to home page</Link>
            </div>
        </div>
    )
}

export default Error