export default function Review({ image, name, logo, description, review }) {
    return (
        <div className="flex flex-col justify-start items-center w-60 lg:w-80 overflow-hidden">
            <img src={image} className="h-20 w-20 lg:h-32 lg:w-32 mb-4 rounded-full object-cover"/>
            <h1 className="text-xl lg:text-2xl font-bold mb-2">{name}</h1>
            <h4 className="text-sm lg:text-base inline-flex mb-4 font-bold text-yellow-600">
                <img src={logo} className="w-4 h-4 lg:w-6 lg:h-6 mr-2 rounded" />
                {description}
            </h4>
            <p className="w-full h-full text-sm lg:text-base overflow-hidden text-ellipsis text-center">{review}</p>
        </div>
    )
}