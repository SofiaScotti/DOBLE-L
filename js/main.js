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

function sumNumbers() {
  const numberA = prompt("Ingresá cantidad de productos A");
  const numberB = prompt("Ingresá cantidad de productos B");
  const numberC = prompt("Ingresá cantidad de productos C");
  console.log(numberA, numberB, numberC);
}

function firstNumber() {
  const numberA = parseInt(prompt("Ingresá cantidad de productos A"));
  return numberA;
}

function secondNumber() {
  const numberB = parseInt(prompt("Ingresá cantidad de productos A"));
  return numberB;
}

function thirdNumber() {
  const numberC = parseInt(prompt("Ingresá cantidad de productos A"));
  return numberC;
}

let numberA = parseInt(prompt("Ingresá cantidad de items A"));
console.log("El usuario " + user + " compró " + numberA + " productos A");

let numberB = parseInt(prompt("Ingresá cantidad de productos B"));
console.log("El usuario " + user + " compró " + numberB + " productos B");

let numberC = parseInt(prompt("Ingresá cantidad de productos C"));
console.log("El usuario " + user + " compró " + numberC + " productos C");

let total = 0;

function sumNumbers(numberA, numberB, numberC) {
  total = numberA + numberB + numberC;
}

sumNumbers(numberA, numberB, numberC);
alert("¡Compraste " + total + " productos!");

console.log("El usuario " + user + " compró " + total + " productos en total");
