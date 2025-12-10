const button = document.getElementById("js-button");


button.addEventListener("click" , function() {

    let imageJs = document.getElementById("lamp-image");
    imageJs.src = "./img/yellow_lamp.png";
    imageJs.alt = "lamp-on";
})