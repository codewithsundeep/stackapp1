import Script from 'next/script'
import Link from "next/link"
import Nav from "./nav"
import Footer1 from "./footer1"
import Highlight from "./hjs"
import Ad1 from "./ad1"
import Ad2 from "./ad2"
import Ad3 from "./ad3"
import Ad4 from "./ad4"
import Share from "./share"
// import Popup from "./popup"
const cache = {};
export default async function Ans({id,ms}){
    let dt = ms;
    let related;
    if(cache[dt.qtags[0]]){
      related = cache[dt.qtags[0]];
    }else{
      related = await getRelated(dt.qtags[0]);
      cache[dt.qtags[0]]=related;
    }
    return(
            <>
            <Nav page="page"/>
                <div className="container shadow-4 rounded mt-3 mb-3 p-3 border border-primary">
                    {
                        dt.qtags?.map((e,i)=>(
                            <Link href={`../${e}`} className="badge badge-primary m-1" key={i}>{e}</Link>
                        ))
                    }
                    <h1 className="h1" dangerouslySetInnerHTML={{__html:dt.qtitle}}></h1><hr />
                    <Ad1/>
                    <div dangerouslySetInnerHTML={{__html:dt.qbody}}></div>
                    <hr />
                    <div className="h3">Solution <li className="h3 fa fa-arrow-down"></li></div>
                    <hr />
                  <Ad2/>
                    <div dangerouslySetInnerHTML={{__html:dt.abody}}> 
                    </div>
                    <br/>
                    <Share/><br/>
                    <Ad3/>
                    <ul className="list-group">
                      {
                        related?.map((e,i)=>(
                          <li key={i} className="list-group-item"><Link href={`/answer/${e.accepted_answer_id}`}  legacyBehavior><a className="text-primary">{e.title}</a></Link></li>
                        ))
                      }
                    </ul>
                    
                    <Ad4/>
                    
                </div>
                <Footer1/>
                <Highlight/>
            </>
    )
}

async function getRelated(tag){
try{
 let req = await fetch(
    `https://api.stackexchange.com/2.3/search/advanced?tagged=${tag}&accepted=True&site=stackoverflow&key=${process.env.KEY}`
  );
let res = await req.json();
return res.items;
}catch(err){
  // 
}
}
