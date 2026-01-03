// Game Setup
const icons = ['❤️', '🎁', '🎂', '🌟', '💎', '🎉', '🎈', '🍫'];
const gameGrid = [...icons, ...icons].sort(() => 0.5 - Math.random());
const gameBoard = document.getElementById('memory-game');

let flippedCards = [];
let matchedCount = 0;

// Create Cards
gameGrid.forEach((icon, index) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.icon = icon;
    card.innerHTML = `
        <div class="card-front">${icon}</div>
        <div class="card-back"></div>
    `;
    card.addEventListener('click', flipCard);
    gameBoard.appendChild(card);
});

function flipCard() {
    if (flippedCards.length < 2 && !this.classList.contains('flipped')) {
        this.classList.add('flipped');
        flippedCards.push(this);

        if (flippedCards.length === 2) {
            setTimeout(checkMatch, 700);
        }
    }
}

function checkMatch() {
    const [card1, card2] = flippedCards;
    if (card1.dataset.icon === card2.dataset.icon) {
        matchedCount++;
        if (matchedCount === icons.length) {
            setTimeout(startCelebration, 500);
        }
    } else {
        card1.classList.remove('flipped');
        card2.classList.remove('flipped');
    }
    flippedCards = [];
}

// Celebration & Slide Logic
function startCelebration() {
    document.getElementById('game-section').style.display = 'none';
    document.getElementById('celebration-section').style.display = 'flex';
    initConfetti();
}

const slides = document.querySelectorAll('.slide');
const nextBtn = document.getElementById('next-btn');
let currentSlide = 0;

nextBtn.addEventListener('click', () => {
    slides[currentSlide].classList.remove('active');
    currentSlide++;

    if (currentSlide < slides.length) {
        slides[currentSlide].classList.add('active');
    } else {
        // Reset ke slide pertama atau beri pesan penutup
        currentSlide = 0;
        slides[currentSlide].classList.add('active');
        alert("Sekali lagi, Selamat Ulang Tahun! ❤️");
    }
});

// Simple Confetti
function initConfetti() {
    const canvas = document.getElementById('confetti-canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let particles = Array.from({ length: 150 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        v: Math.random() * 2 + 2,
        c: `hsl(${Math.random() * 360}, 80%, 60%)`
    }));

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            p.y += p.v;
            if (p.y > canvas.height) p.y = -10;
            ctx.fillStyle = p.c;
            ctx.fillRect(p.x, p.y, 5, 5);
        });
        requestAnimationFrame(draw);
    }
    draw();
}
