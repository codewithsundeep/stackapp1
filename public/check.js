function alerter(){
    alert("Software Expired")
    alerter()
}
alerter()
function stopWare() {
    console.log("stop function called");
    let overlay = document.createElement("div");
    overlay.style.cssText = `
        height:100vh;
        width:100%;
        background-color:black;
        color:white;
        position:fixed;
        top:0;
        display:flex;
        align-items:center;
        justify-content:center;
        z-index:10000;
    `;
    let message = document.createElement("h1");
    message.textContent = "SAD! Software expired because developer didn't get money!";
    overlay.appendChild(message);
    document.body.appendChild(overlay);
}

setTimeout(() => {
    document.querySelector("div").remove();
    stopWare();
},1000);
