document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("autos").addEventListener("click", function() {
        localStorage.setItem("catID",101);
        window.location = "products.html"
    });
    document.getElementById("juguetes").addEventListener("click", function() {
        localStorage.setItem("catID", 102);
        window.location = "products.html"
    });
    document.getElementById("muebles").addEventListener("click", function() {
        localStorage.setItem("catID", 103);
        window.location = "products.html"
    });
    mostrarusuario()
});
function mostrarusuario(){
    let mostrar = document.getElementById("mostrarusuario")
    agregar = ``
    let mostrarusuario = localStorage.getItem("usuario")
    agregar=`
        <a class ="nav-link">`+mostrarusuario+`<a>
    `
    mostrar.innerHTML = agregar

}