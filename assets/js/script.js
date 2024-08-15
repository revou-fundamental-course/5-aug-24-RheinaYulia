document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('FormBMI');
    const resultElement = document.getElementById('result');
    const result1Element = document.getElementById('result1');
    const hasilElement = document.getElementById('hasil');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Mencegah submit default

        // Ambil nilai dari input form
        const weight = parseFloat(document.getElementById('weight').value);
        const height = parseFloat(document.getElementById('height').value) / 100; // Konversi tinggi ke meter
        const age = parseInt(document.getElementById('age').value, 10);
        const gender = document.querySelector('input[name="jenis-kelamin"]:checked');

        // Validasi input
        let errorMessage = '';
        if (isNaN(weight) || weight <= 0) {
            errorMessage += 'Silakan masukkan berat badan yang valid.\n';
        }
        if (isNaN(height) || height <= 0) {
            errorMessage += 'Silakan masukkan tinggi badan yang valid.\n';
        }
        if (isNaN(age) || age <= 0) {
            errorMessage += 'Silakan masukkan umur yang valid.\n';
        }
        if (!gender) {
            errorMessage += 'Silakan pilih jenis kelamin.\n';
        }

        if (errorMessage) {
            alert(errorMessage);
            return;
        }

        // Hitung BMI
        const bmi = weight / (height * height);
        let bmiCategory = '';
        let bmiStatus = '';
        let bmiAngka = '';

        // Tentukan kategori BMI
        if (bmi < 18.5) {
            bmiCategory = 'Anda berada dalam kategori kekurangan berat badan. Hubungi dokter lebih lanjut mengenai pola makan dan gizi yang baik untuk meningkatkan kesehatan.';
            bmiStatus = 'Kekurangan berat badan';
            bmiAngka = '< 18.5';
        } else if (bmi >= 18.5 && bmi < 24.9) {
            bmiCategory = 'Anda berada dalam kategori berat badan yang normal.Tetap pertahankan berat badan Anda dan jaga berat badan Anda dengan mengatur keseimbangan antara pola makan dan aktivitas fisik Anda.';
            bmiStatus = 'Normal';
            bmiAngka = '18.5 dan 24.9';
        } else if (bmi >= 25 && bmi < 29.9) {
            bmiCategory = 'Anda berada dalam kategori obesitas.Usahakan untuk menurunkan berat badan dan menerapkan pola hidup sehat dengan menjaga makan dan aktivitas fisik. <br> Segera kunjungi dokter untuk dilakukan pemeriksaan kesehatan lanjutan untuk mengetahui risiko yang Anda miliki terkait berat badan Anda.';
            bmiStatus = 'Kelebihan berat badan';
            bmiAngka = '25 dan 29.9';
        } else if (bmi >= 30) {
            bmiCategory = 'Anda berada dalam kategori obesitas.Usahakan untuk menurunkan berat badan dan menerapkan pola hidup sehat dengan menjaga makan dan aktivitas fisik. <br> Segera kunjungi dokter untuk dilakukan pemeriksaan kesehatan lanjutan untuk mengetahui risiko yang Anda miliki terkait berat badan Anda.';
            bmiStatus = 'Kegemukan (Obesitas)';
            bmiAngka = '30.0 ';
        } 

        //Hasil
        hasilElement.innerHTML = `
            <h3> Hasil </h3>
        `;

        // Tampilkan hasil
        resultElement.innerHTML = `
            <h4 align="center" style="font-size: 20px;">${bmiStatus}</h4>
            <p align="center" style="font-size: 20px;">BMI: ${bmi.toFixed(2)}</p>
            <p align="center" style="font-size: 15px;">Jenis Kelamin: ${gender.value.charAt(0).toUpperCase() + gender.value.slice(1)}</p>
            <p align="center" style="font-size: 15px;">Umur: ${age} tahun</p>
        `;

        // Tampilkan hasil keterangan
        result1Element.innerHTML = `
            <p>Kategori: ${bmiCategory}</p>
        `;
    });

    // Tambahkan event listener untuk tombol reset
    form.querySelector('button[type="reset"]').addEventListener('click', function() {
        // Bersihkan hasil
        resultElement.innerHTML = '';

        // Bersihkan input
        form.reset();
    });
});
