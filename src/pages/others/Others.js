import Video from "./Video"

export default function Others({ videos }) {

    const videoElments = videos?.map((video) => <Video key={video.id} {...video} />)

    return (
        <div className="pt-24 pb-8 h-full flex flex-col justify-start items-center">
            <fieldset className="youtube w-5/6 mt-10 rounded-lg border border-1 border-yellow-600 p-4 block overflow-auto">
                <legend className="ml-4 px-4 flex flex-row items-center text-lg">
                    <img src="Youtube_logo.png" className="h-6 mr-4" />
                    YouTube
                </legend>

                <div className="w-full flex flex-row lg:flex-col gap-4 min-w-content">
                    {videoElments}
                </div>

            </fieldset>


            <fieldset className="mt-10 w-5/6 rounded-lg border border-1 border-yellow-600 p-4">
                <legend className="ml-4 px-4 flex flex-row items-center text-lg">
                    <img src="flag-throwers.jpg" className="rounded-full h-8 mr-4" />
                    Flag Throwers
                </legend>

                <div id="default-carousel" className="relative w-full" data-carousel="slide">

                    <div className="relative h-56 overflow-hidden rounded-lg md:h-96">

                        <div className="hidden duration-700 ease-in-out" data-carousel-item>
                            <img src="/docs/images/carousel/carousel-1.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                        </div>

                        <div className="hidden duration-700 ease-in-out" data-carousel-item>
                            <img src="/docs/images/carousel/carousel-2.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                        </div>

                        <div className="hidden duration-700 ease-in-out" data-carousel-item>
                            <img src="/docs/images/carousel/carousel-3.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                        </div>

                        <div className="hidden duration-700 ease-in-out" data-carousel-item>
                            <img src="/docs/images/carousel/carousel-4.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                        </div>

                        <div className="hidden duration-700 ease-in-out" data-carousel-item>
                            <img src="/docs/images/carousel/carousel-5.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                        </div>
                    </div>

                    <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
                        <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
                        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
                    </div>

                    <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-zinc-800/30 group-hover:bg-white/50 dark:group-hover:bg-zinc-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-zinc-800/70 group-focus:outline-none">
                            <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-zinc-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                            <span className="sr-only">Previous</span>
                        </span>
                    </button>
                    <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-zinc-800/30 group-hover:bg-white/50 dark:group-hover:bg-zinc-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-zinc-800/70 group-focus:outline-none">
                            <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-zinc-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                            <span className="sr-only">Next</span>
                        </span>
                    </button>
                </div>

            </fieldset>
        </div>
    )
}