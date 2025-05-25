<script>
    document.querySelector("form").addEventListener("submit", function(event) {
        event.preventDefault(); // Mencegah form reload
        
        // Ambil nilai input
        const nama = document.querySelector('[name="nama"]').value;
        const tempatLahir = document.querySelector('[name="tempatLahir"]').value;
        const tanggal = document.querySelector('[name="tanggal"]').value;
        const agama = document.querySelector('[name="agama"]').value;
        const komentar = document.querySelector('[name="komentar"]').value;
        const nomor = document.querySelector('[name="number"]').value;
        const jenisKelamin = document.querySelector('[name="jenisKelamin"]:checked')?.value || "Belum dipilih";
        
        const hobiEls = document.querySelectorAll('[name="hobi"]:checked');
        const hobi = Array.from(hobiEls).map(cb => cb.value).join(", ");

        // Simulasi pengiriman ke owner
        alert(
            "Data berhasil diterima oleh owner:\n\n" +
            `Nama: ${nama}\n` +
            `Tempat Lahir: ${tempatLahir}\n` +
            `Tanggal Lahir: ${tanggal}\n` +
            `Agama: ${agama}\n` +
            `Alamat: ${komentar}\n` +
            `Nomor HP: ${nomor}\n` +
            `Jenis Kelamin: ${jenisKelamin}\n` +
            `Hobi: ${hobi}`
        );

        // Jika ingin tetap kirim ke PHP backend, bisa pakai:
        // event.target.submit();
    });
</script>

