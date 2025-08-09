import Ans from "../../components/ans"
import Script from "next/script"
import stripHtml from "string-strip-html";
import {redirect} from "next/navigation"
let dt;
let aid;
let m;
let p;
const cache = {};
const dtcache = {};
export async function generateMetadata({params}){
try{

    let at = await gettl(params.answer);
    return{
     title:at?.qtitle,
     description:at?.qtitle+" "+at?stripHtml(at.qbody.slice(0,200)).replaceAll(/\n|"|\t|\\|\s|  /g,' '):'',
     keywords:at?.qtags.toString(),
     alternates:{
         canonical:`https://example-a.com/answer/${aid}`
     }
     }
}catch(err){
    return ""
}
}

function jsonld(){
   try{
    return `
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "${dt?.qtitle.replaceAll(/\\|\/|:|;|,|\./g,'')}",
        "datePublished": "${new Date(p*1000).toISOString()}",
        "dateModified": "${new Date(m?m:p*1000).toISOString()}",
        "publisher": {
          "@type": "Organization",
          "name": "example-a",
          "logo": {
            "@type": "ImageObject",
            "url": "/code.jpg",
            "width": 600,
            "height": 60
          }
        },
        "image": {
          "@type": "ImageObject",
          "url": "/code.jpg",
          "height": 800,
          "width": 1200
        },
        "description": "${dt?stripHtml(dt.qbody.slice(0,700)).replaceAll(/\n|"|\t|\\|\s|  /g,' '):''}",
        "url": "/answer/${aid}",
        "mainEntityOfPage": "/answer/${aid}"
      }
      </script>
    
    `
   }catch(err){
    return ""
   }
}

export default async function ans({params}){
   try {
        dt = await  manageAnswer(params.answer);
    return (
        <div id="answercontent">
        <div dangerouslySetInnerHTML={{__html:jsonld()}}></div>
        <Ans id={params.answer} ms={dt}/>
        </div>
    )
   } catch (error) {
    redirect("/")
   }
}

async function gettl(id){
  try{
    let ans = await fetch(`https://api.stackexchange.com/2.3/answers/${id}/?site=stackoverflow&filter=withbody&key=JBxjVFdP6JMHtmjMnFhHpQ((`);
    let resans = await ans.json();
    let qid = resans.items[0].question_id;
    let qsn = await fetch(`https://api.stackexchange.com/2.3/questions/${qid}/?site=stackoverflow&filter=withbody&key=JBxjVFdP6JMHtmjMnFhHpQ((`);
    let resqsn = await qsn.json();
    let rtn =  {
        qtitle:resqsn.items[0].title,
        qbody:resqsn.items[0].body,
        qtags:resqsn.items[0].tags,
        abody:resans.items[0].body
    }
    return rtn;
}catch(err){
    return false;
}
}
async function manageAnswer(id){
    try{
        let ans = await fetch(`https://api.stackexchange.com/2.3/answers/${id}/?site=stackoverflow&filter=withbody&key=${process.env.KEY}`);
        let resans = await ans.json();
        let qid = resans.items[0].question_id;
        let qsn = await fetch(`https://api.stackexchange.com/2.3/questions/${qid}/?site=stackoverflow&filter=withbody&key=${process.env.KEY}`);
        let resqsn = await qsn.json();
        aid = resans.items[0].answer_id
        m = resans.items[0].last_edit_date
        p = resans.items[0].creation_date
       
        let rtn =  {
            qtitle:resqsn.items[0].title,
            qbody:resqsn.items[0].body,
            qtags:resqsn.items[0].tags,
            abody:resans.items[0].body
        }
        return rtn;
    }catch(err){
        console.log("error");
    }
}