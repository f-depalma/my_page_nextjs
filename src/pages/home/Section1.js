import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

export default function Section1() {
    const [visible, setVisible] = useState(false)
    setTimeout(() => setVisible(true), 200)

    return (
        <div className={`${visible ? 'section-visible' : 'section-hide'} bg-black h-full w-full flex flex-col items-center justify-center`}>
            <img src='face-in-black.jpg' className='face-image z-0 object-contain' />
            <h1 className='md:text-7xl text-4xl z-10 text-center'>FRANCESCO DE PALMA</h1>
            <br />
            <h2 className='md:text-4xl text-xl z-10 text-center'>
                Full-stack Software Developer
                <FontAwesomeIcon className="pl-4 text-yellow-600" icon={faLaptopCode} beat />
            </h2>
        </div>
    )
}