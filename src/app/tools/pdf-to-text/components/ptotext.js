"use client"
import "./style.css"
import dynamic from "next/dynamic"
import {useState,useEffect} from "react"
const pdfjs = ()=>import("pdfjs-dist/build/pdf")
export default  function Pdftotext(){
    let alltext = [];
    async function pdfj(){
        let lib = await pdfjs();
        return lib;
    }

    function afterProcess() {
        let select = document.querySelector("select");
        let download = document.querySelector(".download");
        let pdftext = document.querySelector(".pdftext");
        let afterupload = document.querySelector(".afterupload");
        pdftext.value = alltext[select.value - 1];
        download.href =
          "data:text/plain;charset=utf-8," +
          encodeURIComponent(alltext[select.value - 1]);
        afterupload.style.display = "flex";
        document.querySelector(".another").style.display = "unset";
      }
    
    useEffect(()=>{
        pdfj().then((pdfjsLib)=>{
            pdfjsLib.GlobalWorkerOptions.workerSrc =
        "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.2.67/pdf.worker.min.mjs";
      let pdfinput = document.querySelector(".selectpdf");
      let pwd = document.querySelector(".pwd");
      let upload = document.querySelector(".upload");
      let afterupload = document.querySelector(".afterupload");
      let select = document.querySelector("select");
      let download = document.querySelector(".download");
      let pdftext = document.querySelector(".pdftext");
      upload.addEventListener("click", () => {
        let file = pdfinput.files[0];
        if (file != undefined && file.type == "application/pdf") {
          let fr = new FileReader();
          fr.readAsDataURL(file);
          fr.onload = () => {
            let res = fr.result;
            if (pwd.value == "") {
              extractText(res, false);
            } else {
              extractText(res, true);
            }
          };
        } else {
          alert("select a valid pdf file");
        }
      });

      async function extractText(url, pass) {
        try {
          let pdf;
          if (pass) {
            pdf = await pdfjsLib.getDocument({ url: url, password: pwd.value })
              .promise;
          } else {
            pdf = await pdfjsLib.getDocument(url).promise;
          }
          let pages = pdf.numPages;
          for (let i = 1; i <= pages; i++) {
            let page = await pdf.getPage(i);
            let txt = await page.getTextContent();
            let text = txt.items.map((s) => s.str).join("");
            alltext.push(text);
          }
          alltext.map((e, i) => {
            select.innerHTML += `
                <option value="${i + 1}">${i + 1}</option>
                `;
          });
          afterProcess();
        } catch (err) {
          alert(err.message);
        }
      }
        })
        console.log("ok");
    })

    return(
        <div className="pdfwork container shadow-4 rounded mt-3 p-5">
      <form className="w-100">
        <button
          className="another btn btn-success mb-3 btn-lg form-control"
          onClick={()=>{location.reload()}}
          type="button"
        >
          Extract Another PDF
        </button>
        <label htmlFor="file">Select PDF</label>
        <input type="file" className="selectpdf mb-3 form-control" id="file" />
        <label htmlFor="pwd">Password</label>
        <input
        autoComplete="new-password" 
          type="password"
          className="pwd form-control mb-2"
          placeholder="optional"
          id="pwd"
        />
        <button className=" mt-3 mb-3 upload btn btn-lg btn-success" type="button">
          Upload
        </button>
        <div className="afterupload">
          <label htmlFor="selpage">Select Page</label>
          <select
            className="selectpage form-control"
            onChange={()=>afterProcess()}
            id="selpage"
          ></select>
          <a
          style={{backgroundColor:"green"}}
            href=""
            className="download btn btn bg-success btn-lg text-white"
            download
            >Download Pdf Text</a>
          <label htmlFor="res">Result</label>
          <textarea
            className="pdftext w-100 form-control"
            rows="10"
            cols="30"
            id="res"
          ></textarea>
        </div>
      </form>
    </div>
    )
}