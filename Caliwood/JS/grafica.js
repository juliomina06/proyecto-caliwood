document.addEventListener("DOMContentLoaded", () => {
    let historial = JSON.parse(localStorage.getItem("historialCaliwood")) || [];
    let totalDiario = 0;
    let etiquetasPeliculas = [];
    let datosRecaudacion = [];

    historial.forEach((registro, index) => {
        totalDiario += registro.total;
        etiquetasPeliculas.push(`Función ${index + 1}`);
        datosRecaudacion.push(registro.total);
    });

    document.getElementById("total-diario").innerText = "$" + totalDiario.toLocaleString('es-CO') + " COP";
    document.getElementById("total-funciones").innerText = historial.length;

    const ctx = document.getElementById('miGrafica').getContext('2d');
    new Chart(ctx, {
        type: 'line', // Gráfica de líneas
        data: {
            labels: etiquetasPeliculas,
            datasets: [{
                label: 'Recaudación (COP)',
                data: datosRecaudacion,
                borderColor: '#C1121F',
                backgroundColor: 'rgba(193, 18, 31, 0.1)',
                borderWidth: 2,
                pointBackgroundColor: '#F4B942',
                pointRadius: 5,
                fill: true,
                tension: 0.3
            }]
        },
        options: { responsive: true, maintainAspectRatio: false }
    });
});