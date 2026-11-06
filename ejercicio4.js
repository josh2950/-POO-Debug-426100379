class Usuario {
  constructor(nombre) {
    this.nombre = nombre;
  }

  saludar() {
    console.log("Hola, soy " + this.nombre)
  }
}

const user = new Usuario("Ana");
const miFuncionSaludar = user.saludar.bind(user);

miFuncionSaludar();