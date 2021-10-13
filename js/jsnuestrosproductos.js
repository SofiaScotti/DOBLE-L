class Product {
  constructor(id, brand, name, price, stock, imagen, categoria) {
    this.id = id;
    this.brand = brand;
    this.name = name;
    this.price = price;
    this.stock = stock;
    this.imagen = imagen;
    this.categoria = categoria;
  }
  mostrarMarca() {
    console.log(this.brand);
  }
}
//*QUESOS*//
// const product1 = new Product(
//   1,
//   "La Paulina",
//   "Queso Cremoso",
//   396,
//   800,
//   "./Productos/prod1.JPEG",
//   "queso"
// );
// const product2 = new Product(
//   2,
//   "La Paulina",
//   "Queso Cremoso Doble Crema",
//   405,
//   500,
//   "./Productos/prod2.JPEG",
//   "queso"
// );
// const product3 = new Product(
//   3,
//   "La Paulina",
//   "Queso Dambo",
//   320,
//   300,
//   "./Productos/prod3.JPEG",
//   "queso"
// );
// const product4 = new Product(
//   4,
//   "La Paulina",
//   "Queso Goya",
//   458,
//   300,
//   "./Productos/prod4.JPEG",
//   "queso"
// );
// const product5 = new Product(
//   5,
//   "La Paulina",
//   "Queso Pategrás",
//   360,
//   750,
//   "./Productos/prod17.JPEG",
//   "queso"
// );
// const product6 = new Product(
//   6,
//   "La Paulina",
//   "Queso Azul",
//   473,
//   345,
//   "./Productos/prod16.JPEG",
//   "queso"
// );
// //*JAMONES*//
// const product7 = new Product(
//   7,
//   "Calchaquí",
//   "Jamón Cocido Natural",
//   205,
//   600,
//   "./Productos/prod9.JPEG",
//   "jamones"
// );
// //*SALAMES*//
// const product8 = new Product(
//   8,
//   "Cagnoli",
//   "Salame Fuet",
//   112,
//   720,
//   "./Productos/prod11.JPEG",
//   "salames"
// );
// //* SNACKS *//
// const product9 = new Product(
//   9,
//   "Krachitos",
//   "Papas Fritas Corte Americano",
//   234,
//   950,
//   "./Productos/prod13.JPEG",
//   "snacks"
// );
// const product10 = new Product(
//   10,
//   "Krachitos",
//   "Papas fritas Corte Tradicional",
//   229,
//   950,
//   "./Productos/prod14.JPEG",
//   "snacks"
// );
// const product11 = new Product(
//   11,
//   "Krachitos",
//   "Bastonitos",
//   255,
//   950,
//   "./Productos/prod15.JPEG",
//   "snacks"
// );

// const dataBase = [
//   product1,
//   product2,
//   product3,
//   product4,
//   product5,
//   product6,
//   product7,
//   product8,
//   product9,
//   product10,
//   product11,
// ];
let dataBase = []
const URL = './json/productos.json'

$.getJSON( URL, function(data, success) {
    console.log(data)
    dataBase = data.map(item => new Product(item.id, item.brand, item.name, item.price, item.stock, item.imagen, item.categoria))
    filtraProductos(dataBase);
});

function mostrarMarcasProductos(dataBase) {
  const dataBaseLength = dataBase.length;
  console.log(dataBaseLength);
  for (let i = 0; i < dataBaseLength; i++) {
    dataBase[i].mostrarMarca();
  }
}

function filtrarCategoria(arrayProductos, categoria) {
  const filtrados = arrayProductos.filter(
    (producto) => producto.categoria === categoria
  );
  return filtrados;
}
function filtraProductos(dataBase) {
    const quesos = filtrarCategoria(dataBase, "queso");
    console.log(quesos);
    renderizarProductos(quesos, "contenedor-quesos");
    
    const jamones = filtrarCategoria(dataBase, "jamones");
    console.log(jamones);
    renderizarProductos(jamones, "contenedor-jamones");
    
    const salames = filtrarCategoria(dataBase, "salames");
    console.log(salames);
    renderizarProductos(salames, "contenedor-salames");
    
    const snacks = filtrarCategoria(dataBase, "snacks");
    console.log(snacks);
    renderizarProductos(snacks, "contenedor-snacks");
}

function renderizarProductos(arrayProductos, contenedorId) {
  let acumulador = ``;
  arrayProductos.forEach((myProduct) => {
    acumulador += `
      
        <div class="col-12 col-md-4">
          <div class="card" style="width: 18rem">
            <img
              src="${myProduct.imagen}"
              class="card-img-top"
              alt="Queso Cremoso"
            />
            <div class="card-body">
              <h5 class="card-title"> ${myProduct.name}</h5>
              <p class="card-text"> $${myProduct.price} x Kg. </p>
              <a
                href="#"
                onclick="agregarAlCarrito(${myProduct.id})"
                class="btn btn-primary"
              >
                Agregar al Carrito
              </a>
            </div>
          </div>
        </div>
      `;
  });
  const contenedorCards = document.getElementById(contenedorId);
  contenedorCards.innerHTML = acumulador;
}


// carrito //
let carrito = [];
if (localStorage.getItem('carrito')) {
  carrito = recuperarStorage('carrito');
}

class Carrito {
  constructor(id, brand, name, price, imagen, cantidad) {
    this.id = id;
    this.brand = brand;
    this.name = name;
    this.price = price;
    this.imagen = imagen;
    this.cantidad = cantidad;
  }
}

function agregarAlCarrito(idProducto) {
  const productoSeleccionado = dataBase.find(
    (product) => product.id === idProducto
  );

  if (!carrito.some((product) => product.id === idProducto)) {
    const productoAgregado = new Carrito(
      productoSeleccionado.id,
      productoSeleccionado.brand,
      productoSeleccionado.name,
      productoSeleccionado.price,
      productoSeleccionado.imagen,
      1
    );
    carrito.push(productoAgregado);
    console.log(carrito);
    guardarStorage("carrito", carrito);
    mostrarCarrito(carrito, carritoContenedor);
  } else {
    const productoAgregado = carrito.find(
      (product) => product.id === idProducto
    );
    productoAgregado.cantidad++;
    guardarStorage("carrito", carrito);
    mostrarCarrito(carrito, carritoContenedor);
  }
}

function guardarStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

function recuperarStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

// IMPRIMIR CARRITO //
const btnCarrito = document.getElementById('btn-carrito');
const carritoContenedor = document.getElementById('contenedor-compras');
btnCarrito.addEventListener('click', function() {
    mostrarCarrito(carrito, carritoContenedor);
});

function mostrarCarrito(miCarrito, contenedor) {
  let acumulador = `
    <div class="modal-header">
        <h5 class="modal-title">Mi Carrito</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
        </button>
    </div>`; 
  miCarrito.forEach(producto => {
    acumulador += `                
            <div class="modal-body">
                <img src="${producto.imagen}" width="50px">
                <p>Agregaste: ${producto.name}</p>
                <p>Precio: $${producto.price}</p>
                <p>Cantidad: ${producto.cantidad}</p>
            </div>
        `;
  });
  acumulador += `
  <div class="modal-footer">
      <button type="button" class="btn btn-primary">Comprar</button>
      <button type="reset" class="btn btn-secondary" id="btn-vaciar">Vaciar Carrito</button>
  </div>`;
  contenedor.innerHTML = acumulador;

  const btnVaciar = document.getElementById('btn-vaciar');
  btnVaciar.addEventListener('click', function(){      
    console.log('vaciando')
    localStorage.clear();
    carrito = [];
    contenedor.innerHTML = '';
  })
};
