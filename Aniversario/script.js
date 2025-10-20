// --- LÓGICA DA CONTAGEM REGRESSIVA (e CALENDÁRIO) ---

// Data do aniversário para o contador e para o calendário
// Formato: Ano, Mês (9 = Outubro), Dia, Hora, Minuto, Segundo
const dataAniversario = new Date(2025, 9, 27, 0, 0, 0);

// --- LÓGICA PARA ATUALIZAR O CALENDÁRIO NO HEADER ---
// 'DOMContentLoaded' garante que o HTML foi carregado antes de rodar o script
document.addEventListener('DOMContentLoaded', () => {
    const diaAniversario = dataAniversario.getDate();
    document.getElementById('calendar-day').textContent = diaAniversario;
});


// --- LÓGICA DA GALERIA DE FOTOS (CARROSSEL) ---
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const carouselImages = document.querySelectorAll('.carousel-inner img');
let currentImageIndex = 0;

function showImage(index) {
    // Esconde todas as imagens
    carouselImages.forEach(img => img.classList.remove('active'));
    // Mostra a imagem do índice atual
    carouselImages[index].classList.add('active');
}

prevButton.addEventListener('click', () => {
    currentImageIndex--;
    if (currentImageIndex < 0) {
        currentImageIndex = carouselImages.length - 1;
    }
    showImage(currentImageIndex);
});

nextButton.addEventListener('click', () => {
    currentImageIndex++;
    if (currentImageIndex >= carouselImages.length) {
        currentImageIndex = 0;
    }
    showImage(currentImageIndex);
});


// --- LÓGICA DA CONTAGEM REGRESSIVA ---
const dataAniversarioTimestamp = dataAniversario.getTime();

const timer = setInterval(function() {
    const agora = new Date().getTime();
    const distancia = dataAniversarioTimestamp - agora;

    // Cálculos de tempo
    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

    // Exibe o resultado nos elementos
    document.getElementById("dias").innerText = dias;
    document.getElementById("horas").innerText = horas;
    document.getElementById("minutos").innerText = minutos;
    document.getElementById("segundos").innerText = segundos;

    // Se a contagem terminar
    if (distancia < 0) {
        clearInterval(timer);
        document.getElementById("timer").innerHTML = "<div><span>🎉</span> Feliz Aniversário!</div>";
    }
}, 1000);