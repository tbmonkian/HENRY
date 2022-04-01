'use strict'
// Las funciones nFactoria y nFibonacci deben resolverlas
// usando recursión. Una vez realizadas de esa forma pueden probar hacerlas
// de forma iterativa pero esto último no es obligatorio.

function nFactorial(n) {
  // devolvé el factorial de n (n!)
  // ej:
  // el factorial de 3 es 6 (3 * 2 * 1)
  if (n===1){return 1};
  return n*nFactorial(n-1);
}

function nFibonacci(n) {
  // Secuencia de Fibonacci: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144,…
  // Retorna el enésimo numero de la serie
  // nFibonacci(0) // 0  // el elemento 0 es cero
  // nFibonacci(1) // 1 // el elemento 1 es 1
  // nFibonacci(6) // 1 // el elemento 6 es 8
  //
  //trabajar con posiciones no valores
  //n=fibo(n-1)+fib(n-2)
  if (n===0) {return 0}
  else if (n===1) {return 1};
  return nFibonacci(n-1)+nFibonacci(n-2);
}

// Para esta parte no es necesario utilizar recursión.
// Implementa la clase Queue que debe contener los siguientes métodos:
// enqueue: Agrega un valor a la queue. Respeta el orden existente.
// dequeue: Remueve un valor de la queue. Obedece a FIFO y respeta el underflow (devuelve undefined cuando la queue tiene size cero, o sea, cuando no tiene ningún elemento).
// size: Devuelve el número de elementos que contiene la queue.

//1* compoleto la clase con el constructor, es decir agrego props y métodos
//2* respetar LIFO y FIFO con push y shift

function Queue() {
  this.arr=[]
}

Queue.prototype.enqueue= function(elemento){this.arr.push(elemento)}
Queue.prototype.dequeue= function(){return this.arr.length===0 ? undefined: this.arr.shift()}
Queue.prototype.size= function(){return this.arr.length}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Queue,
  nFactorial,
  nFibonacci
};
