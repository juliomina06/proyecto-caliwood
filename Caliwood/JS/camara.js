const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const btnTomar = document.getElementById('btn-tomar');

async function encenderCamara() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        video.srcObject = stream;
    } catch (error) {
        alert("No se pudo acceder a la cámara. Verifique los permisos.");
        console.error(error);
    }
}

function tomarFoto() {
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const contexto = canvas.getContext('2d');
    contexto.drawImage(video, 0, 0, canvas.width, canvas.height);
    
    video.style.display = 'none';
    canvas.style.display = 'block';
    
    btnTomar.innerText = "TOMAR OTRA FOTO";
    btnTomar.style.background = "#C1121F";
    btnTomar.onclick = resetearCamara;
}

function resetearCamara() {
    video.style.display = 'block';
    canvas.style.display = 'none';
    btnTomar.innerText = "TOMAR FOTO";
    btnTomar.style.background = "#2A9D8F";
    btnTomar.onclick = tomarFoto;
}

encenderCamara();