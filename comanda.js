function submit() {
    document.getElementById("submit").disabled = true;
    str = "";
    sessionStorage.setItem("nume",document.getElementById("nume").value);
    str += ',' + document.getElementById("nume").value;
    sessionStorage.setItem("nrCopii",document.getElementById("copii").value);
    str += ',' + document.getElementById("copii").value;
    sessionStorage.setItem("nrElevi",document.getElementById("elevi").value);
    str += ',' + document.getElementById("elevi").value;
    sessionStorage.setItem("nrStudenti",document.getElementById("studenti").value);
    str += ',' + document.getElementById("studenti").value;
    sessionStorage.setItem("nrAdulti",document.getElementById("adulti").value);
    str += ',' + document.getElementById("adulti").value;
    sessionStorage.setItem("data",document.getElementById("data").value);
    str += ',' + document.getElementById("data").value;
    sessionStorage.setItem("total",document.getElementById("total").innerHTML);
    str += ',' + document.getElementById("total").value;
    requestRezervare.send(str);
}

function getId() {
    if (requestRezervare.readyState === XMLHttpRequest.DONE)
    {
        sessionStorage.setItem("statusComanda","finalizata");
        sessionStorage.setItem("idComanda",requestRezervare.response.args.id);
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
document.getElementById("submit").onclick=submit;
document.addEventListener("click",updateTotal);
document.addEventListener("keypress",updateTotal);
var requestRezervare = new XMLHttpRequest();
requestRezervare.open("POST", "https://httpbin.org/post?id=12345", true);
requestRezervare.responseType = "json";
requestRezervare.onreadystatechange = getId;
