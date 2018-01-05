function submit() {
    requestRezervare.send();
    salvareRequest();
}

function salvareRequest() {
    if (requestRezervare.readyState === XMLHttpRequest.DONE)
    {
        sessionStorage.setItem("nume",document.getElementById("nume").value);
        sessionStorage.setItem("nrCopii",document.getElementById("copii").value);
        sessionStorage.setItem("nrElevi",document.getElementById("elevi").value);
        sessionStorage.setItem("nrStudenti",document.getElementById("studenti").value);
        sessionStorage.setItem("nrAdulti",document.getElementById("adulti").value);
        sessionStorage.setItem("data",document.getElementById("data").value);
        sessionStorage.setItem("statusComanda","finalizata");
        console.log(requestRezervare);
        sessionStorage.setItem("idComanda",requestRezervare.response);
        window.location.replace("bilete.html");
    }
}

function updateTotal() {
    var total = 20;
    total += document.getElementById("copii").value * 5;
    total += document.getElementById("elevi").value * 7;
    total += document.getElementById("studenti").value * 8;
    total += document.getElementById("adulti").value * 10;
    document.getElementById("total").innerHTML = total;
}

updateTotal();
today = new Date();
document.getElementById("data").value = today.getFullYear() + '-' + today.getMonth()+1 + '-' + today.getDate();
document.getElementById("data").min = today.getFullYear() + '-' + today.getMonth()+1 + '-' + today.getDate();
document.getElementById("submit").onclick=submit;
document.addEventListener("click",updateTotal);
document.addEventListener("keypress",updateTotal);
var requestRezervare = new XMLHttpRequest();
requestRezervare.open("GET", "https://marintiberiu.github.io/proiect2/id.txt", false);
requestRezervare.onreadystatechange = salvareRequest;
