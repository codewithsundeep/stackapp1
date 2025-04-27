import Link from "next/link"
export default function Paginate({hasmore,hasprev,id,tag,page,query}){
    return(
        <>
        <div className="container shadow-4 d-flex justify-content-between align-items-center h-5 p-3">
            <Link href={`/${page=='home'?'html':tag!=undefined?tag:'search/'+query}/${(id-1)}`} className={`btn btn-primary rounded-pill ${hasprev?'':'disabled'}`}>
                Back
            </Link>
            <Link href={`/${page=='home'?'html':tag!=undefined?tag:'search/'+query}/${(Number(id)+1)}`} className={`btn btn-primary rounded-pill ${hasmore?'disabled':''}`}>
                Next
            </Link>
        </div>
        </>
    )
}