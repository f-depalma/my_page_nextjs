import { skills } from "../../resource/skills"
import Skill from "./Skill"

export default function Section2() {

    const skillComponents = skills.map((skill, idx) => <Skill key={idx} {...skill} />)

    return (
        <div className="bg-white text-neutral-800 flex flex-col justify-center items-center h-full p-8">
            <h1 className="text-4xl text-zinc-700 text-center">TECHNOLOGIES</h1>
            <div className="w-10/12 flex justify-start overflow-auto">
                <div className="flex flex-col max-h-full justify-around flex-wrap gap-y-8 m-auto" style={{ width: "inherit" }}>
                    {skillComponents}
                </div>
            </div>
        </div>
    )
}