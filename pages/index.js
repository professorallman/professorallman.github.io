import Link from "next/link";
import Layout from "../components/layout";
import LinkList from "../components/LinkList";
import Screen from "../components/screen";
import meLandscape from '../public/me-landscape.jpg';
import mePortrait from '../public/me-portrait.jpg';

export default function Home() {
  return <Layout title="Austin Allman - Javascript Expert" meta="A website about the skills and talents of Austin Allman">
    <Screen coverImageLandscape={meLandscape} coverImagePortrait={mePortrait} coverImageAlt="Picture of Austin Allman">
    <h1>Welcome!</h1>
    <p>My name is <em>Austin Allman</em> and I am a Javascript expert who enjoys teaching and learning all things programming.</p>
    <LinkList>  
      <Link href="/projects">Projects</Link>
      <Link href="/references">Quick References</Link>
      <Link href="/tutorials">Tutorials</Link> 
      <Link href="/lectures">Lecture Captures</Link>
    </LinkList>
    </Screen>
  </Layout>
}
