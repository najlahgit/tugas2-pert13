// File: tugas2_function.js 

// Function kompleks dengan parameter dan return value
function hitungTotalBelanja(namaPelanggan, listHargaItem, apakahMember) {
    let total = 0;

    // Menghitung semua item di dalam array
    for (let i = 0; i < listHargaItem.length; i++) {
        total += listHargaItem[i];
    }

    console.log(`Pelanggan: ${namaPelanggan}`);
    console.log(`Total belanja kotor: Rp ${total}`);

    // Logika diskon di dalam function
    let diskon = 0;
    if (apakahMember === true) {
        diskon = 0.10; // Diskon member 10%
        console.log("Mendapat diskon Member: 10%");
    }

    if (total > 500000) {
        diskon += 0.05; // Tambahan diskon 5% jika belanja > 500rb
        console.log("Mendapat tambahan diskon Belanja Besar: 5%");
    }

    let nilaiDiskon = total * diskon;
    let hargaAkhir = total - nilaiDiskon;

    return hargaAkhir; // Mengembalikan nilai akhir
}

// Pemanggilan function (No param / instant call diabaikan karena kita langsung pakai yang kompleks)
let keranjangBelanjaan = [150000, 200000, 250000]; // Total 600.000
let hasilPembayaran = hitungTotalBelanja("Aris", keranjangBelanjaan, true);

console.log(`Total Akhir yang harus dibayar: Rp ${hasilPembayaran}`);
