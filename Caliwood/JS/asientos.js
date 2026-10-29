const TARIFA_BASE = 12000;
let totalActual = TARIFA_BASE;

window.onload = function() {
    // 1. Extraemos la hora real de la computadora
    let fechaActual = new Date();
    let hora = fechaActual.getHours(); // Devuelve en formato 24h (ej: 16 para las 4 PM)
    let minutos = fechaActual.getMinutes();
    
    // Formateamos la hora para mostrarla bonita (Ej: 16:30)
    let horaFormateada = hora.toString().padStart(2, '0') + ":" + minutos.toString().padStart(2, '0');
    document.getElementById("reloj-sistema").innerText = horaFormateada;

    // 2. Aplicamos la regla del profesor (3 PM a 6 PM)
    let cajaRecargo = document.getElementById("caja-recargo");
    let totalElemento = document.getElementById("total-asiento");

    if (hora >= 15 && hora <= 18) {
        let recargo = TARIFA_BASE * 0.05;
        totalActual = TARIFA_BASE + recargo;
        cajaRecargo.classList.remove("oculto");
    } else {
        cajaRecargo.classList.add("oculto");
    }

    totalElemento.innerText = "$" + totalActual.toLocaleString('es-CO') + " COP";
}

function confirmarCambio() {
    let actual = document.getElementById("asiento-actual").value;
    let nuevo = document.getElementById("nuevo-asiento").value;

    if (actual.trim() === "" || nuevo.trim() === "") {
        alert("Por favor, ingrese el asiento actual y el nuevo asiento.");
        return;
    }

    alert(`✅ Asiento cambiado exitosamente de ${actual} a ${nuevo}. Total a pagar: $${totalActual.toLocaleString('es-CO')}`);
    window.location.href = "venta.html";
}