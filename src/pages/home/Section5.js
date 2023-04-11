import { reviews } from "../resurce/reviews"
import Review from "./Review"

export default function Section5() {

    const reviewsElement = reviews.map((review, idx) => (
        <Review props={review} key={idx}/>
    ))

    return (
        <div className="reviews bg-zinc-800 flex flex-col items-center h-full">
            <h1 className="text-4xl text-zinc-200 text-center mt-20 sm:mt-32 fixed">REVIEWS</h1>
            <div className="flex flex-row justify-center items-center flex-wrap h-full">
                {reviewsElement}
            </div>
        </div>
    )
}