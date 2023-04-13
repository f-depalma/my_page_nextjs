import { useRef } from "react"
import { skills } from "../../resource/skills"
import Skill from "./Skill"

export default function Section2() {

    const skillComponents = skills.map((skill, idx) => <Skill key={idx} {...skill} />)

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
        <div className="bg-white text-neutral-800 flex flex-col justify-center items-center h-full p-8">
            <h1 className="text-xl lg:text-4xl text-zinc-700 text-center">TECHNOLOGIES</h1>
            <div ref={container} className="w-10/12 flex justify-start overflow-x-scroll">
                <div className="flex flex-col max-h-full justify-around flex-wrap gap-8 m-auto" style={{ width: "inherit" }}>
                    {skillComponents}
                </div>
            </div>
            <div className="fixed right-4 top-1/2 h-8 w-8" onTouchStart={scrollRight} onMouseDown={scrollRight} onTouchMove={stopScrollRight} onTouchEnd={stopScrollRight} onMouseUp={stopScrollRight} onMouseLeave={stopScrollRight}>
            <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-zinc-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
            </div>
            <div className="fixed left-4 top-1/2 h-8 w-8" onTouchStart={scrollLeft} onMouseDown={scrollLeft} onTouchMove={stopScrollLeft} onTouchEnd={stopScrollLeft} onMouseUp={stopScrollLeft} onMouseLeave={stopScrollLeft}>
            <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-zinc-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
            </div>
        </div>
    )
}