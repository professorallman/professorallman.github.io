import Link from "next/link";
import styled from "styled-components";
import Header from "../../components/Header";
import Layout from "../../components/layout";

const Index = styled(({className})=>
    <Layout >
<section className={className}>
    <Header title="Quick References" 
        description={<>
       These are quick guides on various programming topics.
       <br/>
       For in-depth guide on specific projects check out <Link href="/tutorials">tutorials</Link>
        </>}></Header>
        <ul>
            <li>
                <Link href="/references/JavascriptReference.html">Javascript</Link>
            </li>
        </ul>
</section>
    </Layout>)`

`;

export default Index;
