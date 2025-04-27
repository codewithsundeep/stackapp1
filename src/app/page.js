import Card from "./components/card"
import Nav from "./components/nav"
import Footer1 from "./components/footer1"
import Load from "./components/loader"
export const dynamic = 'force-dynamic'
import {redirect} from "next/navigation"
import Ads from "./components/adlinks"
import Ad1 from "./components/ad1"
import Ad2 from "./components/ad2"
import Ad3 from "./components/ad3"
import Ad4 from "./components/ad4"
// export const runtime = "edge";
export default function Home() {
try{
  return (
    <div>
      <Ads/>
      <Ad1/>
      <Nav/>
      <Load/>
      <Card name="home" id={1}/>
      {/* <Adlinks/> */}
      <Footer1/>
          <Ad2/>
              <Ad3/>
              <Ad4/>
    </div>
  )
}catch(err){
  redirect("/")
}
}
