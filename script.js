const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');

// Fungsi untuk membuat tombol No lari
noBtn.addEventListener('mouseover', () => {
    // Menghitung area aman agar tombol tidak keluar layar
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

    noBtn.style.position = "fixed"; // Berubah jadi fixed agar bisa bebas di layar
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
});

// Fungsi saat tombol Yes ditekan
function nextPage() {
    const card = document.getElementById('main-card');
    card.innerHTML = `
        <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHIycXByZ293Ym9ueW54YXN6Y3R6amZ3amZ3amZ3amZ3amZ3Jm10PXM/KztT2c4u8mYYUiBtIQ/giphy.gif" alt="Happy" class="gif">
        <h1>YEEEYYY! I Love You! ❤️</h1>
        <p>Sampai ketemu nanti ya sayang!</p>
    `;
}
