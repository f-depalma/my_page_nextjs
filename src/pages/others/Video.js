import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'

export default function Video({ id, title, thumbnail, description, date, views, link }) {
    console.log(id)

    return (
        <div className="w-full h-16 rounded overflow-hidden bg-zinc-800 mb-4 flex flex-row justify-start items-center">
            <img src={thumbnail} className="w-32 mr-4  object-cover" />
            <div className='m-2 flex flex-col justify-between'>
                <h1>{title}</h1>
                <div className='inline-flex items-center'>
                    <p className='text-xs mr-8'>{new Date(date).toDateString()}</p>
                    <FontAwesomeIcon className="pl-4 text-yellow-600 mr-2 h-3" icon={faEye} />
                    <span className='text-sm'>{Number(views).toLocaleString()}</span>
                </div>
            </div>
            <div className='w-32 ml-auto mr-8 rounded flex flex-col justify-center bg-yellow-600 text-center h-10 hover:bg-black'>
                <a href={link} target="_blank">
                    WATCH
                </a>
            </div>
        </div>
    )
}