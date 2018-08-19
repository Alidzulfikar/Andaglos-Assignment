console.log('CHANGE ME' + '\n');
function changeMe(arr){
  var person = {
    namaDepan: arr[0],
    namaAkhir: arr[1],
    kelamin: arr[2],
    umur: arr[3],
    namaLengkap: function(){
      return this.namaDepan + " " + this.namaAkhir +":"+ "{ firstName: "+ "'"+this.namaDepan+"',"+" lastName: "+"'"+this.namaAkhir+"',"+
      " gender: "+"'"+this.kelamin+"', "+"age: "+this.umur;
    }
  };
}
//var arrw = ['Chris','Evans','Male',30];

var hasil = changeMe(['Chris','Evans','Male','30']);
console.log(hasil);

function changeMe(arr) {
  for(i = 0; i < arr.length; i++){
    var objek = {};
    objek.firstName = arr[i][0];
    objek.lastName = arr[i][1];
    objek.gender = arr[i][2];
    if(arr[i][3] === undefined){
      objek.age = 'Invalid Birthday Year';
    } else {
      objek.age = 2018-arr[i][3];
    }
    console.log(objek);
  }
}

changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]);
changeMe([]);

console.log('\n' + 'SHOPPING TIME' + '\n');
function createObj(memberID, money) {
  this.memberID = memberID;
  this.money = money;
  this.listPurchased = [];
  this.changeMoney = 0;
}

function shoppingTime(memberId, money) {
  if(memberId === '' || memberId === undefined && money === undefined){
    return 'Mohon maaf, toko X hanya berlaku untuk member saja';
  } else if(money < 50000){
    return 'Mohon maaf, uang tidak cukup';
  } else{
    shopObj = new createObj(memberId, money);
    shopObj.memberID = memberId;
    shopObj.money = money;
    var purchase = true;
    while(money > 0 && purchase){
      if(money >= 1500000){
        shopObj.listPurchased.push('Sepatu Stacattu');
        money -= 1500000;
        purchase = true;
      } else if(money >= 500000){
        shopObj.listPurchased.push('Baju Zoro');
        money -= 500000;
        purchase = true;
      } else if( money >= 250000){
        shopObj.listPurchased.push('Baju H&N');
        money -= 250000;
        purchase = true;
      } else if(money >= 175000){
        shopObj.listPurchased.push('Sweater Uniklooh');
        money -= 175000;
        purchase = true;
      } else if(money >= 50000){
        shopObj.listPurchased.push('Casing Handphone');
        money -= 50000;
        purchase = true;
      } else {
        purchase = false;
      }
    }
    shopObj.changeMoney = money;
    return shopObj;
  }
}

console.log(shoppingTime('1820RzKrnWn08', 2475000));
console.log(shoppingTime('82Ku8Ma742', 170000));
console.log(shoppingTime('', 2475000));
console.log(shoppingTime('234JdhweRxa53', 15000));
console.log(shoppingTime());


console.log('\n' + 'TOKO X' + '\n');
function penjualan(nama_produk, leftOver) {
  this.product = nama_produk;
  this.shoppers = [];
  this.leftOver = leftOver;
  this.totalProfit = 0;
}

function countProfit(shoppers) {
  let listBarang = [['Sepatu Stacattu', 1500000, 10], ['Baju Zoro', 500000, 2], ['Sweater Uniklooh', 175000, 1]];
  sepatu = new penjualan(listBarang[0][0], listBarang[0][2]);
  baju = new penjualan(listBarang[1][0], listBarang[1][2]);
  sweater = new penjualan(listBarang[2][0], listBarang[2][2]);
  for(var i = 0; i < shoppers.length; i++){
    if(shoppers[i].product === listBarang[0][0]){
      if(shoppers[i].amount <= sepatu.leftOver){
        sepatu.shoppers.push(shoppers[i].name);
        sepatu.leftOver -= shoppers[i].amount;
        sepatu.totalProfit += shoppers[i].amount * listBarang[0][1];
      }
    }
    if(shoppers[i].product === listBarang[1][0]){
      if(shoppers[i].amount <= baju.leftOver){
        baju.shoppers.push(shoppers[i].name);
        baju.leftOver -= shoppers[i].amount;
        baju.totalProfit += shoppers[i].amount * listBarang[1][1];
      }
    }
    if(shoppers[i].product === listBarang[2][0]){
      if(shoppers[i].amount <= sweater.leftOver){
        sweater.shoppers.push(shoppers[i].name);
        sweater.leftOver -= shoppers[i].amount;
        sweater.totalProfit += shoppers[i].amount * listBarang[2][1];
      }
    }
  }
  var daftar_penjualan = {sepatu, baju, sweater};
  return daftar_penjualan;
}
console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name:'Vanessa', product: 'Sepatu Stacattu', amount: 3},
{name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name:'Vanessa', product: 'Sepatu Stacattu', amount: 10},
{name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount:5}]));
console.log(countProfit([]));
