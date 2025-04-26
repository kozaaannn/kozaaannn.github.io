// Ambil elemen modal dan tombol login
const modal = document.getElementById("loginModal");
const loginBtn = document.getElementById("loginBtn");
const closeBtn = document.getElementById("closeBtn");
const loginForm = document.getElementById("loginForm");

// Tampilkan modal login saat tombol login diklik
loginBtn.onclick = function() {
    modal.style.display = "block";
}

// Tutup modal login saat tombol close diklik
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// Tutup modal jika klik di luar modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Proses login
loginForm.onsubmit = function(event) {
    event.preventDefault(); // Mencegah form submit yang default (refresh halaman)

    // Ambil data username dan password
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Contoh validasi login sederhana (sesuaikan dengan backend autentikasi)
    if (username === "admin" && password === "123") {
        // Arahkan ke halaman index.html setelah login berhasil
        window.location.href = "index.html"; // Arahkan ke halaman index.html
    } else {
        alert("Username atau password salah.");
    }
}
