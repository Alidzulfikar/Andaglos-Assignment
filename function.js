// TUGAS 1
console.log('TUGAS 1');
function shoutOut() {
  return 'Halo Function!';
}
console.log(shoutOut());


// TUGAS 2
console.log('\n'+'TUGAS 2');
function calculateMultiply(angka1, angka2) {
  var hasil = angka1 * angka2;
  return hasil;
}

var num1 = 5;
var num2 = 6;
var hasilPerkalian = calculateMultiply(num1, num2);
console.log(hasilPerkalian);

// TUGAS 3
console.log('\n'+'TUGAS 3');
function processSentence(name,age,address,hobby) {
  var biodata = 'Nama saya ' + name + ', umur saya ' + age + ' tahun, alamat saya di ' + address + ', dan hobby saya ' + hobby + '.';
  return biodata;
}

var nama = 'Agus';
var umur = 30;
var alamat = 'Jln. Malioboro Yogyakarta';
var hobi = 'gaming';
var fullSentence = processSentence(nama, umur, alamat, hobi);
console.log(fullSentence);
