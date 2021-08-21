// class Product {
//   constructor(marca, peso, precio) {
//     this.marca = marca || undefined;
//     this.peso = peso || undefined;
//     this.precio = precio || undefined;
//   }
// }

// const Product = {
//   name: "queso",
//   price: 450,
//   stock: 500,
// };
// console.log(Product);

// function Product(brand, name, price, stock) {
//   this.brand = brand;
//   this.name = name;
//   this.price = price;
//   this.stock = stock;
// }

class Product {
  constructor(brand, name, price, stock) {
    this.brand = brand;
    this.name = name;
    this.price = price;
    this.stock = stock;
  }

  checkStock(stock) {
    prompt("Stock Disponible: " + stock + " ¿Cuántos querés comprar?");
  }
}

const product = new Product("La Paulina", "Queso Cremoso", 450, 800);
const product2 = new Product("La Paulina", "Queso Roquefort", 630, 500);
const product3 = new Product("Paladini", "Jamón Cocido", 400, 300);

product.checkStock(200);
console.log(product, product2, product3);
