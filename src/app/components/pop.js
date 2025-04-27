"use client"
import {useEffect,useState,useRef} from "react"
function Modal({ isOpen, onClose }) {
const [text,setText] = useState("")
const [d,setd] = useState("none")
const [c,setc] = useState("block")
const a2r = useRef();
const a1r = useRef();
  if (!isOpen) return null;

  return (
    <div className="bg-black bg-opacity-50 d-flex justify-content-center align-items-center" style={{position:"fixed",top:"0",zIndex:"1000",height:"100vh",width:"100%"}}>
      <a href={`https://wa.me/+919339950282?text=${text}`} target="_blank" ref={a1r} id="a1"></a>
      <a href="https://collectbladders.com/xqjiwpuxs7?key=f346fff27314d71d4e628b70a62f4186" ref={a2r} target="_blank" id="a2"></a>
      <div className="bg-white w-50 rounded p-8 rounded-lg shadow-lg relative">
        <div className="message p-3 flex-column justify-content-center align-items-center" style={{display:d}}>
        <h3 className="h3 w-100 text-center">Tell me how can i help you?</h3>
        <textarea className="w-75 border border-primary" onChange={(e)=>setText(e.target.value)}></textarea>
        <button className="btn btn-primary mt-2" onClick={()=>{
          onClose();a1r.current.click()
        }}>Send</button>
        </div>
        <div style={{display:c}}>
        <h2 className="text-xl font-bold mb-4 w-100 text-center h2 mb-5">Are you hiring a developer to assist you or for a new project?</h2>
        <div className="d-flex justify-content-evenly mb-2">
          <button
            onClick={() => { setd("flex");setc("none")}}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 btn btn-primary rounded-pill">
            Yes
          </button>
          <button
            onClick={() => { onClose(); a2r.current.click()}}
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700 btn btn-primary rounded-pill">
            No
          </button>
        </div>
        </div>
      </div>
    </div>
  );
}

export default function Pop(){
    const [isModalOpen, setModalOpen] = useState(false);
    useEffect(()=>{
        setTimeout(() => {
            setModalOpen(true)
        }, 15000);
    },[])
    return (
        <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
      );
}

