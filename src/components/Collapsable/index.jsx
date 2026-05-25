import './Collapsable.scss'
import { useState } from 'react'

const Collapsable = ({ info }) => {
    const [isOpen, setIsOpen] = useState(false)
    return isOpen ? (
            <div className='collapse-container'>
                <button onClick={() => setIsOpen(false)} className='open-button'>{info.title}</button>
                <div className='info-details'>
                    <p>{info.definition}</p>
                </div>
            </div>
        ) : (
            <div className='collapse-container'>
                <button onClick={() => setIsOpen(true)} className='open-button'>{info.title}</button>
            </div>  
        )
}

export default Collapsable