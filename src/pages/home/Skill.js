export default function Skill({ icon, name, description }) {
    return (
        <div className="w-40 lg:w-80 m-auto">
            <img src={icon} className="w-auto h-20 lg:h-24 pb-4 object-contain m-auto" />
            <h4 className="text-center text-lg lg:text-xl font-bold pb-2 text-zinc-700">{name}</h4>
            <p className="text-center text-sm lg:text-base" style={{ minHeight: "1rem"}}>{description}</p>
        </div>
    )
}