const TARIFA_BASE = 12000;

function sumarBoleta() {
    let inputCantidad = document.getElementById("cantidad");
    let cantidadActual = parseInt(inputCantidad.value);
    if (cantidadActual < 10) {
        inputCantidad.value = cantidadActual + 1;
        actualizarTotalVisual();
    }
}

function restarBoleta() {
    let inputCantidad = document.getElementById("cantidad");
    let cantidadActual = parseInt(inputCantidad.value);
    if (cantidadActual > 1) {
        inputCantidad.value = cantidadActual - 1;
        actualizarTotalVisual();
    }
}

function actualizarTotalVisual() {
    let cantidad = parseInt(document.getElementById("cantidad").value);
    let total = cantidad * TARIFA_BASE;
    document.getElementById("total-pagar").innerText = "$" + total.toLocaleString('es-CO') + " COP";
}

function calcularRecaudacion() {
    let pelicula = document.getElementById("pelicula").value;
    let cantidad = parseInt(document.getElementById("cantidad").value);
    
   
    if (pelicula.trim() === "") {
        alert("Por favor, ingrese el nombre de la película.");
        return;
    }
    if (/\d/.test(pelicula)) {
        alert("⚠️ Error: El nombre de la película no puede contener números.");
        return;
    }


    if (!Number.isInteger(cantidad) || cantidad <= 0) {
        alert("⚠️ Error: La cantidad de boletas debe ser un número entero válido.");
        return;
    }

    let recaudacionTotal = cantidad * TARIFA_BASE;
    let totalElemento = document.getElementById("total-pagar");
    
    totalElemento.innerText = "Calculando... ⏱️";
    
    setTimeout(() => {
        totalElemento.innerText = "$" + recaudacionTotal.toLocaleString('es-CO') + " COP";
        
        let historialGuardado = JSON.parse(localStorage.getItem("historialCaliwood")) || [];
        historialGuardado.push({ pelicula: pelicula, total: recaudacionTotal });
        localStorage.setItem("historialCaliwood", JSON.stringify(historialGuardado));

        let clave = prompt("Para registrar otra función, escriba la clave de seguridad:");
        if (clave === "CINE") {
            document.getElementById("pelicula").value = "";
            document.getElementById("cantidad").value = 1;
            actualizarTotalVisual();
            alert("Registro exitoso. Campos listos para nueva función.");
        } else {
            alert("Clave incorrecta. El sistema se reiniciará por seguridad.");
            window.location.href = "login.html";
        }
    }, 1000);
}
