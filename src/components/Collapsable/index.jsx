import './Collapsable.scss'
import { useState } from 'react'

const Collapsable = ({ title, info, width }) => {
    const [isOpen, setIsOpen] = useState(false)

    return isOpen ? (
            <div className='collapse-container' style={{'--cl-width': `${width}`}}>
                <button onClick={() => setIsOpen(false)} className='open-button' >
                    <span className='open-button__title'>{title}</span>
                    <span className={`open-button__hat-shape ${isOpen ? 'rotated' : ''}`} ></span>
                </button>
                <div className='info-details'>
                    {Array.isArray(info) ? 
                        info.map((element) => (
                            <div className='info-details__array-element'
                                >{element}</div>
                        )) :
                        <div className='info-details__string'>{info}</div>}
                </div>
            </div>
        ) : (
            <div className='collapse-container' style={{'--cl-width': `${width}`}}>
                <button onClick={() => setIsOpen(true)} className='open-button'>
                    <span open-button__title>{title}</span>
                    <span className={`open-button__hat-shape ${isOpen ? 'rotated' : ''}`}></span>
                </button>
            </div>  
        )
}

export default Collapsable