"use client"
// import {useEffect} from "react"
import {useState} from "react"
export default function Ad2() {
	const [visible, setVisible] = useState(true);
  
	const closeAd = () => {
	  setVisible(false);
	};
  
	const openAd = () => {
	  setVisible(true);
	};
  
	return (
	  <>
		<div style={{ position: "fixed", bottom: "0", right: visible ? "0" : "-300px", transition: "right 0.5s", zIndex: "1000",overflow:"hidden" }}>
		  <button
			onClick={closeAd}
			className="bg-blue-800 p-2 text-white"
			style={{
			  position: "absolute",
			  top: "0",
			  right: "0",
			}}
		  >
			Close Ad
		  </button>
		  <div className="ad2">
			{/* Ad content goes here */}
		  </div>
		</div>
		<div onClick={openAd} style={{ position: "fixed", top: "50%", right: "10px", cursor: "pointer", zIndex: "999" }}>
		  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-left" className="svg-inline--fa fa-chevron-left fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style={{ width: "20px", height: "20px", color: "#000" }}>
			<path fill="currentColor" d="M34.9 239.03L244.8 29.03c15-15 40.2-4.5 40.2 17v419.9c0 21.4-25.3 32.1-40.2 17L34.9 272.97c-9.4-9.4-9.4-24.6 0-33.94z"></path>
		  </svg>
		</div>
	  </>
	);
  }