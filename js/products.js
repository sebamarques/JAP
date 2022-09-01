let contenedor = document.getElementById("algo") // guardamos en una variable el id que vamos a modificar
let preciomax = undefined;
let preciomin= undefined;
const ascendente_precio = "arriba";
const descendiente_precio= "abajo";
const cantidad_vendidos = "vendidos";
let currentSortCriteria = undefined;
let guardar = []
let categ=[]
let lista = []

function sortCategories(criteria, array){
    array = guardar.products
    
    let result = [];
    if (criteria === ascendente_precio){
        result = array.sort(function(a, b) {
            aprecio = parseInt(a.cost)
            bprecio = parseInt(b.cost)
            
            console.log(aprecio)
            console.log(bprecio)
            console.log("algo")
            if ( aprecio < bprecio ){ return -1; }
            if ( aprecio > bprecio ){ return 1; }
            return 0;
        });
    }else if (criteria === descendiente_precio){
        result = array.sort(function(a, b) 
        {   aprecio = parseInt(a.cost)
            bprecio = parseInt(b.cost)
            
            console.log(aprecio)
            console.log(bprecio)
            console.log("algo")
            if ( aprecio > bprecio ){ return -1; }
            if ( aprecio < bprecio ){ return 1; }
            return 0;
        });
    }else if (criteria === cantidad_vendidos){
        result = array.sort(function(a, b) {
            let aCount = parseInt(a.soldCount);
            let bCount = parseInt(b.soldCount);
            console.log(aCount)
            console.log(bCount)
            console.log("algo")
            if ( aCount > bCount ){ return -1; }
            if ( aCount < bCount ){ return 1; }
            return 0;
        });
    }
   
    mostrarproductos()
    return result;
}

function mostrarproductos(){
    
    
    let mostrar = ""
    let algo = guardar.catID
    let loca = localStorage.getItem("catID")
    console.log(algo)
    if(algo == loca){
    for(let i = 0; i < guardar.products.length;i++){
        //comparamos i con la longitud de productos (que es un array) que esta dentro de 
        // guardar(que es otro array)        
        arreglo = guardar.products[i] 
        if(((preciomin == undefined) || (preciomin != undefined && arreglo.cost >= preciomin))
        &&((preciomax == undefined) || (preciomax != undefined && arreglo.cost <= preciomax)))
        { 
        mostrar += `
        <div id = "carros">
            <img id="cars"src=${arreglo.image} width ="180px">
            <p style="text-align:end;">${arreglo.soldCount} vendidos</p>
            <div id="alladoimagen">
            <p>${arreglo.name} - ${arreglo.currency}${arreglo.cost}</p>
            </div>
            
            <p style="text-align:center"">${arreglo.description}</p>
            
        </div>
        `
    // arriba lo que hacemos es agregar contenido
        }
    }
    contenedor.innerHTML = mostrar
    }
    else{
        alert("estamos en desarollo vuelva pronto") 
    }
}

document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(Autos).then(function(resultObj){
        if (resultObj.status === "ok"){
            guardar = resultObj.data
            mostrarproductos()
        }
        
    });
    document.getElementById("precioascen").addEventListener("click",function(){
        sortCategories(ascendente_precio)
    });
    document.getElementById("preciodescen").addEventListener("click",function(){
        sortCategories(descendiente_precio)
    });
    document.getElementById("sortRel").addEventListener("click",function(){
        sortCategories(cantidad_vendidos)
        
    })
    document.getElementById("limpiar").addEventListener("click",function(){
        document.getElementById("rangopreciomin").value = ""
        document.getElementById("rangopreciomax").value = ""
        
        mostrarproductos()
        
    });
    document.getElementById("filtrarprecio").addEventListener("click", function(){
        //Obtengo el mínimo y máximo de los intervalos para filtrar por precio
        preciomin = document.getElementById("rangopreciomin").value;
        preciomax = document.getElementById("rangopreciomax").value;
        
        
        if ((preciomin != undefined) && (preciomin != "") && (parseInt(preciomin)) >= 0){
            preciomin = parseInt(preciomin);
            
        }
        else{
            preciomin = undefined;
        }
        
        if ((preciomax != undefined) && (preciomax != "") && (parseInt(preciomax)) >= 0){
            preciomax = parseInt(preciomax);
        }
        else{
            preciomax = undefined;
        }
        
        mostrarproductos();
    });
    
});