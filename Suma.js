class Matematicas {
  sumar(a, b) { //static
    return a + b;
  }
}
const obj = new Matematicas();
console.log(obj.sumar(5, 3)); 