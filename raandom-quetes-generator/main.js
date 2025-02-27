document.addEventListener("DOMContentLoaded", () => {
    const quotes = [
        "Hidup ini pilihan, jadi pilihlah yang terbaik",
        "Jadilah perubahan yang ingin kamu lihat di dunia",
        "Setiap langkah kecil menuju impianmu adalah kemajuan",
        "Jangan pernah takut untuk memulai sesuatu yang baru",
        "Kunci kebahagiaan adalah menerima diri apa adanya",
        "Teruslah percaya dan bekerja keraslah",
        "Aku percaya kamu pasti bisa melewati semua masa-masa sulitmu",
    ];

    const quoteElement = document.getElementById("quote");
    quoteElement.textContent = "Kata Kata Hari Ini";
    quoteElement.classList.add("show");

    const newQuoteElement = document.getElementById("new-quote");

    newQuoteElement.addEventListener("click", () => {
        // 1. Buat teks transparan terlebih dahulu sebelum menghapus kelas
        quoteElement.style.opacity = "0";

        // 2. Ganti teks setelah animasi selesai (0.5 detik)
        setTimeout(() => {
            const randomText = Math.floor(Math.random() * quotes.length);
            quoteElement.textContent = quotes[randomText];

            // 3. Tampilkan kembali dengan efek transisi
            quoteElement.style.opacity = "1";
        }, 500);
    });

    // Efek love saat kursor bergerak
    let lastMove = 0;

    document.addEventListener("mousemove", (e) => {
        const now = Date.now();
        if (now - lastMove < 100) return; // Batasi munculnya setiap 100ms
        lastMove = now;

        const heart = document.createElement("div");
        heart.classList.add("heart");
        document.body.appendChild(heart);

        heart.style.left = `${e.clientX}px`;
        heart.style.top = `${e.clientY}px`;

        setTimeout(() => {
            heart.remove();
        }, 1000);
    });
});
