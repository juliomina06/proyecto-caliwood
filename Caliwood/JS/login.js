/**
 * Valida las credenciales y redirige al panel de ventas.
 */
function ingresar() {
    const usuario = document.getElementById("usuario").value.trim();
    const clave   = document.getElementById("clave").value;
    const mensaje = document.getElementById("mensaje");

    if (usuario === "Cinecali" && clave === "Estrenos") {
        mensaje.style.color = "#2A9D8F";
        mensaje.textContent = "✅ Acceso concedido. Cargando panel...";
        
        // Espera 1 segundo y redirige a la venta
        setTimeout(() => {
            window.location.href = "venta.html";
        }, 1000);
    } else {
        mensaje.style.color = "#C1121F";
        mensaje.textContent = "⚠️ Usuario o contraseña incorrectos.";
    }
}