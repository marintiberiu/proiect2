function submit() {
    sessionStorage.setItem("nrCopii",document.getElementById("copii").value);
    sessionStorage.setItem("nrElevi",document.getElementById("elevi").value);
    sessionStorage.setItem("nrStudenti",document.getElementById("studenti").value);
    sessionStorage.setItem("nrAdulti",document.getElementById("adulti").value);
    sessionStorage.setItem("statusComanda","finalizata");
    sessionStorage.setItem("idComanda","1")
}

document.getElementById("submit").addEventListener("click",submit);