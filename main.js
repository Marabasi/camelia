alert('Bienvenidos a Camelia');

const productos = [
    { nombre: 'velas de colores', precio: 50, id: 1, cantidad: 0 },
    { nombre: 'velas de miel', precio: 65, id: 2, cantidad: 0 },
    { nombre: 'velas para hornitos', precio: 20, id: 3, cantidad: 0 },
    { nombre: 'inciensos', precio: 200, id: 4, cantidad: 0 },
    { nombre: 'perlas', precio: 150, id: 5, cantidad: 0 },
    { nombre: 'resinas', precio: 125, id: 6, cantidad: 0 },
    { nombre: 'palo santo', precio: 50, id: 7, cantidad: 0 },
    { nombre: 'aceites esenciales', precio: 350, id: 8, cantidad: 0 },
    { nombre: 'carbón', precio: 100, id: 9, cantidad: 0 },
    { nombre: 'hornitos', precio: 230, id: 10, cantidad: 0 },
    { nombre: 'elefantes', precio: 400, id: 11, cantidad: 0 },
    { nombre: 'budas', precio: 450, id: 12, cantidad: 0 }
];

const carrito = [];

const comprar = () => {
    const productosPorOrden = confirm('¿Querés ordenar los productos de menor a mayor?');
       if (productosPorOrden) {
        ordenarMenorMayor();
    } else {
        ordenarMayorMenor();
    }
}

const ordenarMenorMayor = () => {
    productos.sort((a,b) => a.precio - b.precio);
    mostrarProductos();
}

const ordenarMayorMenor = () => {
    productos.sort((a,b) => b.precio - a.precio);
    mostrarProductos();
}

const mostrarProductos = () => {
    const listaProductos = productos.map(producto => {
        return '- '+producto.nombre+' $'+producto.precio
    });

    alert('Lista de precios:' + '\n\n'+listaProductos.join('\n'));
    comprarProductos(listaProductos)
}

const comprarProductos = (listaProductos) => {
    let productoNombre = '';
    let productoCantidad = 0;
    let seguirComprando = false;

    do {
        productoNombre = prompt('¿Qué producto deseas comprar?'+'\n\n' + listaProductos.join('\n'));
        productoCantidad = parseInt(prompt('¿Cuántos querés comprar?'));

        const encontrado = productos.some(producto => producto.nombre.toLowerCase() === productoNombre.toLowerCase());


        if (encontrado) {
            const producto = productos.find(producto => producto.nombre.toLowerCase() === productoNombre.toLowerCase());
            agregarProductoCarrito(producto, productoCantidad);
        } else {
            alert('El producto no se encuentra en el catálogo.')
        }

        seguirComprando = confirm('¿Desea seguir comprando?');
    } while (seguirComprando);

    const totalCompra = calcularTotalCompra();
    alert(`El total de tu compra es: $${totalCompra}`);
    confirmarCompra();
}

const agregarProductoCarrito = (producto, productoCantidad) => {
    const productoId = producto.id;

    const productoRepetido = carrito.find(item => item.id === productoId);
    if (!productoRepetido){
        producto.cantidad += productoCantidad;
        carrito.push(producto);
    } else {
        productoRepetido.cantidad += productoCantidad;
    }
    console.log(carrito);
    console.log(productoRepetido);
}

const calcularTotalCompra = () => {
    let total = 0;
    carrito.forEach(item => {
        total += item.precio * item.cantidad;
    });
    return total;
}

const confirmarCompra = () => {
    const listaCarrito = carrito.map(producto => {
        return '- '+ producto.nombre +' | Cantidad: '+ producto.cantidad;
    });
    const confirmarCompra = confirm('Carrito:'
    +'\n\n'+listaCarrito.join('\n')
    +'\n\nPara continuar presione "Aceptar" o "Cancelar" para eliminar productos del carrito');

    if (confirmarCompra) {
        alert('Su compra ha sido relizada con éxito!')
    } else{
        const productoAEliminar = prompt('Ingrese el nombre del producto a eliminar:');
        eliminarProductoCarrito(productoAEliminar);
    }
}

const eliminarProductoCarrito = (productoAEliminar) => {
    carrito.forEach((producto, index) => {
        if (producto.nombre === productoAEliminar) {
            if (producto.cantidad > 1) {
                producto.cantidad--;
            } else {
            carrito.splice(index, 1)
            }

        }
    })
    confirmarCompra();
}

comprar();

    let subtotal = 0;
    let seguirComprando = true;

    // DOM***
    subtitulo-info[0].innerHTML = "<a href='#'>Haz clik aquí</a>.";
    parrafos[2].remove();