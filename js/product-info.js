let link = document.getElementById("product")
function mostrarproducto(){
    id = localStorage.getItem("id")
    product = ``
    for(let i = 0; i<producto.products.length;i++){
        arreglo = producto.products[i]
        if(arreglo.id==id){
            product += `
            <div>
            <p>${arreglo.name}</p>
            <hr>
            <p>Precio</p>
            <p>${arreglo.cost}</p>
            <p>Descripcion</p>
            <p>${arreglo.description}</p>
            <p>Categoria</p>
            <p>${producto.catName}</p>
            <p>Cantidad de vendidos<p>
            <p>${arreglo.soldCount}</p>
            <p>Imagenes Ilustrativas</p>
            </div>
            `
        }
        link.innerHTML= product
    }
}


document.addEventListener("DOMContentLoaded",function(){
    let id= localStorage.getItem("catID")
    getJSONData(productos+id+".json").then(function(resultObj){
        if (resultObj.status === "ok"){
            producto = resultObj.data
            producto.products[0].id
            mostrarproducto()
        }
    });
})