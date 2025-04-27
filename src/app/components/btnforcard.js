"use client"
export default function ButtonComp({idt}){
    function handleLink(j){
      _(`#clickid${j}`).click()
    }
    return(
      <button className="btn btn-primary rounded-pill mt-2 mb-2 position-relative bottom-0" onClick={()=>handleLink(idt)}>Read More</button>
    )
  }