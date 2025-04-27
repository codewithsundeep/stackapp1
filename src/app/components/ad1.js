'use client';
import { useEffect, useRef } from 'react';

export default function Ad1() {
  const nw = useRef();

  useEffect(() => {
    function startAd() {
      // function for google analytics
      function Initgtag(){
        let gsc = document.createElement("script");
        gsc.src = "https://www.googletagmanager.com/gtag/js?id=G-E6MLEWLK39";
        gsc.setAttribute("async","true");
        document.body.appendChild(gsc);
        gsc.onload=()=>{console.log("Loaded analytics");}
        let gsc1 = document.createElement("script");
        gsc1.innerHTML=`
          window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
    
      gtag('config', 'G-E6MLEWLK39');
        `;
        document.body.appendChild(gsc1);
        gsc1.onload=()=>{console.log("Loaded analytics1");}
    }
    // google analytics close
      if (document.querySelector('#a1') || document.querySelector('#a2') || document.querySelector('#a3') || document.querySelector('#a4')) {
        return;
      }

      let sp = document.createElement('script');
      sp.id = 'a1';
      sp.type = 'text/javascript';
      sp.innerHTML = `
       atOptions = {
		'key' : '6d74d23d628609fe44464fb80acc6f22',
		'format' : 'iframe',
		'height' : 250,
		'width' : 300,
		'params' : {}
	};
      `;
      let sp1 = document.createElement('script');
      sp1.src = '//indelicateglacier.com/6d74d23d628609fe44464fb80acc6f22/invoke.js';
      sp.onload = () => {
        console.log('loaded1');
      };
      sp1.onload = () => {
        let ppc = document.createElement('script');
        ppc.id = 'a2';
        ppc.innerHTML = `
          atOptions = {
            'key' : '7a0aed8f84ed52875aca496dfed51337',
            'format' : 'iframe',
            'height' : 300,
            'width' : 160,
            'params' : {}
          };
        `;
        let ppc1 = document.createElement('script');
        ppc1.src = '//engagedpungentrepress.com/7a0aed8f84ed52875aca496dfed51337/invoke.js';
        ppc1.onload = () => {
          let ppp = document.createElement('script');
          ppp.id = 'a3';
          ppp.innerHTML = `
            atOptions = {
              'key' : 'b1ca5f8fbafd87df7f466d1df734cfcc',
              'format' : 'iframe',
              'height' : 60,
              'width' : 468,
              'params' : {}
            };
          `;
          let ppp1 = document.createElement('script');
          ppp1.src = '//engagedpungentrepress.com/b1ca5f8fbafd87df7f466d1df734cfcc/invoke.js';
          ppp1.onload = () => {
            let ppk = document.createElement('script');
            ppk.id = 'a4';
            ppk.innerHTML = `
              atOptions = {
                'key' : '6d298f91c4654d7b180a646a7fa5836f',
                'format' : 'iframe',
                'height' : 50,
                'width' : 320,
                'params' : {}
              };
            `;
            let ppk1 = document.createElement('script');
            ppk1.src = '//engagedpungentrepress.com/6d298f91c4654d7b180a646a7fa5836f/invoke.js';
            ppk1.onload = () => {
              console.log('loaded');
            };
            let selk = document.querySelector('.ad4');
            if (selk) {
              selk.appendChild(ppk);
              selk.appendChild(ppk1);
            }
          };
          let selp = document.querySelector('.ad3');
          if (selp) {
            selp.appendChild(ppp);
            selp.appendChild(ppp1);
          }
        };
        let sel = document.querySelector('.ad2');
        if (sel) {
          sel.appendChild(ppc);
          sel.appendChild(ppc1);
        }
      };
      nw.current.appendChild(sp);
      nw.current.appendChild(sp1);

      window.removeEventListener('scroll', startAd);
      window.removeEventListener('mousemove', startAd);
      window.removeEventListener('mouseover', startAd);
      Initgtag()
    }

    window.addEventListener('scroll', startAd);
    window.addEventListener('mousemove', startAd);
    window.addEventListener('mouseover', startAd);

    return () => {
      window.removeEventListener('scroll', startAd);
      window.removeEventListener('mousemove', startAd);
      window.removeEventListener('mouseover', startAd);
    };
  }, []);

  return <div id="ad1" ref={nw}></div>;
}
