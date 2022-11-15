import styled from "styled-components";
import Layout from "../../components/layout";

const Index = styled(({className})=>
    <Layout >
<section className={className}>
<p>Lorem</p>

</section>

    </Layout>)`
    p{
        background-color:red;
    }
`;

export default Index;
