import Link from 'next/link'

export default function Header() {
    return (
        <nav id="header" className="h-24 flex flex-col items-center sm:flex-row sm:justify-between bg-black z-50">
            <Link href="/" className="w-24 sm:p-4 sm:ml-6">
                <img src='logo512.png' className="m-auto h-14 sm:h-24 object-contain"></img>
            </Link>
            <div className="flex flex-row justify-between items-center mr-4 sm:mr-8">
                <div className="px-6 sm:px-8 nav--item text-gray-200 hover:text-gray-400 hover:cursor-pointer text-xs sm:text-base">
                    <Link href="/my-projects">My Projects</Link>
                </div>
                <div className="px-6 sm:px-8 nav--item text-gray-200 hover:text-gray-400 hover:cursor-pointer text-xs sm:text-base">
                    <Link href="/others">Hobbies</Link>
                </div>
                <div className="px-6 sm:px-6 py-2 flex flex-col justify-center bg-yellow-600 text-black rounded nav--item hover:text-white hover:bg-zinc-800 hover:cursor-pointer text-xs sm:text-base">
                    <Link href="/contact-me">Contact Me</Link>
                </div>
            </div>
        </nav>
    )
}