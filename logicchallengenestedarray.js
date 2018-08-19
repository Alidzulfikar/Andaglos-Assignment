console.log('TARGET TERDEKAT' + '\n');
function targetTerdekat(arr){
  return arr.indexOf('x') - arr.indexOf('o') > 0 ? arr.indexOf('x') -
  arr.indexOf('o') :  (arr.length-1) + (arr.indexOf('x') - arr.indexOf('o'));
}

console.log(targetTerdekat(['','','o','','','x','','x']));
console.log(targetTerdekat(['o','','','','x','x','x']));
console.log(targetTerdekat(['x','','','','x','x','o','']));
console.log(targetTerdekat(['','','o','']));
console.log(targetTerdekat(['','o','','x','x','','','x']));

console.log('\n' + 'MENGELOMPOKKAN ANGKA' + '\n');
function mengelompokkanAngka(arr) {
  var kelompok = [];
  var kelipatan_3 = [];
  var ganjil = [];
  var genap = [];

  for(var x = 0; x < arr.length; x++){
    if(arr[x] % 3 === 0){
      kelipatan_3.push(arr[x]);
    } else if(arr[x] % 2 === 0){
      genap.push(arr[x]);
    } else {
      ganjil.push(arr[x]);
    }
  }
  kelompok.push(genap);
  kelompok.push(ganjil);
  kelompok.push(kelipatan_3);
  return kelompok;
}

console.log(mengelompokkanAngka([2,4,6]));
console.log(mengelompokkanAngka([1,2,3,4,5,6,7,8,9]));
console.log(mengelompokkanAngka([100,151,122,99,111]));
console.log(mengelompokkanAngka([]));

console.log('\n' + 'MENGELOMPOKKAN HEWAN' + '\n');
function groupAnimals(animals){
  animals.sort();
  var arr_kelompok = [];
  var pertama = animals[0][0];
  var temp = [];
  for(var i = 0; i < animals.length; i++){
    if(animals[i][0] === pertama){
      temp.push(animals[i]);
    } else{
      arr_kelompok.push(temp);
      temp = [];
      pertama = animals[i][0];
      temp.push(animals[i]);
    }
    if(i === animals.length-1){
      arr_kelompok.push(temp);
    }
  }
  return arr_kelompok;
}
console.log(groupAnimals(['cacing','ayam', 'kuda', 'anoa', 'kancil']));
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));
