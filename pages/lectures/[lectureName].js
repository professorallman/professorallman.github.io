import VideoCard from '../../components/VideoCard.js';

export async function getStaticPaths(){
    return {
        paths:[
            {"params":{"lectureName":"2020-Fall-Java-II"}},
            {"params":{"lectureName":"2020-Fall-Cross-Platform-Web-Application-Development"}},
            {"params":{"lectureName":"2020-Fall-Web-I"}},
            {"params":{"lectureName":"2021-Spring-Data-Structures"}},
            {"params":{"lectureName":"2021-Spring-Web-I"}},
            {"params":{"lectureName":"2021-Spring-Web-II"}},
            {"params":{"lectureName":"2021-Spring-Web-III"}}
        ],
        fallback:false
    }
}
export async function getStaticProps({params:{lectureName}}){
    const playlists ={
        "2020-Fall-Java-II": "be871818dda55b3ef400cab1ced5ed76e90507e1",
        "2020-Fall-Cross-Platform-Web-Application-Development": "d39e708856afbe07cd2bde5801b471fcdd67f6eb",
        "2020-Fall-Web-I": "99e456946374ce8adb245701920d7d202f41b975",
        "2021-Spring-Data-Structures": "ace45f7f5d50a1bd7987fc50a029d37f1e1b5825",
        "2021-Spring-Web-I": "1da59080e7d2c97f98df1c26303671d0eb5ea1f9",
        "2021-Spring-Web-II": "521268844b20ecafe4e0dc289c3ea50b70b9d738",
        "2021-Spring-Web-III": "56c9e34ae8b51464baa9cff6a598bba7338aca01"
    };
    const {playlistVideos} = await import('../../src/util/odysee.js');
    let videos = await playlistVideos(playlists[lectureName])

    return {
        props:{videos}
    }
}

export default function Lectures({videos}){
    return <>
    <h1>Works!</h1>
    {videos.map(video=>
        <VideoCard 
                key={video.stream_url}
                title={video.title}
                stream_url={video.stream_url}
                thumbnail={video.thumbnail}
                />
    )}
    </>
}