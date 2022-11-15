import styled from "styled-components";

const ProjectCard = styled(({className, name, description, techStack, liveLink=false, sourceLink=''})=><div className={className}>
<h2>{name}</h2>
<p> {description} </p>
<nav>
    {sourceLink? <span>Source {sourceLink}</span> : ''}
    {liveLink? <span>Go {liveLink}</span>: ''}
</nav>
<p class="tech-title">Made with ❤️ using</p>
<div>{techStack}</div>


</div>)`
&{
    margin:20px;
    width: 250px;
    border: solid 1px #cacaca;
    padding: 20px;
    border-radius: 15px;
    display:flex;
    flex-direction:column;
    align-items:center;
    .tech-title{
        padding-bottom:0;
        margin-bottom:0;
    }
    div{
        display:flex;
        width:100%;
        border-top:1px solid black;
        padding:10px;
        >*{
            height:75px;
        }
    }
    nav{
        padding:20px;
        display:flex;
        flex-direction:row;
        align-items: center;
        justify-content:space-evenly;
        width:100%;
        span{
            display:flex;
            flex-direction:column-reverse;
            img{
                height:25px;
            }
        }
    }
}

`;

export default ProjectCard;