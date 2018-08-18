// 1. While Loop

var firstLoop = 2;
var secondLoop = 20;
console.log('While Looping');
console.log('LOOPING PERTAMA');
while(firstLoop <= secondLoop){
  console.log(firstLoop + ' - I love coding');
  firstLoop += 2;
}

console.log('LOOPING KEDUA');
while(secondLoop >= firstLoop - 20){
  console.log(secondLoop + ' - I will become a developer');
  secondLoop -= 2;
}
console.log('\n' + '\n' + 'For Looping');

// 2. For Loop
console.log('LOOPING PERTAMA');
for(var i = 0; i < 20; i++){
  console.log(i+1 + ' - I love coding');
}

console.log('LOOPING KEDUA');
for(var i = 20; i > 0; i--){
  console.log(i + ' - I will become a developer');
}
console.log('\n' + '\n');
// 3. Angka ganjil & genap
var counter = 1;
for(var i = counter; i <= 100; i++){
  if(i % 2 == 0){
    console.log('Counter sekarang = ' + i + ', GENAP');
  } else {
    console.log('Counter sekarang = ' + i + ', GANJIL');
  }
}

// PERTAMBAHAN COUNTER = 2
console.log('\n'+'\n'+'PENAMBAHAN COUNTER 2');
var counter2 = 1;
for(var i = counter2; i < 101; i++){
  if(i === 1){
    console.log('""');
  } else if(i % 2 != 0){
    console.log('Counter sekarang = ' + i + ', ' + counter2 + ' KELIPATAN ' + counter2);
  }
  counter2++;
}

// PERTAMBAHAN COUNTER = 5
console.log('\n'+'\n'+'PENAMBAHAN COUNTER 5');
var counter2 = 1;
for(var i = counter2; i < 101; i+=5){
  counter2 += 5;
  if(i === 1){
    console.log('""');
  } else{
    console.log('Counter sekarang = ' + i + ', ' + (counter2-5) + ' KELIPATAN ' + (counter2-5));
  }
}


// PERTAMBAHAN COUNTER = 9
console.log('\n'+'\n'+'PENAMBAHAN COUNTER 9');
var counter2 = 1;
for(var i = counter2; i < 101; i+=9){
  counter2 += 9;
  if(i === 1){
    console.log('""');
  } else{
    console.log('Counter sekarang = ' + i + ', ' + (counter2-9) + ' KELIPATAN ' + (counter2-9));
  }
}


// MENYUSUN BARISAN BINTANG
console.log('\n'+'\n'+'MENYUSUN BARISAN BINTANG');
var rows1 = 5;
for(var i = 0; i < rows1; i++){
  console.log('*');
}

// MENYUSUN BARISAN BINTANG DENGAN NESTED LOOPING
console.log('\n'+'\n'+'MENYUSUN BARISAN BINTANG DENGAN NESTED LOOPING');
var rows2 = 5;

var i=0;
while (i<rows2) {
  var asteriks = '*';
  var j = 1;
  while (j<rows2) {
    asteriks = asteriks + '*';
    j++;
  }
  console.log(asteriks);
  i++;
}

// MENYUSUN BARISAN BINTANG DENGAN NESTED LOOPING
console.log('\n'+'\n'+'MENYUSUN BARISAN TANGGA BINTANG DENGAN NESTED LOOPING');
var rows3 = 5;
for(var i = 1; i <= rows3; i++) {
  var bintang = '';
  for(var j = 1; j <= i; j++) {
    bintang += '*';
  }
  console.log(bintang);
}
