console.log('MENCARI MEAN' + '\n');
function cariMean(arr) {
  var total = 0;
  var mean;
  for(var i = 0; i < arr.length; i++){
    total += arr[i];
  }
  if(arr.length < 5){
    mean = Math.floor(total/arr.length);
  }
  if(arr.length > 1){
    mean = Math.ceil(total/arr.length);
  }
  return mean;
}
console.log(cariMean([1,3,5,7,9]));
console.log(cariMean([3,5,7,5,3]));
console.log(cariMean([6,5,4,7,3]));
console.log(cariMean([1,3,3]));
console.log(cariMean([7,7,7,7,7]));

console.log('\n' + 'PERKALIAN UNIK' + '\n');
function perkalianUnik(arr) {
  var hasil = []
  for (var i = 0; i < arr.length; i++) {
    var perkalian = 1
    for (var j = 0; j < arr.length; j++) {
      if (i !== j) {
        perkalian *= arr[j]
      }
    }
    hasil.push(perkalian)
  }

  return hasil
}
console.log(perkalianUnik([2, 4, 6]));
console.log(perkalianUnik([1, 2, 3, 4, 5]));
console.log(perkalianUnik([1, 4, 3, 2, 5]));
console.log(perkalianUnik([1, 3, 3, 1]));
console.log(perkalianUnik([2, 1, 8, 10, 2]));


console.log('\n' + 'TENTUKAN DERET ARITMATIKA' + '\n');
function tentuanDeretAritmatika(arr){
  var angka = arr.slice(-1).pop() - arr.slice(-2, -1).pop();
  var nilai = true;

  for(var i = arr.length-1; i > 0; i--){
    if(angka !== (arr[i] - arr[i-1])){
      nilai = false;
    }
  }
  return nilai;
}
console.log(tentuanDeretAritmatika([1,2,3,4,5,6]));
console.log(tentuanDeretAritmatika([2,4,6,12,24]));
console.log(tentuanDeretAritmatika([2,4,6,8]));
console.log(tentuanDeretAritmatika([2,6,18,54]));
console.log(tentuanDeretAritmatika([1,2,3,4,7,9]));

console.log('\n' + 'TENTUKAN DERET GEOMETRI' + '\n');
function tentukanDeretGeometri(arr) {
  var angka = arr.slice(-1).pop() / arr.slice(-2, -1).pop();
  var nilai = true;

  for(var i = 0; i<= arr.length-2; i++){
    if(angka * arr[i] !== arr[i+1]){
      nilai = false;
    }
  }
  return nilai;
}
console.log(tentukanDeretGeometri([1,3,9,27,81]));
console.log(tentukanDeretGeometri([2,4,8,16,32]));
console.log(tentukanDeretGeometri([2,4,6,8]));
console.log(tentukanDeretGeometri([2,6,18,54]));
console.log(tentukanDeretGeometri([1,2,3,4,7,9]));
