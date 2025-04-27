'use client'
import { useEffect } from 'react';
export default function Highlight(){
    useEffect(()=>{
        function highliter(){
            console.log("execution");
            let sc = document.createElement("script");
            sc.src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/highlight.min.js";
            document.body.appendChild(sc)
            sc.onload=()=>{
                console.log("loaded highlight")
                hljs.highlightAll() 
                window.removeEventListener('scroll', highliter);
            }         
        }
        window.addEventListener('scroll', highliter);
    },[])
    return (
        <></>
    )
}