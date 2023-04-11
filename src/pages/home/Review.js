export default function Review({ image, name, logo, description, review }) {
    return (
        <div className="flex flex-col justify-start items-center w-80">
            <img src={image} className="h-32 w-32 mb-4 rounded-full object-cover"/>
            <h1 className="text-2xl font-bold mb-2">{name}</h1>
            <h4 className="inline-flex mb-4 font-bold text-yellow-600">
                <img src={logo} className="w-6 mr-2" />
                {description}
            </h4>
            <p className="">{review}</p>
        </div>
    )
}