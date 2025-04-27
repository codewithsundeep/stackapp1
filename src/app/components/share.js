"use client"
import {InlineShareButtons} from 'sharethis-reactjs';
import {useState,useEffect} from "react"
export default function Share(){
  const [sr,setsr] = useState("")
  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      setsr(
        <InlineShareButtons
          config={{
            alignment: 'center',
            color: 'social',
            enabled: true,
            font_size: 16,
            labels: 'cta',
            language: 'en',
            networks: [
              'whatsapp',
              'linkedin',
              'twitter',
              'gmail',
              'email',
              'reddit'
            ],
            padding: 12,
            radius: 4,
            show_total: true,
            size: 40
          }}
        />
      )
    });
  },[])
    return(
        <>
                {sr}
        </>
    )
}