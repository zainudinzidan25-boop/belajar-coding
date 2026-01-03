const gameBoard = document.getElementById('game-board');
const gameSection = document.getElementById('game-section');
const celebrationSection = document.getElementById('celebration-section');
const tiles = [];
const gridSize = 3;

// 1. Inisialisasi Game (Simple Pattern Match)
for (let i = 0; i < gridSize * gridSize; i++) {
    const tile = document.createElement('div');
    tile.classList.add('tile');
    tile.addEventListener('click', () => toggleTile(i));
    gameBoard.appendChild(tile);
    tiles.push(tile);
}

function toggleTile(index) {
    tiles[index].classList.toggle('active');
    checkWin();
}

function checkWin() {
    const allActive = tiles.every(tile => tile.classList.contains('active'));
    if (allActive) {
        setTimeout(showCelebration, 500);
    }
}

// 2. Transisi ke Perayaan
function showCelebration() {
    gameSection.classList.remove('active');
    celebrationSection.classList.add('active');
    startConfetti();
}

// 3. Efek Confetti Sederhana
function startConfetti() {
    const canvas = document.getElementById('confetti-canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particles = [];
    for (let i = 0; i < 150; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            size: Math.random() * 7 + 3,
            color: `hsl(${Math.random() * 360}, 70%, 60%)`,
            velocity: Math.random() * 3 + 2
        });
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            p.y += p.velocity;
            if (p.y > canvas.height) p.y = -10;
            ctx.fillStyle = p.color;
            ctx.fillRect(p.x, p.y, p.size, p.size);
        });
        requestAnimationFrame(animate);
    }
    animate();
}
