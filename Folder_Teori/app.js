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


// algorima kondisi atau selection
// misal saya punya nilai rapot
// saya mau check nilai untuk code nya A > 90 B > 80 C > 70 D <= 70

let nilai_raport = 20;
console.log("=======if=======")
if ( nilai_raport > 90) {
    // isikan apa yang akan terjadi jika kondisi terpenuhi
    console.log("nilai kamu  : A");
}
console.log("=======if else=======")
if ( nilai_raport > 90) {
    // isikan apa yang akan terjadi jika kondisi terpenuhi
    console.log("nilai kamu  : A");
}else {
    console.log("nilai kamu  : D");
}

console.log("=======if elseif else=======");
nilai_raport = 71;
if ( nilai_raport > 90) {
    // isikan apa yang akan terjadi jika kondisi terpenuhi
    console.log("nilai kamu  : A");
}else if (nilai_raport > 80 && nilai_raport <= 90){
    console.log("nilai kamu  : B");
}else if (nilai_raport > 70 && nilai_raport <= 80){
    console.log("nilai kamu  : C");
}else{
    console.log("nilai kamu  : D");
}


// and && ini syaratnya kedua sisi harus terpenuhi
// or || ini salah satu sisi harus terpenuhi
// not ! ini kebalikan dari nilai apapun mirip (Antonim)
// let kondisi = true;
// console.log(kondisi);
// kondisi = !kondisi;
// console.log(kondisi);

console.log("=========looping=========");

//  perulangan atau looping
// for
// syaratnya kita tau kapan mulai kapan berhenti
console.log("=========for=========");
// tolong buatkan nomer dari 1 sampai 10
// nilai++ ini di sebutnya increment
// misal saya punya nilai 1000 di tampung di variabel a terus 
// terus saya mau menambahkan nilai a dengan 1 
// nilai = nilai + 1;
// increment (menjumlahkan ) atau decerment (pengurangan)
// nilai++  singakatan dari nilai = nilai + 1 
// nilai--  singaktan dari nilai = nilai - 1
for(let nilai = 1 ; nilai <= 1 ; nilai++){
    console.log(nilai + " Tidak mengulangi kesalahan yang sama");
}
// while
// chek dulu baru jalankan tapi kita gak tau kapan harus berhenti tapi tau syarat untuk berhenti
console.log("=========while=========");
let nilai = 10;
while(nilai < 10){ // kita tau kapan harus berhenti
    console.log(nilai + " Tidak mengulangi kesalahan yang sama");
    nilai++; // kita tau cara dia berhenti
}
console.log("=========do while=========");
do {
    nilai++;
    console.log(nilai + " Tidak mengulangi kesalahan yang sama");
}while(nilai < 10);


