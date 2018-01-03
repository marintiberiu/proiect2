comanda = document.getElementById("comanda");

statusComanda = sessionStorage.getItem("status");
if (statusComanda === null) {
    statusComanda = "initial"
}
    
if (statusComanda == "initial") {
    butonComanda = document.createElement("a");
    butonComanda.href = "comanda.html";
    butonComanda.innerHTML = "Creare comanda";  
    butonComanda.classList.add("comanda");
    comanda.appendChild(butonComanda);
} else {

}
