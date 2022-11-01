import Head from "next/head";

export default function Layout({ children, title="My awesome website",meta="A site about programming" }){
    return <>
    <Head>
        <title>{title}</title>
        <meta name="description" content={meta}/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"></link>
    </Head>
    <main>
        {children}
    </main>
    </>
}