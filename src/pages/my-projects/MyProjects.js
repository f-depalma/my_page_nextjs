import { projects } from '../../resource/projects'
import Project from './Project'

export default function MyProjects() {
    const projectElements = projects.map((item, idx) => <Project key={idx} {...item} />)
    return (
        <div className="m-auto pt-24 w-11/12 min-h-screen flex flex-row justify-around gap-8 items-center flex-wrap">
            {projectElements}
        </div>
    )
}