import Link from "next/link"
export default function Footer1(){
    return(
        <div className="container ftr1"><hr />
        <footer className="bg-body-tertiary text-center text-lg-start">
  <div className="text-center p-3">
    Content Source : 
    <a className="text-body" href="https://stackoverflow.com" rel="nofollow noreferrer noopener" id="ftlk" style={{color:"black"}}>Stackoverflow</a>&nbsp;&nbsp; | &nbsp;&nbsp;  
    <Link href="/privacy-policy" style={{color:"blue !important"}}>Privacy Policy</Link>
    &nbsp;&nbsp; | &nbsp;&nbsp;  
    <Link href="/terms-and-condition" style={{color:"blue !important"}}>Terms and Condition</Link>
    &nbsp;&nbsp; | &nbsp;&nbsp;  
    <Link href="/contact-us" style={{color:"blue !important"}}>Contact Us</Link>
  </div>
</footer>
        </div>
    )
}