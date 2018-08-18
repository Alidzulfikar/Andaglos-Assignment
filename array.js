// 1. Looping data array manually
var input = [
  ['0001', 'Roman Alamsyah', 'Bandar Lampung', '21/05/1989', 'Membaca'],
  ['0002', 'Dika Sembiring', 'Medan', '10/10/1992', 'Bermain Gitar'],
  ['0003', 'Winona', 'Ambon', '25/12/1965', 'Memasak'],
  ['0004', 'Bintang Senjaya', 'Martapura', '6/4/1970', 'Berkebun']
];

console.log('Nomor ID : ' + input[0][0] + '\n' + 'Nama Lengkap : ' + input[0][1] + '\n' + 'TTL : ' + input[0][2] + ', ' + input[0][3] + '\n' + 'Hobi : ' + input[0][4] + '\n' + '\n');
console.log('Nomor ID : ' + input[1][0] + '\n' + 'Nama Lengkap : ' + input[1][1] + '\n' + 'TTL : ' + input[1][2] + ', ' + input[1][3] + '\n' + 'Hobi : ' + input[1][4] + '\n' + '\n');
console.log('Nomor ID : ' + input[2][0] + '\n' + 'Nama Lengkap : ' + input[2][1] + '\n' + 'TTL : ' + input[2][2] + ', ' + input[2][3] + '\n' + 'Hobi : ' + input[2][4] + '\n' + '\n');
console.log('Nomor ID : ' + input[3][0] + '\n' + 'Nama Lengkap : ' + input[3][1] + '\n' + 'TTL : ' + input[3][2] + ', ' + input[3][3] + '\n' + 'Hobi : ' + input[3][4] + '\n' + '\n');

// 2. Using Built-in function pada Array
var Input = ['0001', 'Roman Alamsyah', 'Bandar Lampung', '21/05/1989', 'Membaca'];
function dataHandling2(data){
  console.log(data);
}
dataHandling2(Input);
Input.splice(1, 4, 'Roman Alamsyah Elsharawy', 'Provinsi Bandar Lampung', '21/05/1989', 'Pria', 'SMA Internasional Metro');
console.log(Input);
var date = Input[3];
var inputSplit = date.split('/');
// console.log(inputSplit[0]); -> '21'
// console.log(inputSplit[1]); -> '05'
// console.log(inputSplit[2]); -> '1989'
switch(inputSplit[1]){
  case '04':
  console.log('April');
  break;
  case '05':
  console.log('Mei');
  break;
  case '06':
  console.log('Juni');
  break;
  default:
  console.log('Bulan tidak diketahui');
  break;
}

var descending = inputSplit.sort(function(a,b){
  return b - a
});
console.log(descending);

var inputSplit = date.split('/');
var join = inputSplit.join('-');
console.log(join);


var res = Input[1].slice(0,15);
console.log(res);
