document.addEventListener("DOMContentLoaded", function(){
    
    document.getElementById("autos").addEventListener("click", function() {
        autos = localStorage.setItem("catID",101);
        window.location = "products.html" 
        
    });
    document.getElementById("juguetes").addEventListener("click", function() {
        juguetes = localStorage.setItem("catID", 102);
        window.location = "products.html" 
        
    });
    document.getElementById("muebles").addEventListener("click", function() {
        muebles = localStorage.setItem("catID", 103);
        window.location = "products.html"
        
    });
    
    document.getElementById("herramientas").addEventListener("click", function() {
        muebles = localStorage.setItem("catID", 104);
        window.location = "products.html"
        
    });
    
    document.getElementById("computadoras").addEventListener("click", function() {
        muebles = localStorage.setItem("catID", 105);
        window.location = "products.html"
        
    });
    
    document.getElementById("vestimenta").addEventListener("click", function() {
        muebles = localStorage.setItem("catID", 106);
        window.location = "products.html"
        
    });
    
    document.getElementById("electrodomesticos").addEventListener("click", function() {
        muebles = localStorage.setItem("catID", 107);
        window.location = "products.html"
        
    });
    
    document.getElementById("deporte").addEventListener("click", function() {
        muebles = localStorage.setItem("catID", 108);
        window.location = "products.html"
        
    });
    
    document.getElementById("celulares").addEventListener("click", function() {
        muebles = localStorage.setItem("catID", 109);
        window.location = "products.html"
    });
});


