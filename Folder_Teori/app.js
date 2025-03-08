// Tipe data

let nama = "default"; // nama = variabel atau object  // let atau const = property atau jenis  
// "default" = tipe data text atau strings
const mata_uang = "Rp.";
// let adalah tipe propery yang bisa di ubah" 
// const adalah tipe propery yang tidak bisa di ubah atau fix
console.log("default value : " + nama);
nama = "alfadjri Dwi Fahdilah";
console.log("sudah di ubah : " + nama);
console.log("default value : " + mata_uang);


let x = 5; // 5 ini masuk pada tipe data number atau integer
console.log("Tipe data number : " + x);
let y = 1.5 ; // 1.5 masuk pada tipe data float atau desimal atau double
console.log("Tipe data desimal : " + y);


let trueValue = true; // true or false ini masuk tipe data boolean
console.log("Tipe data boolean : " + trueValue);
// conversi dari boolean ke int
trueValue = Number(trueValue);
console.log("Tipe data boolean to integer : " + trueValue);


let false_value = false;
console.log("Tipe data boolean : " + false_value);
false_value = Number(false_value);
console.log("Tipe data boolean to integer : " + false_value);

let object = {
    "nama" : "alfadjri",
    "age" : 24,
};
// cara cetak tipe data object
console.log(String(object.nama));


// operator
let a = 3; // pastikan lagi tipe data dan konteks
let b = 2;
let hasil; // variabel inisialisasi

// pejumlahan
hasil = a + b;
console.log("hasil penjumlahan " + a + " + " + b + " = " + hasil);
// pengurangan
hasil = a - b;
console.log("hasil pengurangan " + a + " - " + b + " = " + hasil);
// kali 
hasil = a * b;
console.log("hasil kali " + a + " * " + b + " = " + hasil);
// bagi
hasil = a / b;
console.log("hasil bagi " + a + " / " + b + " = " + hasil);
// pembulatan ke integer 
hasil = Math.trunc(a / b);
console.log("hasil bagi penghilangan desimal value " + a + " / " + b + " = " + hasil);
// sisa bagi
hasil = a % b;
console.log("hasil sisa dari pembagian " + a + " % " + b + " = " + hasil);
// pangkat
hasil = a ** b;
console.log("hasil pangkat dari  " + a + " ^ " + b + " = " + hasil);