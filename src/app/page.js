import Card from "./components/card"
import Nav from "./components/nav"
import Script from "next/script"
import Footer1 from "./components/footer1"
import Load from "./components/loader"
import Adlinks from "./components/adlinks"
export const dynamic = 'force-dynamic'
import {redirect} from "next/navigation"
export default function Home() {
try{
  return (
    <div>
      <Nav/>
      <Load/>
    <h1>Hello!! Changes!ok</h1>
      <Card name="home" id={1}/>
      {/* <Adlinks/> */}
      <Footer1/>
    </div>
  )
}catch(err){
  redirect("/")
}
}




