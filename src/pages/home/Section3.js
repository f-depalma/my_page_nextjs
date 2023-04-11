import { companies } from "../../resource/companies"
import Product from "./Product"

export default function Section3() {

    const companiesElement = companies.map((product, idx) => <Product key={idx} {...product} />)

    return (
        <div className="companies text-neutral-800 flex flex-col items-center h-full">
            <h1 className="text-4xl text-zinc-600 text-center mt-20 sm:mt-32 fixed">PRODUCTS</h1>
            <div className="w-10/12 overflow-x-scroll flex justify-start pr-0 h-screen">
                <div className="w-fit flex flex-row justify-center gap-x-12 items-center m-auto">
                    {companiesElement}
                </div>
            </div>
        </div>
    )
}