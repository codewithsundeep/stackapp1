import Script from "next/script"
export default function Analyse(){
    return(
        <>
<Script async src="https://www.googletagmanager.com/gtag/js?id=G-E6MLEWLK39" id="analyse" strateg="lazyOnload"></Script>
<Script id="analyse1" strategy="lazyOnload">
    {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-E6MLEWLK39');`
  }
</Script>
        </>
    )
}