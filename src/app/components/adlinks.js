"use client"
import { useEffect } from "react"

export default function Ads(){
    useEffect(()=>{

        function loadad(){
            let elm = document.createElement("script");
            elm.id="adsc"
            elm.type='text/javascript' 
            elm.src="//identicalprofile.com/40/ef/f9/40eff9a8969626b24d12b3394e91e243.js";
            let head = document.querySelector("head");
            head.appendChild(elm);
            elm.onload=()=>{
                console.log("ad loaded")
            }
        }
        if(document.querySelector("#adsc")){
            document.querySelector("#adsc").remove();
            loadad()
        }else{
            loadad()
        }

    },[])
    return (<></>)
}