function submit() {
    requestRezervare.open("GET", "http://localhost:3000/idRezervare", true);
    requestRezervare.send();
}

function salvareRequest() {
    sessionStorage.setItem("nume",document.getElementById("nume").value);
    sessionStorage.setItem("nrCopii",document.getElementById("copii").value);
    sessionStorage.setItem("nrElevi",document.getElementById("elevi").value);
    sessionStorage.setItem("nrStudenti",document.getElementById("studenti").value);
    sessionStorage.setItem("nrAdulti",document.getElementById("adulti").value);
    sessionStorage.setItem("statusComanda","finalizata");
    sessionStorage.setItem("idComanda",requestRezervare.response.id);
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
requestRezervare.onreadystatechange = salvareRequest;

