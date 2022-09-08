

document.addEventListener("DOMContentLoaded",function(){
    
    let mostrar = document.getElementById("mostrarusuario")
    
    function mostrarusuario(){
        agregar = ``
        let mostrarusuario = localStorage.getItem("usuario")
        if(mostrarusuario==null){
            window.location = "index.html"
            
        }
        if(mostrarusuario != null){
            window.location = "frontal.html"
        }
        agregar=`
        <a class ="nav-link">`+mostrarusuario+`<a>`
        
        mostrar.innerHTML = agregar
    }
    mostrarusuario()
})