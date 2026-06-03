import './Collapsable.scss'
import { useState } from 'react'

const Collapsable = ({ title, info, width }) => {
    console.log('width: ', width)
    const [isOpen, setIsOpen] = useState(false)
    return isOpen ? (
            <div className='collapse-container' style={{'--cl-width': `${width}`}}>
                <button onClick={() => setIsOpen(false)} className='open-button' >{title}</button>
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
                <button onClick={() => setIsOpen(true)} className='open-button'>{title}</button>
            </div>  
        )
}

export default Collapsable