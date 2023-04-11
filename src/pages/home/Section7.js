import Link from "next/link";

export default function Section7() {
    return (
        <div className="h-full px-6 sm:px-16 flex flex-col justify-center items-center">
            <div className="w-4/5 lg:pl-60 flex flex-col items-baseline flex-wrap justify-center overflow-x-scroll">
                <div className="h-16 flex flex-row items-center mb-3">
                    <img className="h-16" src="linkedin.webp" />
                    <h4 className="text-xl hover:text-yellow-600">
                        <Link href="https://www.linkedin.com/in/f-de-palma/" target="_blank">Francesco De Palma</Link>
                    </h4>
                </div>
                <div className="h-16 flex flex-row items-center mb-3">
                    <img className="h-9 p-1 rounded bg-white m-4" src="github.png" />
                    <h4 className="text-xl hover:text-yellow-600">
                        <Link href="https://github.com/f-depalma" target="_blank">My projects</Link>
                    </h4>
                </div>
                <div className="h-16 flex flex-row items-center mb-3">
                    <img className="h-9 p-1 rounded bg-white m-4" src="react-icon.svg" />
                    <h4 className="text-xl hover:text-yellow-600">
                        <Link href="https://react.dev/" target="_blank">Made with React</Link>
                    </h4>
                </div>
                <div className="h-16 flex flex-row items-center mb-3">
                    <img className="h-9 p-1 rounded bg-white m-4" src="gh-action.png" />
                    <h4 className="text-xl hover:text-yellow-600">
                        <Link href="https://github.com/f-depalma/my_page/tree/main/.github/workflows" target="_blank">CD managed by GitHub Action</Link>
                    </h4>
                </div>
                <div className="h-16 flex flex-row items-center mb-3">
                    <img className="h-9 rounded bg-white m-4" src="aws.png" />
                    <h4 className="text-xl hover:text-yellow-600">
                        <Link href="https://aws.amazon.com/ec2/" target="_blank">Deployed on AWS EC2 instance</Link>
                    </h4>
                </div>
                <div className="h-16 flex flex-row items-center mb-3">
                    <img className="h-9 w-9 object-contain rounded bg-white m-4" src="docker.png" />
                    <h4 className="text-xl hover:text-yellow-600">
                        <Link href="https://hub.docker.com/r/fdepalma95/my_page" target="_blank">Running in a docker container</Link>
                    </h4>
                </div>
            </div>
        </div>
    )
}