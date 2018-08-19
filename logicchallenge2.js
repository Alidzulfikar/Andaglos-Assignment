console.log('PALINDROME' + '\n');
function palindrome(kata){
  var pesan = '';
  for(var i = kata.length; i > 0; i--){
    pesan = pesan + kata[i-1];
  }
  return pesan === kata ? true : false;
}

console.log(palindrome('katak'));
console.log(palindrome('blanket'));
console.log(palindrome('civic'));
console.log(palindrome('kasur rusak'));
console.log(palindrome('mister'));

console.log('\n' + 'NUMBER PALINDROME' + '\n');
function isPalindrome(num){
  if(num < 9){
    return ++num;
  } else {
    for(var i = num; i <= 1001; i++){
      var j = i.toString();
      j = j.split('');
      j = j.reverse();
      j = j.join('');

      if ( i == j){
        return j;
      }
    }
  }
}

console.log(isPalindrome(8));
console.log(isPalindrome(10));
console.log(isPalindrome(117));
console.log(isPalindrome(175));
console.log(isPalindrome(1000));


console.log('\n' + 'MENGHITUNG JUMLAH KATA' + '\n');
function hitungJumlahKata(kalimat) {
  var jumlah = kalimat.split(' ').length;
  return jumlah;
}

console.log(hitungJumlahKata('I have a dream'));
console.log(hitungJumlahKata('Never eat shredded wheat or cake'));
console.log(hitungJumlahKata('A song to sing'));
console.log(hitungJumlahKata('I'));
console.log(hitungJumlahKata('I believe i can code'));

console.log('\n' + 'PASANGAN ANGKA TERBESAR' + '\n');
function pasanganTerbesar(num) {
  var pasangan = num.toString().split('');
  var nilai = [];
  for(var x = 0; x < pasangan.length-1; x++){
    nilai[x] = Number(pasangan[x] + pasangan[x+1]);
  }
  var terbesar = nilai[0];
  for(var y = 1; y < nilai.length; y++){
    if(nilai[y] > terbesar){
      terbesar = nilai[y];
    }
  }
  return terbesar;
}

console.log(pasanganTerbesar(641573));
console.log(pasanganTerbesar(12783456));
console.log(pasanganTerbesar(910233));
console.log(pasanganTerbesar(71856421));
console.log(pasanganTerbesar(79918293));
