"use client"
import { useState } from "react";

export default function Ad3() {
  const [visible, setVisible] = useState(true);

  const closeAd = () => {
    setVisible(false);
  };

  const openAd = () => {
    setVisible(true);
  };

  return (
    <>
      <div style={{ position: "fixed", top: visible ? "0" : "-250px", left: "0", right: "0", transition: "top 0.5s", zIndex: "10000", backgroundColor: "#ccc", }}>
        <button
          onClick={closeAd}
          className="bg-blue-800 p-2 text-white"
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            borderRadius: "10px",
          }}
        >
         <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-up" className="svg-inline--fa fa-chevron-up fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{ width: "20px", height: "20px", color: "#fff" }}>
            <path fill="currentColor" d="M241 130.5L7.8 363.7c-4.6 4.6-12.1 4.6-16.7 0L-7.8 340.9c-4.6-4.6-4.6-12.1 0-16.7L216.4 100.2c4.6-4.6 12.1-4.6 16.7 0l224.2 224.2c4.6 4.6 4.6 12.1 0 16.7l-24.5 24.5c-4.6 4.6-12.1 4.6-16.7 0L241 130.5z"></path>
          </svg>
        </button>
        <div className="ad3">
          {/* Ad content goes here */}
        </div>
      </div>
      <div onClick={openAd} style={{ position: "fixed", top: "10px", left: "50%", transform: "translateX(-50%)", cursor: "pointer", zIndex: "999" }}>
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-down" className="svg-inline--fa fa-chevron-down fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{ width: "20px", height: "20px", color: "#000" }}>
          <path fill="currentColor" d="M207.029 381.476l-184.998-184c-9.373-9.373-9.373-24.569 0-33.941l22.662-22.662c9.373-9.373 24.569-9.373 33.941 0L224 289.941l145.365-145.068c9.373-9.373 24.569-9.373 33.941 0l22.662 22.662c9.373 9.373 9.373 24.569 0 33.941l-184.998 184c-9.373 9.372-24.569 9.372-33.941-.001z"></path>
        </svg>
      </div>
    </>
  );
}
