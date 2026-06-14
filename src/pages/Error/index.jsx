import { Link } from 'react-router-dom'
import './Error.scss'

const Error = () => {
    return (
        <div className='error'>
            <div className='error__404'>
                <div>404</div>
            </div>
            <div className='error__info'>
                <h2>Oop! The page you're looking for doesn't exist</h2>
            </div>
            <div className='error__return-to-home'>
                 <Link to='/' className='anchor-footer'>Return to home page</Link>
            </div>
        </div>
    )
}

export default Error