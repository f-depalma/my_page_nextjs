export default function Skill({ icon, name, description }) {
    return (
        <div className="w-80 m-auto">
            <img src={icon} className="w-28 pb-4 object-contain m-auto" />
            <h4 className="text-center text-xl font-bold pb-2 text-zinc-700">{name}</h4>
            <p className="text-center">{description}</p>
        </div>
    )
}