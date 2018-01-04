function submit() {
    sessionStorage.setItem("nrCopii",document.getElementById("copii").value);
    sessionStorage.setItem("nrElevi",document.getElementById("elevi").value);
    sessionStorage.setItem("nrStudenti",document.getElementById("studenti").value);
    sessionStorage.setItem("nrAdulti",document.getElementById("adulti").value);
    sessionStorage.setItem("statusComanda","finalizata");
    sessionStorage.setItem("idComanda","1")
}

function updateTotal() {
    var total = 0;
    total += document.getElementById("copii").value * 5;
    total += document.getElementById("elevi").value * 7;
    total += document.getElementById("studenti").value * 8;
    total += document.getElementById("adulti").value * 10;
    document.getElementById("total").innerHTML = total;
}

document.getElementById("submit").addEventListener("click",submit);
document.addEventListener("click",updateTotal);
document.addEventListener("keypress",updateTotal);
