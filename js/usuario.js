

document.addEventListener("DOMContentLoaded",function(){
    
    let mostrar = document.getElementById("mostrarusuario")
    
    function mostrarusuario(){
        agregar = ``
        let mostrarusuario = localStorage.getItem("usuario")
        
        agregar=`
        <a class ="nav-link">`+mostrarusuario+`<a>`
        
        mostrar.innerHTML = agregar
    }
    mostrarusuario()
})