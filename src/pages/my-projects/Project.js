import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'

export default function Project({ title, thumbnail, description, linkWebsite, linkGithub }) {

    return (
        <div className="rounded bg-zinc-800 flex flex-col border border-zinc-800 border-1">
            <img src={thumbnail} className="h-32 object-cover" />
            <div className='w-full h-full flex flex-col p-4'>
                <h1 className='font-bold lg:text-md xl:whitespace-nowrap text-ellipsis overflow-hidden'>{title}</h1>
                <p className='mt-2 text-sm'>{description}</p>
                <div className='flex flex-row justify-around gap-4 mt-4'>
                    <div className='w-32 rounded flex flex-col justify-center bg-yellow-600 text-center h-10 hover:bg-zinc-600'>
                        <a href={linkGithub} target="_blank">
                            GITHUB
                        </a>
                    </div>
                    <div className='w-32 text-yellow-600 rounded flex flex-col justify-center bg-zinc-900 text-center h-10 hover:bg-zinc-600'>
                        <a href={linkWebsite} target="_blank">
                            WEBSITE
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}