import Card from "../../components/card"
import Nav from "../../components/nav"
import Footer1 from "../../components/footer1"
import Load from "../../components/loader"
import Script from 'next/script'
export function generateMetadata({params}){
    console.log(params.query);
    return{
        title:`${params.query} Examples and Free Source Code - EXAMPLE-A`,
        description:params.tag+ " find here code examples, projects, interview questions, cheatsheet, and problem solution you have needed. Many source codes of "+params.query+" are available for free here."
    }
}
export default function tag({params}){
    console.log(params);
    return(
        <>
        <Nav/>
        <Load/>
        <Card name='search' id={params.id?params.id:1} query={params.query}/>
        <Footer1/>
        </>
    )
}