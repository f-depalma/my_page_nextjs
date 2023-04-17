import useWindowSize from "@/hooks/window-resize"
import { useEffect, useState, useRef } from "react"

export default function Arrow({ left, elemRef, color }) {

    const [show, setShow] = useState(false)
    const interval = useRef(undefined)
    const windowSize = useWindowSize()

    const leftArrow = "M15 19l-7-7 7-7"
    const rightArrow = "M9 5l7 7-7 7"

    useEffect(() => {
        checkScrollPos()
    }, [windowSize]);
    
    function scroll() {
        if (show) {
            interval.current = setInterval(() => {
                if (left) elemRef.current.scrollLeft -= 10
                else elemRef.current.scrollLeft += 10
            }, 20)
        }
    }

    function checkScrollPos() {
        if (left && elemRef.current.scrollLeft === 0 ||
            !left && (elemRef.current.scrollWidth - elemRef.current.scrollLeft - elemRef.current.offsetWidth) <= 1) {
            stopScroll()
            setShow(false)
        } else {
            setShow(true)
        }
    }

    useEffect(() => {
        checkScrollPos()

        elemRef.current.addEventListener("scroll", checkScrollPos)
    }, [])

    function stopScroll() {
        clearInterval(interval.current)
    }



    return (
        <div className="h-8 w-8 z-10 hover:opacity-50 hover:cursor-pointer flex justify-center items-center" onTouchStart={scroll} onMouseDown={scroll} onTouchMove={stopScroll} onTouchEnd={stopScroll} onMouseUp={stopScroll} onMouseLeave={stopScroll}>
            <svg aria-hidden="true" className={`w-5 h-5 text-white sm:w-6 sm:h-6 ${color} ${show ? '' : 'hidden'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={left ? leftArrow : rightArrow}></path></svg>
        </div>
    )
}