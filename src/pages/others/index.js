import Header from "../Header";
import Others from "./Others";

export default function OthersMain({ videos }) {
    return (
        <main>
            <Header />
            <Others videos={videos} />
        </main>
    )
}

export async function getServerSideProps() {
    try {
        const res = await fetch(`https://www.googleapis.com/youtube/v3/search?order=date&part=snippet&channelId=UCWdplN91PWkkB_DKo5Ov9nQ&maxResults=25&key=${process.env.YOUTUBE_API_KEY}`);
        const resJson = await res.json()

        // const videos = resJson.items
        //     .filter((item) => item.id.kind === "youtube#video")
        //     .map((item) => (
        //         {
        //             id: item.id.videoId,
        //             title: item.snippet.title,
        //             thumbnail: `http://img.youtube.com/vi/${item.id.videoId}/maxresdefault.jpg`,
        //             description: item.snippet.description,
        //             date: item.snippet.publishedAt,
        //             views: 0,
        //             link: `https://www.youtube.com/watch?v=${item.id.videoId}`
        //         }
        //     )).sort(function(a,b){
        //         return new Date(a.date) - new Date(b.date);
        //       });

        // for (const video of videos) {
        //     const videoInfo = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?id=${video.id}&part=statistics&key=${process.env.YOUTUBE_API_KEY}`)
        //     const videoInfoJson = await videoInfo.json()
        //     video.views = videoInfoJson.items[0].statistics.viewCount
        // }

        return {
            props: {
                videos: resJson
            }
        }
    } catch (err) {
        return {
            props: {
                videos: process.env.YOUTUBE_API_KEY
            }
        }
    }
}