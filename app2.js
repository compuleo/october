// OCT 9 
// Un tienda vende monitores, teclados y ratones. Los precios se almacenan 
// en una estructura array conde cada elemento es un par producto - precio.
// Diseña una función que reciba como argumento el nombre de un 
// producto (minúscula) y devuelva su precio.

// Definir la funcion
function precio(art){   //Parametro
    let articulo = [['monitor', 650000],
                    ['teclado', 25000],
                    ['mouse', 10200]];
    precio = 0;
    sw = false;

    for(let ind=0; ind < articulo.length; ind++ ){
        if(articulo[ind][0] == art){
            precio = articulo[ind][1];
            sw=true;
            return precio;
        }else{
            sw=false
        }
    }
    if(sw == false){
        alert('Articulo no encontrado...')
        return precio;
        }
}

// Definir el script
let prod = prompt("Por favor digite el nombre del producto");
alert ("El " + prod + " vale $" + precio(prod));               //Argumento