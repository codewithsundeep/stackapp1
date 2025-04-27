"use client"
import {useState,useRef,useEffect} from "react"
export default function Popup(){
  const open = useRef()
  const [ct,setct] = useState("Loading...")
  const [sd,setsd] = useState("none")
  useEffect(()=>{
    let tm = setTimeout(() => {
        open.current.click()
        clearTimeout(tm)
        let itm = setTimeout(() => {
            setct("Was this solution helpful?");
            setsd("block")
            clearTimeout(itm)
        }, 4000);
    }, 12000);
  },[])
return(
    <>
    <button className="btn btn-primary" ref={open} style={{display:"none"}} data-mdb-target="#modal" data-mdb-toggle="modal">Open modal</button>
    <div className="modal fade" id="modal">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-body" style={{height:"100vh",width:"100%"}}>
                    <h3 className="h3 w-100 text-center">{ct}</h3>
                    <div className="modal-footer d-flex justify-content-between align-items-center">
                        <button className="btn btn-primary rounded-pill" data-mdb-dismiss="modal" style={{display:sd}}>YES</button>
                        <button className="btn btn-primary rounded-pill" data-mdb-dismiss="modal" style={{display:sd}}>NO</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
)
}