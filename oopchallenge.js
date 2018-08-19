console.log('MEMBUAT CLASS DAN MENGISNSTANCENYA' + '\n');

class Kalkulator{
  constructor(angka1, angka2){
    this.angka1 = angka1;
    this.angka2 = angka2;
    this.hasil = 0;
  }
  tambah(){
    return this.hasil = angka1 + angka2;
  }
  kurang(){
    return this.hasil = angka1 - angka2;
  }

  bagi(){
    this.angka1.toString();
    this.angka2.toString();
    this.angka1 = '6';
    this.angka2 = '2';
    var NumAngka1 = Number(this.angka1);
    var NumAngka2 = Number(this.angka2);
    return this.hasil = NumAngka1 / NumAngka2;
  }

  kali(){
    return this.hasil = angka1 * angka2;
  }

}
const angka1 = 2;
const angka2 = 3;
const kalkulator = new Kalkulator(angka1, angka2);
kalkulator.tambah();
console.log(kalkulator.hasil);
kalkulator.kurang();
console.log(kalkulator.hasil);
kalkulator.kali();
console.log(kalkulator.hasil);
kalkulator.angka1 = 6;
kalkulator.angka2 = 2;
kalkulator.bagi();
console.log(kalkulator.hasil);


console.log('\n' + 'MELAKUKAN INHERITANCE TERHADAP CLASS' + '\n');

class Mobile{
  constructor(warna, merek, layar){
    this.warna = warna;
    this.merek = merek;
    this.layar = layar;
    this.panggil = false;
  }
  melakukanPanggilan(){
    console.log('Melakukan panggilan');
    return this.panggil = true;
  }
  mematikanPanggilan(){
    console.log('Melakukan panggilan');
    return this.panggil = false;
  }
}

class Ios extends Mobile{
  constructor(warna, merek, layar){
    super(warna, merek, layar);
    this.photo = false;
  }
  ambilPhoto(){
    console.log('Mengambil photo');
    return this.photo = true;
  }
}

class Android extends Mobile{
  constructor(warna, merek, layar){
    super(warna, merek, layar);
    this.record = false;
  }
  recordVideo(){
    console.log('Merekam Video');
    this.record = true;
  }
}

const mobileIos = new Ios('grey', 'iPhone', 'touchscreen');
const mobuleAndroid = new Android('black', 'Samsung', 'amoled');

mobileIos.ambilPhoto();
mobuleAndroid.recordVideo();

mobileIos.melakukanPanggilan();
mobuleAndroid.melakukanPanggilan();
