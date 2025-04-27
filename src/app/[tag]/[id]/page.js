import Card from "../../components/card"
import Nav from "../../components/nav"
import Footer1 from "../../components/footer1"
import Ad1 from "@/app/components/ad1"
import Ad2 from "@/app/components/ad2"
import Ad3 from "@/app/components/ad3"
import Ad4 from "@/app/components/ad4"
import { redirect } from 'next/navigation'
// export const runtime = "edge";
export function generateMetadata({params}){
    return{
        title:`${params.tag} Examples and Free Source Code - EXAMPLE-A`,
        description:params.tag+ " find here code examples, projects, interview questions, cheatsheet, and problem solution you have needed. Many source codes of "+params.tag+" are available for free here."
    }
}
export default function Getbypage(params){
   try {
    return(
        <>
        <Nav/>
        <Ad1/>
        <Card name='tag' tg={params.params.tag} id={params.params.id?params.params.id:1} tag={params}/>
        <Footer1/>
        <Ad2/>
        <Ad3/>
        <Ad4/>
        </>
    )
   } catch (error) {
    redirect("/")
   }
}