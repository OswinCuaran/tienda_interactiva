let productoSeleccionado = "";

function mostrarProducto(){
    var select = document.getElementById("producto")
    productoSeleccionado = select.value;

    var card = document.getElementById("card1");
    card.innerHTML = 
        `<div>
            <h2>Categoria de Productos</h2>
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

