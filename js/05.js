//Objetos

const producto = {
    nombreProducto: "Monitor de 20 pulgadas",
    precio: 300,
    disponibilidad: true
}



//console.log(producto.nombreProducto);

//console.log(producto.precio);

// agregar elementos al objeto

producto.imagen = "imagen.jpg"

//Eliminar un componente de un objeto

delete producto.disponibilidad;

console.log(producto);

