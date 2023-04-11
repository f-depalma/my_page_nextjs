export default function Section4() {

    const rowClass = "px-6 py-4 text-sm text-gray-100 whitespace-nowrap"
    const headerClass = "px-6 py-3 text-xs font-bold text-left text-zinc-300 uppercase "

    return (
        <div className="bg-black flex flex-col justify-end sm:justify-center items-start p-16 h-full overflow-x-scroll">
            <div className="top-32 right-6 rounded-full h-20 w-20 sm:h-32 sm:w-32 lg:rounded-none lg:top-auto fixed lg:bottom-0 lg:right-20 lg:h-4/6 lg:w-full lg:opacity-70 z-0 overflow-hidden lg:overflow-visible">
                <img src="Subject.png" className="lg:object-contain h-full float-right" />
            </div>
            <div className="flex flex-row sm:flex-col justify-start items-center">
                <div className="pr-8">
                    <img src="VIA-logo.png" className="w-80 z-10"></img>
                    <h1 className="text-2xl pt-10 font-bold text-zinc-300 z-10">Software Technology Engineering</h1>
                    <h2>3<sup>rd</sup> Semester</h2>
                </div>
                <div className="scale-75 sm:scale-100 flex flex-col pt-8 z-10 align-baseline">
                    <div className="overflow-x-auto">
                        <div className="p-1.5 w-full inline-block align-middle">
                            <div className="overflow-hidden rounded">
                                <table className="min-w-full">
                                    <thead className="bg-yellow-600">
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
            </div>
        </div>
    )
}
