import styled from "styled-components"

function LinkListComponent({children, className}){
    if(children.length){
        return <ul className={className}>
        {children.map(child=><li key={child.props.href} >{child}</li>)}
        </ul>
    }else{
        return <ul className={className}>
             <li key={children.props.href} >{children}</li>
        </ul> 
    }

}

const LinkList = styled(LinkListComponent)`

&{
    margin:0;
    padding:0;
    list-style:none;
    display:flex;
    flex-wrap: wrap;
    align-content: center;
    justify-content: space-evenly;
    align-items: center;
    @media screen and ( min-width: 1000px){
        width:100%;
        margin:50px;
        justify-content: space-around;
    }
    a{
        margin:10px 0px;
        display:block;
        text-decoration:none;
        color:white;
        font-weight:bold;
        font-size:25px;
        border: solid 1px white;
        padding: 10px;
        flex-grow:grow;
        width:220px;
        text-align:center;
    }
}
`;

export default LinkList;