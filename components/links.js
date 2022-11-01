import Link from 'next/link';
import styled from "styled-components"

function LinksComponent({to}){
    return <nav>
    {to.map(name=>
        <Link key={name} href={`/${name}`}>
            {name}
        </Link>
        )}
    </nav>
}

const Links = styled(LinksComponent)`
*{background-color:green;}
    & {
        display:flex;
        flex-wrap:wrap;
        a {
            color:white;
            text-decoratin:none;
            
        }
    }

`;

export default Links;
