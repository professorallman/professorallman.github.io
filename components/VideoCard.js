import styled from "styled-components";

function VideoCardComponent({className, title, stream_url, thumbnail, description }){
    return <section className={className}>
            <header>
                <h2>{title}</h2>
                
                {description? 
            <p>description</p> : ''}
            </header>
         
            <video src={stream_url} poster={thumbnail} />

    </section>
}

const VideoCard = styled(VideoCardComponent)`
&{
    max-width:500px;
    display:grid;
    header{
        grid-row:1;
        grid-column:1;
    }
    video{
        width:100%;
        grid-row:1;
        grid-column:1;
}

`

export default VideoCard;