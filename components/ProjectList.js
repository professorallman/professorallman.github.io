import styled from "styled-components"

const ProjectList = styled(({className,children})=>{
    if(!children.length) children = [children];
    return <ul className={className}>
        {children.map(child=>
                <li key={child.key}>{child}</li>
        )}
    </ul>
})`
&{
    list-style:none;
    padding:0;
    margin: 50px 0px;
    display:flex;
    flex-wrap: wrap;
    align-items:center;
    justify-content:space-evenly;
}
`;

export default ProjectList;