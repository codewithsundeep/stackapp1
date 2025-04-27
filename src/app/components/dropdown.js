import Link from "next/link"
export default function Dropdown(){
    return(
<div className="dropdown">
  <button
    className="btn btn-primary dropdown-toggle"
    type="button"
    id="dropdownMenuButton"
    data-mdb-dropdown-init
    data-mdb-ripple-init
    aria-expanded="false"
  >
    Dropdown button
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <li><Link className="dropdown-item" href="/pdf-to-text">PDF To TEXT Converter</Link></li>
  </ul>
</div>
    )
}