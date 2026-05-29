// File: tugas1_pemilihan.js
 
let usia = 17;
let hari = "Sabtu"; // Pilihan: Senin-Minggu
let hargaDasar = 40000;
let totalHarga = 0;

console.log(`--- SISTEM PEMESANAN TIKET BIOSKOP ---`);
console.log(`Usia Pengunjung: ${usia} tahun`);
console.log(`Hari Kunjungan : ${hari}\n`);

// Logika Pemilihan Kompleks
if (usia < 5) {
    console.log("Kategori: Balita. Tiket Gratis!");
    totalHarga = 0;
} else if (usia >= 5 && usia <= 12) {
    console.log("Kategori: Anak-anak. Diskon 50% pada hari kerja.");
    if (hari === "Sabtu" || hari === "Minggu") {
        totalHarga = hargaDasar; // Tidak ada diskon di akhir pekan
    } else {
        totalHarga = hargaDasar * 0.5;
    }
} else if (usia > 12 && usia < 60) {
    console.log("Kategori: Dewasa. Tarif Normal.");
    if (hari === "Sabtu" || hari === "Minggu") {
        totalHarga = hargaDasar + 15000; // Harga weekend lebih mahal
    } else {
        totalHarga = hargaDasar;
    }
} else {
    console.log("Kategori: Lansia. Diskon Tetap 30%.");
    totalHarga = hargaDasar * 0.7;
}

console.log(`Total yang harus dibayar: Rp ${totalHarga}`);
