export default function Skill({ icon, name, description }) {
    return (
        <div className="skill w-80 px-6">
            <img src={icon} className="pb-4 w-32 h-32 object-contain m-auto" />
            <h4 className="text-center text-xl font-bold pb-2 text-zinc-700">{name}</h4>
            <p className="text-center">{description}</p>
        </div>
    )
}