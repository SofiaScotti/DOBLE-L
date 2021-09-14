class Product {
  constructor(brand, name, price, stock, imagen) {
    this.brand = brand;
    this.name = name;
    this.price = price;
    this.stock = stock;
    this.imagen = imagen;
  }
  mostrarMarca() {
    console.log(this.brand);
  }
}

const product1 = new Product(
  "La Paulina",
  "Queso Cremoso",
  396,
  800,
  "./Productos/prod1.JPEG"
);
const product2 = new Product(
  "La Paulina",
  "Queso Cremoso Doble Crema",
  405,
  500,
  "./Productos/prod2.JPEG"
);
const product3 = new Product(
  "La Paulina",
  "Queso Dambo",
  320,
  300,
  "./Productos/prod3.JPEG"
);
const product4 = new Product(
  "La Paulina",
  "Queso Goya",
  458,
  300,
  "./Productos/prod4.JPEG"
);
const product5 = new Product(
  "La Paulina",
  "Queso Pategrás",
  360,
  750,
  "./Productos/prod17.JPEG"
);
const product6 = new Product(
  "La Paulina",
  "Queso Azul",
  473,
  345,
  "./Productos/prod16.JPEG"
);
const product7 = new Product(
  "Calchaquí",
  "Jamón Cocido Natural",
  205,
  600,
  "./Productos/prod9.JPEG"
);
const product8 = new Product(
  "Cagnoli",
  "Salame Fuet",
  112,
  720,
  "./Productos/prod11.JPEG"
);
const product9 = new Product(
  "Krachitos",
  "Papas Fritas Corte Americano",
  234,
  950,
  "./Productos/prod13.JPEG"
);
const product10 = new Product(
  "Krachitos",
  "Papas fritas Corte Tradicional",
  229,
  950,
  "./Productos/prod14.JPEG"
);
const product11 = new Product(
  "Krachitos",
  "Bastonitos",
  255,
  950,
  "./Productos/prod15.JPEG"
);

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

// const carrito = [];
const dataBaseLength = dataBase.length;
console.log(dataBaseLength);
for (let i = 0; i < dataBaseLength; i++) {
  dataBase[i].mostrarMarca();
}

let acumulador = ``;
dataBase.forEach((myProducts) => {
  acumulador += `<div class="container">
      <div class="row NuestrosProductos__Card--Prod">
        <div class="col-12 col-md-4">
          <div class="card" style="width: 18rem">
            <img
              src="${myProducts.imagen}"
              class="card-img-top"
              alt="Queso Cremoso"
            />
            <div class="card-body">
              <h5 class="card-title"> ${myProducts.name}</h5>
              <p class="card-text"> $${myProducts.price} x Kg. </p>
              <a
                href="#"
                onclick="agregarAlCarrito(${myProducts.name})"
                class="btn btn-primary"
              >
                Agregar al Carrito
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>;`;
});

const contenedorCards = document.getElementById("contenedor-productos");

contenedorCards.innerHTML = acumulador;
console.log(contenedorCards);