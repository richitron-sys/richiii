document.getElementById('creator-btn').addEventListener('click', function() {
    alert('Creador: Richie Evangelista Jimenez');
});

document.getElementById('code-btn').addEventListener('click', function() {
    const code = document.documentElement.outerHTML;
    const newWindow = window.open('', '_blank');
    newWindow.document.write('<pre>' + code.replace(/</g, '&lt;').replace(/>/g, '&gt;') + '</pre>');
    newWindow.document.close();
});

// Agregar event listeners a los elementos de servicio
const serviceItems = document.querySelectorAll('.service-item');
const popup = document.getElementById('info-popup');
const closeBtn = document.querySelector('.close-btn');

serviceItems.forEach(item => {
    item.addEventListener('click', function() {
        popup.style.display = 'block';
    });
});

closeBtn.addEventListener('click', function() {
    popup.style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target === popup) {
        popup.style.display = 'none';
    }
});

// Botón del diagrama de flujo
const flowchartBtn = document.getElementById('flowchart-btn');
const flowchartPopup = document.getElementById('flowchart-popup');
const closeFlowchart = document.getElementById('close-flowchart');

flowchartBtn.addEventListener('click', function() {
    flowchartPopup.style.display = 'block';
});

closeFlowchart.addEventListener('click', function() {
    flowchartPopup.style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target === flowchartPopup) {
        flowchartPopup.style.display = 'none';
    }
});

// Matrix rain animation
const canvas = document.getElementById('matrix-bg');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener('resize', resizeCanvas);

const matrixChars = '01';
const fontSize = 16;
const columns = Math.floor(canvas.width / fontSize);
const drops = [];

for (let x = 0; x < columns; x++) {
    drops[x] = 1;
}

function draw() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#0f0';
    ctx.font = fontSize + 'px monospace';

    for (let i = 0; i < drops.length; i++) {
        const text = matrixChars.charAt(Math.floor(Math.random() * matrixChars.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

setInterval(draw, 35);