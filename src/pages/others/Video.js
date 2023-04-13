import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'

export default function Video({ title, thumbnail, date, views, link }) {
    return (
        <div className="youtube lg:w-full h-80 lg:h-40 xl:h-16 rounded overflow-hidden bg-zinc-800 flex flex-col lg:flex-row lg:items-center">
            <img src={thumbnail} className="lg:h-full lg:mr-4 object-contain" />
            <div className='w-full h-full flex flex-col xl:flex-row lg:items-start xl:items-center overflow-hidden'>
                <div className='m-2 flex flex-col justify-between min-w-0'>
                    <h1 className='font-bold lg:text-md xl:whitespace-nowrap text-ellipsis overflow-hidden'>{title}</h1>
                    <div className='mt-4 lg:mt-0 inline-flex items-center'>
                        <p className='text-xs mr-8'>{new Date(date).toDateString()}</p>
                        <FontAwesomeIcon className="pl-4 text-yellow-600 mr-2 h-3" icon={faEye} />
                        <span className='text-sm'>{Number(views).toLocaleString()}</span>
                    </div>
                </div>
                <div className='mt-auto xl:mt-0 w-32 mr-auto lg:mr-0 xl:mr-4 ml-auto rounded flex flex-col justify-center bg-yellow-600 text-center relative bottom-4 lg:right-4 xl:bottom-auto xl:right-auto  h-8 xl:h-10 hover:bg-black'>
                    <a href={link} target="_blank">
                        WATCH
                    </a>
                </div>
            </div>
        </div>
    )
}