import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";

function PlaylistPlayerComponent({className, videos}){
    const [{stream_url, thumbnail}, setSelectedVideo] = useState(videos[0]);
    const router = useRouter();
    useEffect(()=>{
        const video = videos.filter(v=>v.title==router.query.videoName).pop();
        if(video) setSelectedVideo(video);
    },[router.query, videos]);
    
    return <div className={className}>
        <video src={stream_url} poster={thumbnail} controls controlsList="nodownload" />
        <div className="playlist">
        
            <ol>
                {videos.map(video=>
                    <li key={video.stream_url}  className={video.stream_url === stream_url? 'selected':''} 
                    onClick={()=>{
                        router.replace({
                            query: {...router.query, videoName: video.title},
                         });
                    }}>{video.title}</li>
                )}
            </ol>
            
        </div>
        <Link href="/lectures" className="backButton">Back to lectures</Link>
    </div>
}
/**
     display:grid;
    grid-template-rows: 2fr 1fr;
    blue
    
    black
    #3c3c3c
 */
const PlaylistPlayer = styled(PlaylistPlayerComponent)`
&{
    display:grid;
    height:100vh;
    background-color:#3c3c3c;
    @media screen and (orientation: landscape){
        grid-template-columns: 3fr 1fr;
        a{
            grid-column: 2;
        }
        video{
            align-self:center;
        }
        .playlist{
            border-left: solid 1px white;
        }
    }
    a{
        color:white;
        border:solid 1px white;
        background-color:#76a6ff;
        text-decoration:none;
        padding:10px 20px;
        font-weight:bold;
        text-align:center;
    }
    video{
        width:100%;
    }
    .playlist{
       
        color:white;
        overflow-y:scroll;
        padding:20px;
        ol{
            list-style:none;
            padding:0;
            margin:0;
        }
        li{
            cursor:pointer;
            font-size:25px;
            font-weight:bold;
            border-bottom:solid 1px #cacaca;
            padding:20px;
            &.selected{
                color:#668bcf;
                border-bottom:solid 1px #76a6ff;
            }
        }
    }
}

`
export default PlaylistPlayer;
