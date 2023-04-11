import Link from 'next/link'

export default function Section6() {
    return (
        <div className="bg-yellow-600 flex flex-col justify-center h-full px-20 text-white items-center md:items-start text-center">
            <h1 className="text-4xl mb-8">WANT TO TALK WITH ME?</h1>
            <div className="h-0 w-24 border-2 border-white mb-8"></div>
            <p className="text-lg mb-8">I&aposd love to find out more about your projects. Get in touch now.</p>
            <div className="bg-black h-14 w-44 flex flex-row justify-center items-center rounded hover:bg-zinc-900 hover:text-yellow-600 hover:cursor-pointer">
                <Link href="/contact-me">CONTACT ME</Link>
            </div>
        </div>
    )
}