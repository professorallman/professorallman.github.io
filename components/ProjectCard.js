import styled from "styled-components";

const ProjectCard = styled(({className, name, description, techStack, liveLink='', sourceLink=''})=><>
<h2>{name}</h2>
<p> {description} </p>
<div>{techStack}</div>
<div>
    {sourceLink}
    {liveLink}
</div>
</>)`


`;

export default ProjectCard;