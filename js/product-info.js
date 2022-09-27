let link = document.getElementById("product")
let comment = document.getElementById("comment") 
let relacion = document.getElementById("relacion")
let id = localStorage.getItem("id")
function mostrarproducto(){
    product = ``
    rel= ``
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
            rel += `<p>Productos relacionados</p>`
            for(let i = 0; i<producto.relatedProducts.length;i++){
            
                rel += `
            <div class = "borde">
                <img src ="${producto.relatedProducts[i].image}" heigth ="250px" width="250px""> 
                <p>${producto.relatedProducts[i].name}</p>
                </div>
            `
            
            }
    }
        relacion.innerHTML += rel
        link.innerHTML += product
        
    }

function mostrarcomentario(){
        let mostrar = `<p>Comentarios</p>`
        for(let i = 0;i<comentario.length;i++){
            if(comentario[i].score == 1){
                algo =`
        
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star "></span>
        <span class="fa fa-star "></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span>
        
        `}
        if(comentario[i].score == 2){
            algo =`
    
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star "></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
    
        `
        }
        if(comentario[i].score == 3){
            algo =`
    
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
    
        `
        }
        if(comentario[i].score == 4){
            algo =`
    
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
    
        `
        }
        if(comentario[i].score == 5){
            algo =`
    
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            
        `
    }
           
            mostrar += `
            
            <div id= "comentario">
            <p id = "estrella">${comentario[i].user} ${comentario[i].dateTime}${algo}<p> 
            <p>${comentario[i].description}</p>
            </div>
            `
   
            comment.innerHTML = mostrar
    }   

    mostrar +=`
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
            console.log(producto)
            
        }
    })
    getJSONData(PRODUCT_INFO_COMMENTS_URL+id+".json").then(function(resultObj){
        if(resultObj.status == "ok"){
            comentario = resultObj.data
            mostrarcomentario()
            console.log(comentario)
        }
    })
    
})