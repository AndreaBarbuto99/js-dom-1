const button = document.getElementById("js-button");
let imageJs = document.getElementById("lamp-image");


button.addEventListener("click" , function() {
    if (button.innerHTML.includes("Accendi"))
    {
        imageJs.src = "./img/yellow_lamp.png";
        imageJs.alt = "lamp-on";
        button.innerHTML = "Spegni";
        
    }
    else 
    {
        imageJs.src = "./img/white_lamp.png";
        imageJs.alt = "lamp-off";
        button.innerHTML = "Accendi";
       
    }
})

