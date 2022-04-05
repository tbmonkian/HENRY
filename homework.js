'use strict'
// resolve estos ejercicios usando recursión

// Binary Seach Tree
// 'tiene metodos llamados `insert`, `contains`, `depthFirstForEach`, 'breadthFirstForEach' y 'size'
// corre depth-first (en recorrido "in-order") cuando depthFirstForEach() es ejecutado sin ninguna opcion o con la opcion "in-order
// corre depth-first (en recorrido "pre-order") cuando depthFirstForEach() es ejecutado con la opcion "pre-order"
// corre depth-first (en recorrido "post-order" cuando depthFirstForEach() es ejecutado con la opcion "post-order"
// corre breadth-first cuando breadthFirstForEach() es ejecutado
// Observar imagen de la carpeta "homework" llamada "bst.png". Allí encontraran dibujado el arbol utilizado para los tests
function BinarySearchTree(value) {
  this.right=null;
  this.left=null;
  this.value=value;
}

BinarySearchTree.prototype.insert= function(value){
  if(this.value>value){
    if(!this.left)this.left= new BinarySearchTree(value);
    else this.left.insert(value)
  }
//si el value es menor me voy a la izq y ahí chequeo si es el último nro y le fabrico uno, sino llamo a la insert() recursiva
  if(this.value<=value){
    if(!this.right) this.right= new BinarySearchTree(value);
    else this.right.insert(value);
  }
}

BinarySearchTree.prototype.contains= function(value){
  if (this.value===value) return true; //del test surge q debo responder en booleano
  if (value>this.value){
    if(!this.right) return false;
    else {
      return this.right.contains(value);
    }
  }
  if (value<this.value){
    if(!this.left) return false;
    else {
      return this.left.contains(value);
    }
  }
}

BinarySearchTree.prototype.depthFirstForEach= function(cb, order){
  //cb es una function q hace lo q quiera x cada uno de mis nodos! ni me importa q hace, solo se la aplico a cada nodo
  //typeof cb==='function' && typeof ==='string'
  if (order==='pre-order'){
    //root-left-rigt
    cb(this.value); //1ro root
    if (this.left) this.left.depthFirstForEach(cb,order); //2do left
    if (this.right) this.right.depthFirstForEach(cb,order); //3ro right
  } else if (order==='post-order'){
    //left-right-root
    if (this.left) this.left.depthFirstForEach(cb,order);
    if (this.right) this.right.depthFirstForEach(cb,order);
    cb(this.value);
  } else{
    //left-root-right
    if (this.left) this.left.depthFirstForEach(cb,order);
    cb(this.value);
    if (this.right) this.right.depthFirstForEach(cb,order);
  }
}

BinarySearchTree.prototype.breadthFirstForEach= function(cb, array=[]){
//al meter el array como parámetro con valor x default evito ponerlo en contexto de ejecución y q aparezca en la recursión
  cb(this.value); //ejecuta el elemento
  if(this.left) array.push(this.left); //pushea al array vacío q uso de auxiliar los hijos, lo uso como una queue
  if(this.right) array.push(this.right);
  if (array.length>0) array.shift().breadthFirstForEach(cb,array);
}



BinarySearchTree.prototype.size= function(){
  if(!this.left && !this.right) return 1; // estoy en un nodo hoja (el último) y lo cuento
  if(!this.left) return 1 + this.right.size(); //cuento en el q estoy + recursiva size()
  if(!this.right) return 1 + this.left.size();
  if(true) return 1 + this.left.size() + this.right.size();
}


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree
};
