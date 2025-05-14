let productoSeleccionado = " ";
let imagenHTML = " ";

function mostrarProducto(){
    var select = document.getElementById("producto")
    productoSeleccionado = select.value;

    var card = document.getElementById("card1");

    
    if (productoSeleccionado === "Camisa") {
        imagenHTML = `<img src="img/camisa.jpg" alt="">`;
    } else if (productoSeleccionado === "Pantalon"){
        imagenHTML = `<img src="img/pantalon.jpg" alt="">`;	
    } else if (productoSeleccionado === "Zapatos"){
        imagenHTML = `<img src="img/zapato.jpg" alt="">`;	
    } else if (productoSeleccionado === "Chaqueta"){
        imagenHTML = `<img src="img/chaqueta.jpg" alt="">`;
    }
    card.innerHTML = 
        `<div>
            <h2>Categoria de Productos</h2>
            ${imagenHTML}
            <h2 id="nombre">${productoSeleccionado}</h2>
            <label for="input1">Seleccione la Cantidad </label>
            <input type="number" id="input1">
            
            <button onclick="agregarCarrito()" type="button" class="btn btn-success boton">Agregar</button>
            
        </div>`
}

function agregarCarrito() {
    var nombre = document.getElementById("nombre").innerHTML;
    var cantidad = document.getElementById("input1").value;
    var carrito = document.getElementById("carrito1");
    carrito = carrito.innerHTML = 
        `<div>
            <h2>Se agrego ${cantidad} Unidades ${productoSeleccionado} al carrito</h2>
            <label for="input1">Cantidad Seleccionada: ${cantidad}</label>
            <button onclick="removeItem()" type="button" class="btn btn-danger boton">Eliminar</button>
        </div>`

}

