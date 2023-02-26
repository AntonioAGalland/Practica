
/** 
document.getElementById("boton").onclick=function () {
    console.log("Capturamos el evento click");
    document.getElementById("demo").innerHTML = "Estamos probando nuestro pimer evento";
} 

document.addEventListener ("click", function() {
    console.log("hola mundo desde eventlistenner");
    document.getElementById("demo").innerHTML = "Estamos probando nuestro pimer evento"; 
}); */

document.getElementById("boton").addEventListener ("click", function() {
    console.log("hola mundo desde eventlistenner");
    document.getElementById("demo").innerHTML = "Estamos probando nuestro pimer evento"; 
}); 

document.getElementById("boton_color").addEventListener ("click", function() {
        document.body.style.backgroundColor= "#FF0000";
});

document.getElementById("boton_default").addEventListener ("click", function() {
    document.body.style.backgroundColor= "blue";
});

document.getElementById("boton_ocultar").addEventListener ("click", function() {
    document.getElementById('demo').style.display='none';
});

const collection = document.getElementsByClassName("prueba");
for (let i = 0; i < collection.length; i++) {
    collection[i].style.backgroundColor = "green";
} 