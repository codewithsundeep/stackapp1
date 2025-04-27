import Link from "next/link"
import Paginate from "../components/paginate"
import {redirect} from "next/navigation"
  export default async function Card(props) {
    try{
     let data;
    //  console.log(props.name);
     if(props.name=="search"){
      data = await sqsn(props.name,props.query,props.id);
     }else{
      data= await qsn(props.name,props.tag?.params.tag,props.id);
     }

    return (
      <>
        <div className="d-flex justify-content-evenly flex-wrap">
          <div className="rounded m-2 p-2 w-45 sm:w-100" id="cardo">
          </div>
          <div className="rounded m-2 p-2 w-45 sm:w-100" id="cardo">
          </div>
            {data.map((e,i) => (
                <div className="shadow-6 border border-primary rounded m-2 p-2 w-45 sm:w-100" key={e.question_id} id="cardo">
                    <div className="h4">
                     {e.title.slice(0,100)+"..."}
                      </div><hr />
                    <div>
                        {
                            e.tags.map((x,i)=>(
                                x!='undefined'?<Link href={"/"+x} key={i} legacyBehavior>
                                   <a className="badge badge-primary m-1">{x}</a>
                                </Link>:''
                            ))
                        }
                    </div><hr />
                    <Link className="btn btn-primary rounded" href={`/answer/${e.accepted_answer_id}`} >Read More</Link>
                </div>
            ))}
            
        </div>
        <div className="d-flex items-center justify-center container">
        </div>
        <Paginate hasmore={data.has_more} hasprev={props.id>1?true:false} id={props.id} tag={props.tg} page={props.name} query={props.query}/>
        </>
    );
  }catch(err){
    console.log(err);
    if(props.name=="home"){
      redirect("/html")
    }else{
      redirect("/")
    }
  }
}

async function qsn(who,tag,page=1) {
    try {
        let req;
        let res;
      if(who=='tag'){
        req = await fetch(
            `https://api.stackexchange.com/2.3/search/advanced?tagged=${tag}&accepted=True&site=stackoverflow&filter=withbody&key=${process.env.key}&page=${page}`
          );
       res = await req.json();
      //  console.log(res);
       return res.items;
      }else{
        req = await fetch(
            `https://api.stackexchange.com/2.3/search/advanced?tagged=html%20;css;javascript&accepted=True&site=stackoverflow&pagesize=10&filter=withbody&key=${process.env.key}`
          );
      res = await req.json();
      return res.items;
      }
    } catch (err) {
      return [{title:"Error Not Found!",tags:['error']}];
    }
  }
async function sqsn(who,query,page=1) {
  // console.log("here");
    try {
        let req;
        let res;
        let url = `https://api.stackexchange.com/2.3/search?intitle=${query}&accepted=True&site=stackoverflow&is_answered=True&filter=withbody&key=${process.env.key}&page=${page}`;
        // console.log(url);
        req = await fetch(
            url
          );
       res = await req.json();
      //  console.log(res);
       return res.items.filter(e=>e.accepted_answer_id);
    } catch (err) {
      return [{title:"Error Not Found!",tags:['error']}];
    }
  }