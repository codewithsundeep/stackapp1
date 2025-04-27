import Pdftotext from "./components/ptotext"
import PdfTextExtractorArticle from "./components/article"
import Footer1 from "../../components/footer1"
import Nav from "../../components/nav"
export default function PdfToText(){
    return (
        <>
        <Nav/>
        <Pdftotext/>
        <PdfTextExtractorArticle/>
        <Footer1/>
        </>
    )
}