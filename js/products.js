let contenedor = document.getElementById("algo") // guardamos en una variable el id que vamos a modificar


function mostrarproductos(){
    let mostrar = ""
    console.log(guardar.catName)
    for(let i = 0;i<guardar.products.length;i++){
        //comparamos i con la longitud de productos (que es un array) que esta dentro de 
        // guardar(que es otro array)
        arreglo = guardar.products[i] 
        console.log(arreglo)
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
    
    contenedor.innerHTML += mostrar
}

document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(Autos).then(function(resultObj){
        if (resultObj.status === "ok"){
            guardar = resultObj.data
            mostrarproductos()
            
        }
    });
});