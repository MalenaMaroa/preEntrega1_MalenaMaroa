function buscarElectrodomestico() {
    let seguirBuscando = true;
    while (seguirBuscando) {
        let categoria = prompt("¿Qué tipo de electrodoméstico querés comprar? Digita A para lavarropas, B para heladeras, C para microondas.");
        let electrodomestico;
        let marca;

        switch (categoria.toUpperCase()) {
            case 'A':
                electrodomestico = "lavarropas";
                marca = buscarMarca("lavarropas");
                break;
            case 'B':
                electrodomestico = "heladera";
                marca = buscarMarca("heladera");
                break;
            case 'C':
                electrodomestico = "microondas";
                marca = buscarMarca("microondas");
                break;
            default:
                alert("Opción no válida. Por favor elige A para lavarropas, B para heladeras o C para microondas.");
                continue;
        }

        alert("Tenemos " + electrodomestico + " de la marca " + marca);

        let comprar = confirm("¿Querés comprar este " + electrodomestico + " de marca " + marca + "?");
        if (comprar) {
            alert("Gracias por tu compra");
            seguirBuscando = false;
        } else {
            seguirBuscando = confirm("¿Querés seguir buscando otros electrodomésticos?");
        }
    }
}

function buscarMarca(tipoElectrodomestico) {
    let marcasDisponibles;
    switch (tipoElectrodomestico) {
        case "lavarropas":
            marcasDisponibles = ["Samsung", "LG", "Philips"];
            break;
        case "heladera":
            marcasDisponibles = ["Gafa", "Philips", "Samsung"];
            break;
        case "microondas":
            marcasDisponibles = ["Toshiba", "BGH", "Philips"];
            break;
        default:
            marcasDisponibles = [];
            break;
    }

    let marcaSeleccionada;
    let marcaEncontrada = false;

    while (!marcaEncontrada) {
        marcaSeleccionada = prompt("¿Qué marca de " + tipoElectrodomestico + " buscas? Tenemos " + marcasDisponibles.join(", ") + ".");

        if (!marcasDisponibles.includes(marcaSeleccionada)) {
            alert("Lo siento, no tenemos esa marca disponible para " + tipoElectrodomestico);
        } else {
            marcaEncontrada = true;
        }
    }

    return marcaSeleccionada;
}

function iniciarCompra() {
    alert("Bienvenidos a la tienda de electrodomésticos!");
    let consulta = confirm("¿Te puedo ayudar a buscar un electrodoméstico?");
    if (consulta === true) {
        buscarElectrodomestico();
    } else {
        alert("Gracias por visitar nuestra tienda de electrodomésticos. ¡Hasta luego!");
    }
}

iniciarCompra();