function finalAnulare() {
    if (requestAnulare.readyState === XMLHttpRequest.DONE)
    {
        rezervareNoua();
    }
}

function anulare() {
    document.getElementById("modificare").disabled = true;
    document.getElementById("anulare").disabled = true;
    requestAnulare = new XMLHttpRequest();
    requestAnulare.onreadystatechange = finalAnulare;
    requestAnulare.open("PUT", "https://httpbin.org/put", true);
    requestAnulare.responseType = "json";
    requestAnulare.send(document.getElementById("id-comanda").innerHTML);
}

function finalModificare() {
    if (requestModificare.readyState === XMLHttpRequest.DONE)
    {
        document.getElementById("modificare").disabled = false;
        document.getElementById("anulare").disabled = false;
        document.getElementById("data").innerHTML = requestModificare.response.data;
        document.getElementById("comanda-end").removeChild(br);
        document.getElementById("comanda-end").removeChild(input);
        document.getElementById("comanda-end").removeChild(buton);
    }
}

function modificaData() {
    document.getElementById("modificare").disabled = true;
    document.getElementById("anulare").disabled = true;
    requestModificare = new XMLHttpRequest();
    requestModificare.onreadystatechange = finalModificare;
    requestModificare.responseType = "json";
    requestModificare.open("PUT", "https://httpbin.org/put", true);
    requestModificare.send(input.value);
}

function modificare() {
    document.getElementById("modificare").disabled = true;
    document.getElementById("anulare").disabled = true;
    input = document.createElement("input");
    input.type = "date";
    buton = document.createElement("button");
    buton.innerHTML = "Submit";
    buton.id = "buton";
    buton.onclick = modificaData;
    br = document.createElement("br");
    document.getElementById("comanda-end").insertAdjacentElement('beforeend',br);
    document.getElementById("comanda-end").insertAdjacentElement('beforeend',input);
    document.getElementById("comanda-end").insertAdjacentElement('beforeend',buton);
}

function rezervareNoua() {
    document.getElementById("comanda-begin").style.visibility = "visible";
    document.getElementById("comanda-end").style.visibility = "hidden";
    sessionStorage.setItem("statusComanda","initial");
}

comanda = document.getElementById("comanda");
document.getElementById("anulare").onclick = anulare;
document.getElementById("modificare").onclick = modificare;
document.getElementById("nou").onclick = rezervareNoua;

statusComanda = sessionStorage.getItem("statusComanda");
if (statusComanda === null) {
    statusComanda = "initial"
}
    
if (statusComanda == "initial") {
    document.getElementById("comanda-end").style.visibility = "hidden";
} else {
    document.getElementById("comanda-begin").style.visibility = "hidden";
    document.getElementById("id-comanda").innerHTML = sessionStorage.getItem("idComanda");
    document.getElementById("data").innerHTML = sessionStorage.getItem("data");
    document.getElementById("total").innerHTML = sessionStorage.getItem("total");
    document.getElementById("nume").innerHTML = sessionStorage.getItem("nume");
}
