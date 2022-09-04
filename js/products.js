let contenedor = document.getElementById("algo") // guardamos en una variable el id que vamos a modificar
let preciomax = undefined;
let preciomin= undefined;
const ascendente_precio = "arriba";
const descendiente_precio= "abajo";
const cantidad_vendidos = "vendidos";
let currentSortCriteria = undefined;
let guardar = []
let categori = []
let id=[]
let variable = 0;
let valor = [];
let nombre =[]
let catnam = []
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
function mostrarproductscategory(){
    let local = localStorage.getItem("catID")
    
    for(let i = 0;i<categori.length;i++){
        if(local == categori[i].id){ 
        nombre.push(categori[i].name)
        id.push(categori[i].id)
        valor.push(i)
        catnam.push(categori[i].name)
        guardar[i]
        }
    }
}
function mostrarproductos(){
    console.log(guardar)
    sads = ""
    let mostrar = ""
    sads = `
    <span>${nombre}<span>
    `
    catn.innerHTML = sads
    catname = guardar.catName
    if(catname == catnam){
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
}


document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(Autos).then(function(resultObj){
        if (resultObj.status === "ok"){
            guardar = resultObj.data
            mostrarproductos()
        }
    getJSONData(CATEGORIES_URL).then(function(resultObj){
        if(resultObj.status ==="ok"){
            categori = resultObj.data
            mostrarproductscategory()
            mostrarproductos()
        }
    })
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
