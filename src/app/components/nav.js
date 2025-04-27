"use client"
import Link from "next/link"
import Script from "next/script"
import {useRef} from "react"
import {useRouter} from "next/navigation"
import Load from "../components/loader"
export default function Nav(props){
const sref=useRef()
const fmref=useRef()
const iref=useRef()
const router = useRouter()
function handleSearch(e){
  e?.preventDefault()
  e?.stopPropagation()
  router.push("/search/"+iref.current.value)
}
return (
    <>
<Script id="ads" src="/ad.js"></Script>
<Link href="/" ref={sref} className="d-none">Search code examples</Link>
<nav className="navbar navbar-light bg-body-tertiary">
  <div className="container-fluid">
    <Link href="/" className="navbar-brand mb-0 h1">EXAMPLE-A</Link>
    <form className="d-flex input-group w-auto" onSubmit={handleSearch} ref={fmref}>
      <input
        type="search"
        className="form-control rounded"
        placeholder="Search"
        aria-label="Search"
        aria-describedby="search-addon"
        ref={iref}
      />
      <span className="input-group-text border-0" style={{cursor:"pointer"}} id="search-addon" onClick={handleSearch}>
        <i className="fas fa-search"></i>
      </span>
    </form>
  </div>
</nav>
<Load/>
    </>
)
}