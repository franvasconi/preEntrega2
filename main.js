const tienda = {
    nombre: "HypeClothes",
    direccion: "Av.Colon 5000",
    horario: "10:00 a 22:00 hs",
    
}
alert('Te doy la bienvenida a nuestra tienda' + " " + tienda.nombre + "." + " " + 'Nos ubicamos en:' +  " " + tienda.direccion + "." +  " " + 'Nuestro horario de atencion es:'+ " " + tienda.horario + ".");


alert("CATALOGO => Zapatillas: $15000, Remeras: $10000, Pantalones: $12000, Buzos: $10000");


let carrito = [];
let total = 0;

const productosDisponibles = [
    { nombre: "zapatillas", precio: 25000 },
    { nombre: "remeras", precio: 10000 },
    { nombre: "pantalones", precio: 12000 },
    { nombre: "buzos", precio: 15000 }
];


function mostrarProductosDisponibles() {
    console.log("Productos Disponibles:");
    productosDisponibles.forEach(producto => {
        console.log(`${producto.nombre}: $${producto.precio}`);
    });
}


function agregarProductoAlCarrito(producto, cantidad) {
    const productoEncontrado = productosDisponibles.find(p => p.nombre === producto);
    if (productoEncontrado) {
        const itemCarrito = carrito.find(item => item.producto === producto);
        if (itemCarrito) {
            itemCarrito.cantidad += cantidad;
        } else {
            carrito.push({ producto, cantidad });
        }
        console.log(`${cantidad} ${producto}(s) agregado(s) al carrito.`);
    } else {
        console.log("Producto no válido.");
    }
}


function calcularTotal() {
    total = 0;
    carrito.forEach(item => {
        const producto = productosDisponibles.find(p => p.nombre === item.producto);
        if (producto) {
            total += producto.precio * item.cantidad;
        }
    });
    return total;
}

function simuladorVentaRopa() {
    mostrarProductosDisponibles();
    while (true) {
        const producto = prompt("Ingrese el nombre del producto a agregar al carrito( PANTALONES, REMERAS, ZAPATILLAS, BUZOS) o escriba 'fin' para finalizar la compra):");
        if (producto === 'fin') {
            break;
        }
        const cantidad = parseInt(prompt(`Ingrese la cantidad de ${producto} a agregar:`));
        agregarProductoAlCarrito(producto.toLowerCase(), cantidad);
    }
    const compraTotal = calcularTotal();
    console.log("Productos en el carrito:");
    carrito.forEach(item => {
        console.log(`${item.producto}: ${item.cantidad} unidades`);
    });
    console.log(`Total a pagar: $${compraTotal}`);
    alert("Productos en el carrito:\n" + carrito.map(item => `${item.producto}: ${item.cantidad} unidades`).join('\n') + `\nTotal a pagar: $${compraTotal}`);

}
simuladorVentaRopa();




alert("Gracias por su compra, que disfrute el producto.");
