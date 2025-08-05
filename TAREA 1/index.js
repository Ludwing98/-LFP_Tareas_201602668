class Celular {
  #marca;
  #modelo;
  sistemaOperativo;

  constructor(marca, modelo, sistemaOperativo) {
    this.#marca = marca;
    this.#modelo = modelo;
    this.sistemaOperativo = sistemaOperativo;
  }

  mostrarInfo() {
    console.log(`Marca: ${this.#marca}`);
    console.log(`Modelo: ${this.#modelo}`);
    console.log(`Sistema Operativo: ${this.sistemaOperativo}`);
  }

  encender = () => {
    console.log(`Encendiendo el ${this.#marca} ${this.#modelo}...`);
  }
}

const celular1 = new Celular("Samsung", "Galaxy S21", "Android");
const celular2 = new Celular("Apple", "iPhone 14", "iOS");

console.log("=== CELULAR 1 ===");
celular1.mostrarInfo();
celular1.encender();

console.log("\n=== CELULAR 2 ===");
celular2.mostrarInfo();
celular2.encender();
