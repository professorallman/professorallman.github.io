import Header from "../components/Header";
import Icon from "../components/Icon";
import Layout from "../components/layout";
import ProjectCard from "../components/ProjectCard";
import ProjectList from "../components/ProjectList";

export default function Projects(){
    return <Layout title="My Projects | Austin Allman" meta="Different programming projects to demonstrate my skills as a software developer">
        <Header title="Projects" description="Here is a list of larger projects that I have made" />
        <ProjectList>
            <ProjectCard key="HelloWorld" 
                name="This website!"
                description="Made with "
                techStack={<>
                <Icon name="next"/>    
            </>}
                sourceLink={<a href="https://github.com/professorallman/professorallman.github.io"></a>}
                liveLink={<a href='https://professorallman.github.io/'>Lorem</a>}
                >

            </ProjectCard>
        </ProjectList>

        <h1>Micro Projects</h1>
        <p>These are tiny applications I usued to delte but decided to make a single repo to store all the little things I make</p>
    </Layout>
}