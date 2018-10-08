function calculaIMC() {


    var massa, altura, result;

    massa = parseFloat(document.getElementById("pesoInput").value);

    if (isNaN(massa)){
        alert("Peso inválido.");
    }

    altura = parseFloat(document.getElementById("alturaInput").value);

    if (isNaN(altura)){
        alert("Altura inválida");
    }
    result = massa / (altura * altura);

    document.getElementById("resultado").innerHTML = "O seu IMC é: " + result;
    if (result < 18 || result > 25 || isNaN(result)){
        document.getElementById("resultado").style.backgroundColor = "red";
    }
    else {
        document.getElementById("resultado").style.backgroundColor = "green";
    }

}