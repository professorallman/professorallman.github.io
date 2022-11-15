import Header from "../components/Header";
import Icon from "../components/Icon";
import Layout from "../components/layout";
import ProjectCard from "../components/ProjectCard";
import ProjectList from "../components/ProjectList";

export default function Projects(){
    return <Layout title="My Projects | Austin Allman" meta="Different programming projects to demonstrate my skills as a software developer">
        <Header title="Projects" description="Here is a list of larger projects that I have made" />
        <ProjectList>
            <ProjectCard key="mainwebsite" 
                name="This Website!"
                
                techStack={<>
                <Icon name="next"/>    
                <Icon name="react"/>   
                <Icon name="javascript"/>    
            </>}
                sourceLink={<a href="https://github.com/professorallman/professorallman.github.io" target="_blank"><Icon name="github"/></a>}
                
                />

            <ProjectCard key="bible" 
                            name="The Holy Bible"
                            description={<>
                                A complete static generation of all the chapters of the CPDV translation of the bible. 
                                Each of the pages are surprisingly small and most of them have 100% lighthouse score. 
                                The code is setup such that it would be possible to add additional translations with a little work.
                            </>}
                            techStack={<>
                            <Icon name="svelte"/>    
                            <Icon name="javascript"/>    
                        </>}
                sourceLink={<a href="https://github.com/professorallman/Bible" target="_blank"><Icon name="github"/></a>}
                liveLink={<a href='https://professorallman.github.io/Bible/CPDV/Genesis/1' target="_blank">
                    <Icon name="external"/>
                </a>}
                />


        </ProjectList>

        <h1>Micro Projects</h1>
        <p>These are tiny applications I used to delete but decided to make a single repo to store all the little things I make</p>
        <a href="https://github.com/professorallman/Microprojects" target="_blank">Link to the repository with all the project source code</a>
        <ul></ul>
    </Layout>
}