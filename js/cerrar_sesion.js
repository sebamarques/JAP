let usuario = document.getElementById("borrar_usuario")
usuario.addEventListener("click",function(){

    let mostrar = document.getElementById("mostrarusuario")
    
    function borrar_usuario(){
        
        localStorage.clear()
        mostrar.innerHTML = " "
    }
    borrar_usuario
})