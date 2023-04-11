export default function ContactMe() {
    const inputCss = "mb-10 rounded bg-zinc-900 relative w-full px-3 py-2 border border-zinc-800 placeholder-gray-400 text-gray-300 focus:outline-none focus:ring-yellow-600 focus:border-yellow-600 focus:z-10 sm:text-sm"
    const buttonCss = "group relative w-full flex justify-center py-2 px-4 border border-transparent font-medium rounded-md text-white bg-yellow-600 hover:bg-zinc-800 hover:text-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-800"
    return (
        <div className="p-10 pt-24 sm:p-24 flex fles-row flex-wrap gap-x-10 justify-center items-center bg-black min-h-screen">
            <div className="text-zinc-300 my-10">
                <h1 className="text-4xl mb-8">GET IN TOUCH</h1>
                <div className="h-0 w-24 border-2 border-white mb-8"></div>
                <p className="text-lg mb-8">If you have a general enquiry, use the contact form to message me.</p>
            </div>
            <form id="contactform" className="rounded-xl p-0 sm:p-10" action="https://formsubmit.io/send/e5d08bf4-5498-4dc6-a3f5-45d3cc776a7d" method="POST">
                <input name="_redirect" type="hidden" id="name" value="/" />

                <input className={inputCss} name="name" type="text" id="name" placeholder="Name" required />
                <input className={inputCss} name="email" type="email" id="email" placeholder="E-mail" required />
                <textarea className={inputCss} name="comment" id="comment" rows="3" placeholder="Write a message..." required></textarea>

                <input name="_formsubmit_id" type="text" style={{ display: 'none' }} />

                <button className={buttonCss} value="Submit" type="submit">SEND</button>
            </form>
        </div>
    )
}