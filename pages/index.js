import Layout from "../components/layout";
import Screen from "../components/screen";
import me from '../public/me.jpg';

export default function Home() {
  return <Layout>
    <Screen coverImage={me} coverImageAlt="Picture of Austin Allman">
    <h1>Welcome!</h1>
    <p>My name is Austin Allman and I am a Javascript expert who enjoys teaching and learning all things programming.</p>
    </Screen>
  </Layout>
}
