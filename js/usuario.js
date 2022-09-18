

document.addEventListener("DOMContentLoaded",function(){
    
    let mostrar = document.getElementById("mostrarusuario")
    
    function mostrarusuario(){
        agregar = ``
        let mostrarusuario = localStorage.getItem("usuario")
        if(mostrarusuario==null){
            window.location = "index.html"
            
        }
        agregar=`
        <a class ="nav-link">`+mostrarusuario+`<a>`
        
        mostrar.innerHTML = agregar
    }
    mostrarusuario()
})