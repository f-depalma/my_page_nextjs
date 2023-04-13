import { useRef } from "react"
import { companies } from "../../resource/companies"
import Product from "./Product"

export default function Section3() {

    const companiesElement = companies.map((product, idx) => <Product key={idx} {...product} />)
    const container = useRef()

    let right
    let left
    function scrollRight() {
        right = setInterval(() => container.current.scrollLeft += 10, 20)

    }
    function scrollLeft() {
        left = setInterval(() => container.current.scrollLeft -= 10, 20)
    }

    function stopScrollRight() {
        clearInterval(right)
    }

    function stopScrollLeft() {
        clearInterval(left)
    }
    return (
        <div className="companies text-neutral-800 flex flex-col justify-around items-center h-full p-4">
            <h1 className="text-xl lg:text-4xl text-zinc-600 text-center">PRODUCTS</h1>
            <div className="flex flex-row w-full justify-between items-center">
                <div className="h-8 w-8 z-10" onTouchStart={scrollLeft} onMouseDown={scrollLeft} onTouchMove={stopScrollLeft} onTouchEnd={stopScrollLeft} onMouseUp={stopScrollLeft} onMouseLeave={stopScrollLeft}>
                    <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-zinc-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                </div>
                <div ref={container} className="w-10/12 overflow-x-scroll flex flex-row justify-start pr-0">
                    <div className="w-fit flex flex-row justify-center gap-x-12 items-center m-auto">
                        {companiesElement}
                    </div>
                </div>
                <div className="h-8 w-8 z-10" onTouchStart={scrollRight} onMouseDown={scrollRight} onTouchMove={stopScrollRight} onTouchEnd={stopScrollRight} onMouseUp={stopScrollRight} onMouseLeave={stopScrollRight}>
                    <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-zinc-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </div>
            </div>
        </div>
    )
}