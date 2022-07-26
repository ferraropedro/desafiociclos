// Primera entrega: Simulador de venta de bebidas.


const sumarIva = (precio) => {return precio + (precio * 0.35)}
const mostrarMensaje = (mensaje) => { alert(mensaje) }


let plataforma = parseInt(prompt("Ingrese el numero correspondiente para ver el catálogo \n 1)bebida sin alcohol. \n2)bebida alcoholica." ))

main ();
function main (){
    if (plataforma == 1) {
        BebidaSinAlcohol ();
        BebidaSinAlcohol ();
    }

    else if (plataforma == 2){
        BebidaAlcoholica ();
        BebidaAlcoholica ();
    }

    else 
    console.log ("ingrese un número válido.")
    
}

function BebidaSinAlcohol () {
    console.log ("\n1)agua. \n 2)sprite. \n 3)fanta. \n 4)cocacola.")
}

function BebidaAlcoholica () {  
    console.log ("\n1)vodka. \n 2)champagne. \n 3)vino tinto. \n 4)fernet.")
} 


//Consultar precio bebida sin alcohol.


precioBebidas = 0;


function BebidaSinAlcohol () {

 let preciobebidasa = prompt("Elija el numero  correspondiente al su bebida para saber su precio \n1)agua. \n 2)sprite. \n 3)fanta. \n 4)cocacola. \nPresione 'EXIT' para salir.")

    if  (preciobebidasa == 1){
    
                precioBebidas = sumarIva (100)
    
                mostrarMensaje("agua tiene un costo final de " +precioBebidas);
                cantidadPorUnidad();
                

    }
    else if (preciobebidasa == 2){
                 precioBebidas = sumarIva (250)
    
                 mostrarMensaje ("sprite tiene un costo final de " +precioBebidas);
                 cantidadPorUnidad();
    }

    else if (preciobebidasa == 3){
        
                precioBebidas = sumarIva (250)

                mostrarMensaje ("fanta tiene un costo final de " +precioBebidas);
                cantidadPorUnidad();
    }
        
    else if (preciobebidasa == 4){
        
                precioBebidas = sumarIva (300)
                mostrarMensaje ("cocacola tiene un costo final de " +precioBebidas)
                cantidadPorUnidad();
    }

    else if (preciobebidasas == "EXIT" || preciobebidasas == "exit") {
            return false;
    }


    else {
        mostrarMensaje ("No tenemos esa bebida")
    }

    
    BebidaSinAlcohol ();    
}

//Consultar precios Xbox 


function BebidaAlcoholica () {

    let precioBebidaA = prompt("Elija el numero  correspondiente a la bebida para saber su precio \n1)vodka. \n 2)champagne. \n 3)vino tinto. \n 4)fernet. \nPresione 'EXIT' para salir.")
   
       if  (precioBebidaA == 1){
       
                   precioBebidas = sumarIva (1800)
       
                   mostrarMensaje("vodka tiene un costo final de " +precioBebidas);
   
                   cantidadPorUnidad();
                   
   
       }
       else if (precioBebidaA == 2){
           precioBebidas = sumarIva (2000)
       
           mostrarMensaje ("champagne tiene un costo final de " +precioBebidas);
           cantidadPorUnidad();
       }
   
       else if (precioBebidaA == 3){
           
               precioBebidas = sumarIva (850)
   
               mostrarMensaje ("vino tinto tiene un costo final de " +precioBebidas);
               cantidadPorUnidad();
       }
           
       else if (precioBebidaA == 4){
           
               precioBebidas = sumarIva (1800)
               mostrarMensaje ("fernet tiene un costo final de " +precioBebidas)
               cantidadPorUnidad();
       }
   
       else if (precioBebidaA == "EXIT" || precioBebidaA == "exit") {
           return false;
       }
   
   
       else {
           mostrarMensaje ("No tenemos esa bebida")
       }
       
       BebidaAlcoholica ();  
   
    }
   

//Calcular costo por cantidad de bebidas.

function cantidadPorUnidad () {

    let Cantidad = parseInt(prompt("Ingresa la cantidad de bebidas que deseas. Debes repetir la acción por cada una que selecciones."));
    
    for (i = 1; i <= Cantidad; i++) {     
        let resultado = precioBebidas * i ;

        console.log(precioBebidas, " X "+ i +" = "+ resultado);
    }
}