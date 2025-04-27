import Card from "../components/card"
import Nav from "../components/nav"
import Footer1 from "../components/footer1"
import Load from "../components/loader"
import Script from 'next/script'
import Ad1 from "../components/ad1"
import Ad2 from "../components/ad2"
import Ad3 from "../components/ad3"
import Ad4 from "../components/ad4"
// export const runtime = "edge";
export function generateMetadata({params}){
    return{
        title:`${params.tag} Examples and Free Source Code - EXAMPLE-A`,
        description:params.tag+ " find here code examples, projects, interview questions, cheatsheet, and problem solution you have needed. Many source codes of "+params.tag+" are available for free here."
    }
}
export default function tag(params){
    return(
        <>

        <Nav/>
        <Ad1/>
        <Load/>
        <Card name='tag' tg={params.params.tag} id={params.id?params.id:1} tag={params}/>
        <Footer1/>
        <Ad2/>
        <Ad3/>
        <Ad4/>
        </>
    )
}