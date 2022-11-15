import styled from "styled-components"

const ProjectList = styled(({className,children})=>{
    if(!children.length) children = [children];
    return <ul className={className}>
        {children.map(child=>
                <li key={child.key}>{child}</li>
        )}
    </ul>
})`
`;

export default ProjectList;