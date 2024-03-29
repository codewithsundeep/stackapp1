import Link from "next/link"
import Ad1 from "./ad1"
import Ad2 from "./ad2"
import Ad3 from "./ad3"
import Ad4 from "./ad4"
import ButtonComp from "./btnforcard"
  export default async function Card(props) {
     let data= await qsn(props.name,props.tag?.params.tag);

    return (
      <>
        <div className="d-flex justify-content-evenly flex-wrap">
          <div className="rounded m-2 p-2 w-45 sm:w-100" id="cardo">
          <Ad1/>
          </div>
          <div className="rounded m-2 p-2 w-45 sm:w-100" id="cardo">
          <Ad4/>
          </div>
            {data.map((e,i) => (
                <div className="shadow-6 border border-primary rounded m-2 p-2 w-45 sm:w-100" key={e.question_id} id="cardo">
                    <div className="h4">
                    <Link id={`clickid${i}`} href={`/answer/${e.accepted_answer_id}`} > {e.title.slice(0,100)+"..."}</Link>
                      </div><hr />
                    <div>
                      {i==5?<Ad2/>:""}<br/>
                        {
                            e.tags.map((x,i)=>(
                                x!='undefined'?<Link href={"/"+x} key={i} legacyBehavior>
                                   <a className="badge badge-primary m-1">{x}</a>
                                </Link>:''
                            ))
                        }
                    </div><hr />
                    <ButtonComp idt={i}/>
                </div>
            ))}
            
        </div>
        <div className="d-flex items-center justify-center container">
        <Ad3/>
        </div>
        </>
    );
}

async function qsn(who,tag) {
    try {
        let req;
        let res;
      if(who=='tag'){
        req = await fetch(
            `https://api.stackexchange.com/2.3/search/advanced?tagged=${tag}&accepted=True&site=stackoverflow&filter=withbody&key=${process.env.KEY}`
          );
       res = await req.json();
       return res.items;
      }else{
        req = await fetch(
            "https://api.stackexchange.com/2.3/search/advanced?tagged=html%20;css;javascript&accepted=True&site=stackoverflow&pagesize=10&filter=withbody&key="+process.env.KEY
          );
      res = await req.json();
      return res.items;
      }
    } catch (err) {
      return [{title:"Error Not Found!",tags:['error']}];
    }
  }