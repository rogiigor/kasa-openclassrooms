import './Collapsable.scss'
import { useState } from 'react'

const Collapsable = ({ title, info, width }) => {
    console.log('width: ', width)
    const [isOpen, setIsOpen] = useState(false)
    return isOpen ? (
            <div className='collapse-container'>
                <button onClick={() => setIsOpen(false)} className='open-button' 
                                        style={{'--cl-width': `${width}`}}>{title}</button>
                <div className='info-details' style={{'--cl-width': `${width}`}}>
                    {Array.isArray(info) ? 
                        info.map((element) => (
                            <div className='info-details__array-element'
                                >{element}</div>
                        )) :
                        <div className='info-details__string'>{info}</div>}
                </div>
            </div>
        ) : (
            <div className='collapse-container'>
                <button onClick={() => setIsOpen(true)} className='open-button'
                    style={{'--cl-width': `${width}`}}>{title}</button>
            </div>  
        )
}

export default Collapsable