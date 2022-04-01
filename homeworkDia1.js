'use strict'

function BinarioADecimal(num) {//de CS.test.js surge q num es string

  let sum=0;
  let array= num.split('').reverse(); //num es string, x eso split() va ok
  for (let i=0;i<array.length;i++){
    sum+= array[i]*2**(i);
  }
  return sum;
}

function DecimalABinario(num) {
  // tu codigo aca
  let binary='';
  while (num>0){
    binary=num%2+binary; //esto es concatenación, por eso importa el orden
    num=Math.floor(num/2);
     //acá concatena y lleva a string, xq está declarado binary como string, ese tipo de dato es el valor objetivo
  };
  return binary;
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}
