let link = document.getElementById("product")
let comment = document.getElementById("comment") 
let id = localStorage.getItem("id")
function mostrarproducto(){
    product = ``
        if(producto.id==id){
            product += `
            <div>
            <p>${producto.name}</p>
            <hr>
            <p>Precio</p>
            <p>${producto.cost}</p>
            <p>Descripcion</p>
            <p>${producto.description}</p>
            <p>Categoria</p>
            <p>${producto.category}</p>
            <p>Cantidad de vendidos<p>
            <p>${producto.soldCount}</p>
            <p>Imagenes Ilustrativas</p>
            </div>
            `
            for(let i = 0;i<producto.images.length;i++){
                product += `
                <img src = "${producto.images[i]}" heigth =" 250px"width="250px">`
            }
        }
        link.innerHTML += product
    }
    function mostrarcomentario(){
        let mostrar = `<p>Comentarios</p>`
        for(let i = 0;i<comentario.length;i++){
            if(comentario[i].score == 1){
                
            }
            
            mostrar += `
            <div id= "comentario">
            <p>${comentario[i].user} ${comentario[i].dateTime} ${comentario[i].score}</p>
            <p>${comentario[i].description}</p>
            </div>
            `
    }   mostrar +=`
        <h3>Comentar</h3>
        <h5>Tu opinion:</h5>
        <input></input>
        <h5>Tu puntuacion:</h5>
        <input type = "number"></input>
        <br>
        <button>Enviar</button>
    `
    comment.innerHTML = mostrar
    

}

document.addEventListener("DOMContentLoaded",function(){
    
    getJSONData(PRODUCT_INFO_URL+id+".json").then(function(resultObj){
        if (resultObj.status === "ok"){
            producto = resultObj.data
            mostrarproducto()
        }
    })
    getJSONData(PRODUCT_INFO_COMMENTS_URL+id+".json").then(function(resultObj){
        if(resultObj.status == "ok"){
            comentario = resultObj.data
            mostrarcomentario()
        }
    })
})