let contenedor = document.getElementById("algo") // guardamos en una variable el id que vamos a modificar
let preciomax = undefined;
let preciomin= undefined;
const ascendente_precio = "arriba";
const descendiente_precio= "abajo";
const cantidad_vendidos = "vendidos";
let currentSortCriteria = undefined;
let guardar = []
let id_producto = []
let catn = document.getElementById("catn")

function sortCategories(criteria, array){
    array = guardar.products
    
    let result = [];
    if (criteria === ascendente_precio){
        result = array.sort(function(a, b) {
            aprecio = parseInt(a.cost)
            bprecio = parseInt(b.cost)
            return aprecio - bprecio
        });
    }else if (criteria === descendiente_precio){
        result = array.sort(function(a, b) 
        {   aprecio = parseInt(a.cost)
            bprecio = parseInt(b.cost)
           return bprecio - aprecio
        });
    }else if (criteria === cantidad_vendidos){
        result = array.sort(function(a, b) {
            let aCount = parseInt(a.soldCount);
            let bCount = parseInt(b.soldCount);
            return bCount - aCount
        });
    }
   
    mostrarproductos()
    return result;
}
function ponerid(id){
    localStorage.setItem("id",id)
    window.location = "product-info.html"
}
function mostrarproductos(){
   
   let catname = guardar.catName
   let mostrar = ""
    let prod = ""
    prod = `
    <span>${catname}<span>
    `
    catn.innerHTML = prod
    
    for(let i = 0; i < guardar.products.length;i++){
        //comparamos i con la longitud de productos (que es un array) que esta dentro de 
        // guardar(que es otro array)        
        arreglo = guardar.products[i] 
        id_producto.push(guardar.products[i].id)
        if(((preciomin == undefined) || (preciomin != undefined && arreglo.cost >= preciomin))
        &&((preciomax == undefined) || (preciomax != undefined && arreglo.cost <= preciomax)))
        { 
        mostrar += `
        <div onclick = "ponerid(${arreglo.id})">
        <div id = "carros">
            <img id="cars"src=${arreglo.image} width ="180px">
            <p style="text-align:end;">${arreglo.soldCount} vendidos</p>
            <div id="alladoimagen">
            <p>${arreglo.name} - ${arreglo.currency}${arreglo.cost}</p>
            </div>
            <p style="text-align:center"">${arreglo.description}</p>
        </div>
       </div>
        `
        contenedor.innerHTML = mostrar
        
        // arriba lo que hacemos es agregar contenido
}
    }
        }

document.addEventListener("DOMContentLoaded", function(e){
    let id= localStorage.getItem("catID")
    getJSONData(productos+id+".json").then(function(resultObj){
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
        preciomax = undefined;
        preciomin= undefined;
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
