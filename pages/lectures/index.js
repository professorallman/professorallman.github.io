import Link from "next/link";
import Layout from '../../components/layout';
import styled from "styled-components";
/*
        "2021-Spring-Data-Structures": "ace45f7f5d50a1bd7987fc50a029d37f1e1b5825",
        "2021-Spring-Web-I": "1da59080e7d2c97f98df1c26303671d0eb5ea1f9",
        "2021-Spring-Web-II": "521268844b20ecafe4e0dc289c3ea50b70b9d738",
        "2021-Spring-Web-III": "56c9e34ae8b51464baa9cff6a598bba7338aca01"
*/
function IndexComponent({className}){
    return <Layout title="My College Lectures" meta="Lecture captures from my remote tenure as a college faculty">
        <section className={className}>
        <header>
        <h1>My College lectures</h1>
        <p>These are the lecture captures from when I taught remotely.</p>
        </header>
        <div className='main-content'>
            <Link href="/">Go back home</Link>
            <h2>Spring 2021</h2>
            <ul>
                <li><Link href="/lectures/2021-Spring-Web-I">Web I</Link></li>
                <li><Link href="/lectures/2021-Spring-Web-II">Web II</Link></li>
                <li><Link href="/lectures/2021-Spring-Web-III">Web III</Link></li>
                <li><Link href="/lectures/2021-Spring-Data-Structures">Data Structures</Link></li>
            </ul>
            <h2>Fall 20202</h2>
            <ul>
                <li><Link href="/lectures/2020-Fall-Web-I">Web I</Link></li>
                <li><Link href="/lectures/2020-Fall-Java-II">Java II</Link></li>
                <li><Link href="/lectures/2020-Fall-Cross-Platform-Web-Application-Development">Cross Platform Web Application Development</Link></li>
            </ul>
        </div>
        </section>

    </Layout>
}
const Index = styled(IndexComponent)`
&{
    h1,h2,p{
        font-weight:100;
    }

    header{
        border-bottom: 1px double #cacaca;
        text-align center;
        margin:0;
        
    }
    .main-content{
        padding:20px;
        a,a:visited{
            color:#3a5695;
        }
        ul{
            list-style:circle;
        }
    }
}
`;
export default Index;
/*

        "2020-Fall-Java-II": "be871818dda55b3ef400cab1ced5ed76e90507e1",
        "2020-Fall-Cross-Platform-Web-Application-Development": "d39e708856afbe07cd2bde5801b471fcdd67f6eb",
        "2020-Fall-Web-I": "99e456946374ce8adb245701920d7d202f41b975",



*/