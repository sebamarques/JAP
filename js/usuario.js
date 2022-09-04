

document.addEventListener("DOMContentLoaded",function(){
    
    let mostrar = document.getElementById("mostrarusuario")
    
    function mostrarusuario(){
        agregar = ``
        let mostrarusuario = localStorage.getItem("usuario")
        if(mostrarusuario==null){
            window.location = "index.html"
            alert("ingresar nuevamente usuario")
        }
        agregar=`
        <a class ="nav-link">`+mostrarusuario+`<a>`
        
        mostrar.innerHTML = agregar
    }
    mostrarusuario()
})