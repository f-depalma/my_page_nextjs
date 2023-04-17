import { useRef } from "react"
import { skills } from "../../resource/skills"
import Arrow from "./Arrow"
import Skill from "./Skill"

export default function Section2() {

    const skillComponents = skills.map((skill, idx) => <Skill key={idx} {...skill} />)

    const container = useRef()

    return (
        <div className="text-neutral-800 flex flex-col justify-center items-center h-full p-4" style={{ backgroundColor: "#f5f5f5"}}>
            <h1 className="text-xl lg:text-4xl text-zinc-700 text-center mt-2 lg:mt-10 h-1/5 flex items-center">SKILLS</h1>
            <div className="flex flex-row w-full justify-between items-center h-4/5 ">
                <Arrow left={true} elemRef={container} color="text-zinc-800" />
                <div ref={container} className="w-10/12 flex justify-start overflow-x-scroll h-full">
                    <div className="flex flex-col max-h-full justify-around flex-wrap gap-8 gap-y-10 m-auto" style={{ width: "-webkit-fill-available"}}>
                        {skillComponents}
                    </div>
                </div>
                <Arrow left={false} elemRef={container} color="text-zinc-800"/>
            </div>
        </div>
    )
}