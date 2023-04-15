export default function Section4() {

    const rowClass = "px-6 py-4 text-sm text-gray-100 whitespace-nowrap"
    const headerClass = "px-6 py-3 text-xs font-bold text-left text-zinc-300 uppercase "

    return (
        <div className="bg-black flex flex-col justify-end sm:justify-center items-start p-8 h-full overflow-x-scroll">
            <div className="flex flex-col justify-center flex-wrap h-full items-center gap-8">
                
                <div className="w-60 md:w-72 lg:w-full">
                    <div className="flex flex-row justify-center h-24">
                        <img src="VIA-logo.png" className="w-9/12 lg:w-80 z-10 object-contain"></img>
                        <div className=" w-3/4 h-24 lg:top-auto lg:fixed lg:bottom-0 lg:right-20 lg:h-4/6 lg:w-full lg:opacity-70 z-0 overflow-hidden lg:overflow-visible">
                            <img src="Subject.png" className="lg:h-full lg:absolute lg:bottom-0 lg:right-0 rounded-full lg:rounded-none object-contain float-right" />
                        </div>
                    </div>
                    <h1 className="text-lg lg:text-2xl pt-10 font-bold text-zinc-300 z-10">Software Technology Engineering</h1>
                    <h2 className="text-sm lg:text-base">3<sup>rd</sup> Semester</h2>
                </div>

                <div className="flex flex-col z-10 overflow-auto">
                    <div className="p-1.5 w-full inline-block align-middle h-full">
                        <table className="block h-full overflow-y-auto rounded">
                            <thead className="bg-yellow-600 sticky top-0">
                                <tr>
                                    <th scope="col"
                                        className={headerClass}>Exam</th>
                                    <th scope="col"
                                        className={headerClass}>Grade</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-zinc-600 bg-zinc-800">
                                <tr>
                                    <td className={rowClass}>SDJ1 Software Development with Java</td>
                                    <td className={rowClass}>12</td>
                                </tr>
                                <tr>
                                    <td className={rowClass}>SEP1 Semester Project 1</td>
                                    <td className={rowClass}>4</td>
                                </tr>
                                <tr>
                                    <td className={rowClass}>RWD1 Responsive Web Design</td>
                                    <td className={rowClass}>10</td>
                                </tr>
                                <tr>
                                    <td className={rowClass}>DMA1 Discrete Mathematics and Algorithms</td>
                                    <td className={rowClass}>12</td>
                                </tr>
                                <tr>
                                    <td className={rowClass}>SEP2 Semester Project 2</td>
                                    <td className={rowClass}>10</td>
                                </tr>
                                <tr>
                                    <td className={rowClass}>SWE1 Software Engineering</td>
                                    <td className={rowClass}>10</td>
                                </tr>
                                <tr>
                                    <td className={rowClass}>DBS1 Database Systems</td>
                                    <td className={rowClass}>12</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
