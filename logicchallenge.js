console.log('BANDINGKAN ANGKA' + '\n');
function bandingkanAngka(angka1, angka2){
  if(angka2 > angka1){
    return true;
  } else if(angka2 === angka1){
    return -1;
  } else{
    return false;
  }
}
var hasil = bandingkanAngka(2,3);
console.log(hasil);

console.log('\n' + 'BALIK KATA' + '\n');
function balikKata(kata) {
  var reverse='';
  for(var i=kata.length-1; i>=0;i--){
    reverse=reverse+kata[i];
  }
  return reverse;
}

console.log(balikKata('Hello World and Coders'));
console.log(balikKata('John Doe'));
console.log(balikKata('I am a bookworm'));
console.log(balikKata('Coding is my hobby'));
console.log(balikKata('Super'));


console.log('\n' + 'Konversi Menit' + '\n');
function konversiMenit(menit) {
  var hour = Math.floor(menit / 60);
  var second = menit % 60;

  if(second < 10){
    return hour + ':0' + second;
  } else {
    return hour + ':' + second;
  }
}
console.log(konversiMenit(63));
console.log(konversiMenit(124));
console.log(konversiMenit(53));
 console.log(konversiMenit(88));
console.log(konversiMenit(120));


console.log('\n' + 'X dan O' + '\n');
function xo(str){
  var x = 0, o = 0;
  for(var i = 0; i < str.length; i++){
    if(str[i] === 'x'){
      x++;
    }
    if(str[i] === 'o'){
      o++;
    }
  }
    return x !== o ? false : true;
}

console.log(xo('xoxoxo'));
console.log(xo('oxooxo'));
console.log(xo('oxo'));
console.log(xo('xxxooo'));
console.log(xo('xoxooxxo'));
console.log(xo('acacasd'));
