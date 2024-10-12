let isScaryMode = false;
let binaryInterval;

function togglePage() {
    const body = document.body;
    const happyMusic = document.getElementById("happy-music");
    const scaryMusic = document.getElementById("scary-music");

    clearInterval(binaryInterval); // Para qualquer intervalo existente da frase binária

    if (isScaryMode) {
        // Muda para o lado feliz
        body.classList.remove('scary-mode');
        happyMusic.play();
        scaryMusic.pause();
        hideBinaryText(); // Esconde a frase binária
    } else {
        // Muda para o lado assustador
        body.classList.add('scary-mode');
        scaryMusic.play();
        happyMusic.pause();
        showBinaryText(); // Mostra a frase binária
    }

    isScaryMode = !isScaryMode;
}

function showBinaryText() {
    const binaryText = document.getElementById('binary-text');
    
    // Função para gerar posições aleatórias
    const generateRandomPosition = () => {
        const randomX = Math.random() * (window.innerWidth - 100);
        const randomY = Math.random() * (window.innerHeight - 50);
        binaryText.style.left = `${randomX}px`;
        binaryText.style.top = `${randomY}px`;
        binaryText.innerHTML = '01001001 01101010 01100001 01101110 01110111';
        binaryText.style.opacity = 1;

        setTimeout(() => {
            binaryText.style.opacity = 0;
        }, 6000);
    };

    // Mostra a frase binária a cada 6 segundos em posições diferentes
    binaryInterval = setInterval(generateRandomPosition, 6000);
    generateRandomPosition(); // Mostra a primeira vez imediatamente
}

function hideBinaryText() {
    clearInterval(binaryInterval);
    document.getElementById('binary-text').style.opacity = 0;
}
