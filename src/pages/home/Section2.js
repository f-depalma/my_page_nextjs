import { skills } from "../resurce/skills"
import Skill from "./Skill"

export default function Section2() {

    const skillComponents = skills.map((skill, idx) => <Skill key={idx} props={skill} />)

    return (
        <div className="bg-white text-neutral-800 flex flex-col items-center h-full">
            <h1 className="text-4xl text-zinc-700 text-center mt-20 sm:mt-32 fixed">TECHNOLOGIES</h1>
            <div className="w-10/12 overflow-x-scroll flex justify-start pr-0 h-screen">
                <div className="w-fit flex flex-row justify-center items-center m-auto">
                    {skillComponents}
                </div>
            </div>
        </div>
    )
}