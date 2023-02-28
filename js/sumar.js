document.getElementById("sumar").addEventListener("click", function(){
    console.log("este texto esta antes de todo");
    let numeroA = document.getElementById("numero1").value;
    console.log("El valor del numero A es: "+numeroA);

    let numeroB = document.getElementById("numero2").value;
    console.log("El valor del numero b es: "+numeroB);
        
    let resultado = sumar (parseInt(numeroA), parseINT(numeroB));
    console.log("El valor de la suma es: "+resultado);

    document.getElementById("resultado").innerHTML = resultado;
    document.getElementById("contenedorResultado").style.display = "block";
});

function sumar(a,b) {
    return a+b;
}