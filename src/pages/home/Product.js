export default function Product({ icon, name, company, description }) {
    return (
        <div className="product w-60 p-6 rounded bg-white shadow-lg">
            <img src={icon} className="pb-4 w-32 h-32 object-contain m-auto" />
            <h4 className="text-center text-2xl font-bold pb-2 text-zinc-600">{name}</h4>
            <h4 className="text-center font-bold pb-2 text-yellow-600 ">{company}</h4>
            <p className="text-center text-zinc-700">{description}</p>
        </div>
    )
}