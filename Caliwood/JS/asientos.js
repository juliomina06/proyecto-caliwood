const TARIFA_BASE = 12000;
const selectorHora = document.getElementById("hora-cambio");

// Escucha cuando el usuario cambia la hora
selectorHora.addEventListener("change", calcularRecargo);

function calcularRecargo() {
    let hora = parseInt(selectorHora.value);
    let cajaRecargo = document.getElementById("caja-recargo");
    let totalElemento = document.getElementById("total-asiento");
    let total = TARIFA_BASE;

    // Regla de negocio: 15 (3PM) a 18 (6PM)
    if (hora >= 15 && hora <= 18) {
        let recargo = TARIFA_BASE * 0.05;
        total = TARIFA_BASE + recargo;
        cajaRecargo.classList.remove("oculto");
    } else {
        cajaRecargo.classList.add("oculto");
    }

    totalElemento.innerText = "$" + total.toLocaleString('es-CO') + " COP";
}

function confirmarCambio() {
    let actual = document.getElementById("asiento-actual").value;
    let nuevo = document.getElementById("nuevo-asiento").value;

    if (actual.trim() === "" || nuevo.trim() === "") {
        alert("Por favor, ingrese el asiento actual y el nuevo asiento.");
        return;
    }

    alert(`✅ Asiento cambiado exitosamente de ${actual} a ${nuevo}.`);
    window.location.href = "venta.html";
}