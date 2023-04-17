import { useRef } from "react"
import { companies } from "../../resource/companies"
import Product from "./Product"
import Arrow from "./Arrow"

export default function Section3() {

    const companiesElement = companies.map((product, idx) => <Product key={idx} {...product} />)
    const container = useRef()

    return (
        <div className="companies text-neutral-800 flex flex-col justify-start items-center h-full p-4">
            <h1 className="h-1/5 text-xl lg:text-4xl text-zinc-600 text-center my-auto mt-2 lg:mt-10 flex items-center">PRODUCTS</h1>
            <div className="flex flex-row w-full h-4/5 justify-between items-center">
                <Arrow left={true} elemRef={container} color="text-zinc-800"/>
                <div ref={container} className="w-10/12 overflow-x-scroll flex h-full overflow-y-hidden">
                    <div className="flex flex-row justify-center gap-8 items-streach m-auto" >
                        {companiesElement}
                    </div>
                </div>
                <Arrow left={false} elemRef={container} color="text-zinc-800"/>
            </div>
        </div>
    )
}