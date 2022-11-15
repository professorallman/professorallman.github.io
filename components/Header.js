import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from "styled-components";

const Header = styled(({className, title, description})=>{
    const path = useRouter().pathname.slice(1);

    console.log(path);
    return <header className={className}>
    <div>
        <h1>{title}</h1>
        <p>{description}</p>
    </div>
    <nav>
        <Link href="/">home</Link>&gt;{path}
    </nav>

</header>})`
&{
    div{
        text-align:center;
        padding:0px;
        margin:0px;
        border-bottom: 1px solid black;
        h1{
            font-weight:100;
        }
    }
    nav{
        margin-left:20px;
    }
    p{
        padding:2px 20px;
    }
}
`;

export default Header;