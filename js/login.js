let alerta = document.getElementById("alerta") 
let mail = document.getElementById("mail") 
let pass = document.getElementById("pass") 
let agregado = ""
let email = "@"
let uno = "m"
let dos = "o"
let tres = "c"
let cuatro = "."
function ingresar(){ //funcion de inicio de sesion
    
        let usuario = document.getElementById("user").value // variable que toma valor del campo email
        let contrasena = document.getElementById("contra").value // variable que toma valor del campo contraseña
        
    if((contrasena.length >0) && (usuario.length >0)){// if para ver si hay algo escrito en los campos
    
    for(let i = 0;i<usuario.length;i++){
        if((usuario[i]== email)&&(usuario[usuario.length-1] == uno) && (usuario[usuario.length-2]==dos)&&(usuario[usuario.length-3]==tres)&&(usuario[usuario.length-4]==cuatro)){
            entrar()
            localStorage.setItem("usuario",usuario);
        }
        if(usuario[i]!=email){
            agregado =`
            <p>Falta el "@"</p>
            `
            mail.innerHTML = agregado
        }
        
        if(usuario[i] == email){
            mail.innerHTML=""
        }
        if((usuario[usuario.length-1] != uno) && (usuario[usuario.length-2]!=dos)&&(usuario[usuario.length-3]!=tres)&&(usuario[usuario.length-4]!=cuatro)){
            agregado =`
            <p>El mail ingresado no es valido, falta el ".com"</p>
            
            `
            mail.innerHTML = agregado
        }
        
            pass.innerHTML = ""
        
    }
    
    
}


else{ // este else es por si no se escribe datos en los campos
    for(let i = 0;i<usuario.length;i++){
        if(usuario[i]== email){
            mail.innerHTML=""
        }
        
        if(usuario[i]!=email){
            agregado =`
            <p>Falta el "@"</p>
            `
            mail.innerHTML = agregado
        }
    }
    if(contrasena.length == 0){
        agregado = `
            <p>La contraseña no puede estar vacia</p>
        `
        pass.innerHTML = agregado
    }   
    
    
    if(usuario.length == 0){
        agregado=`
        <p>El email no puede estar vacio</p>
        `
        mail.innerHTML= agregado
    }
    if(contrasena.length >0){
        pass.innerHTML = ""
    }
    
}
}
function entrar(){
    window.location = "frontal.html"
}