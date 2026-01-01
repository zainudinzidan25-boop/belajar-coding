const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const card = document.getElementById('main-card');

// 1. Logika Tombol No Kabur
noBtn.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    
    noBtn.style.left = x + 'px';
    noBtn.style.top = y + 'px';
});

// 2. Efek Hujan Hati di Background
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 2 + 3 + 's';
    document.body.appendChild(heart);
    
    setTimeout(() => { heart.remove(); }, 5000);
}
setInterval(createHeart, 300);

// 3. Fungsi Perayaan saat Klik YES
function celebrate() {
    // Jalankan Confetti
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ff4d6d', '#ff758f', '#ffccd5', '#ffffff']
    });

    // Ubah Isi Card
    card.innerHTML = `
        <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHIycXByZ293Ym9ueW54YXN6Y3R6amZ3amZ3amZ3amZ3amZ3Jm10PXM/KztT2c4u8mYYUiBtIQ/giphy.gif" class="gif">
        <h1 style="font-size: 2.5rem;">YEEAYYY! ❤️</h1>
        <p style="font-size: 1.2rem;">i think I'm the happiest person in the world <br> I Love You So Much! 🥰</p>
    `;
    
    // Ledakan confetti berulang
    let duration = 3 * 1000;
    let end = Date.now() + duration;

    (function frame() {
        confetti({
            particleCount: 5,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: ['#ff4d6d', '#ffb3c1']
        });
        confetti({
            particleCount: 5,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: ['#ff4d6d', '#ffb3c1']
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());
}
