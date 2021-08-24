let user = prompt("Ingresá tu usuario");
let password = prompt("Ingresá tu contraseña");

alert("¡Hola, " + user + "! Ya podés empezar tu compra.");
console.log("El usuario " + user + " ha iniciado sesión.");

class Product {
  constructor(brand, name, price, stock) {
    this.brand = brand;
    this.name = name;
    this.price = price;
    this.stock = stock;
  }
}

const product1 = new Product("La Paulina", "Queso Cremoso", 396, 800);
const product2 = new Product(
  "La Paulina",
  "Queso Cremoso Doble Crema",
  405,
  500
);
const product3 = new Product("La Paulina", "Queso Dambo", 320, 300);
const product4 = new Product("La Paulina", "Queso Goya", 458, 300);
const product5 = new Product("La Paulina", "Queso Pategrás", 360, 750);
const product6 = new Product("La Paulina", "Queso Azul", 473, 345);
const product7 = new Product("Calchaquí", "Jamón Cocido Natural", 205, 600);
const product8 = new Product("Cagnoli", "Salame Fuet", 112, 720);
const product9 = new Product(
  "Krachitos",
  "Papas Fritas Corte Americano",
  234,
  950
);
const product10 = new Product(
  "Krachitos",
  "Papas fritas Corte Tradicional",
  229,
  950
);
const product11 = new Product("Krachitos", "Bastonitos", 255, 950);

const dataBase = [
  product1,
  product2,
  product3,
  product4,
  product5,
  product6,
  product7,
  product8,
  product9,
  product10,
  product11,
];

console.log(dataBase.length);

dataBase.forEach((product) => {
  console.log(product);
});
