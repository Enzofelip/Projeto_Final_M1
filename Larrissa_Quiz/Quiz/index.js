
//var responder = document.getElementsByClassName("btnresposta");

//function btnresposta(){
//var responder = prompt("Javascript é uma linguagem de...");
            //if (responder == null || responder == "") {
           // alert("Insira a resposta");
        //}
            //else (responder == "programação"); {
           //alert ("resposta certa");
            //setTimeout(function() {
                //window.location = "/tela ganhou/index.html";
            //}, 2000);
                    //}
                //}

var resposta = "programação";

function btnresposta(){
do {
    responder = prompt("Javascript é uma linguagem de...").toUpperCase();
    if (!resposta.includes(resposta)) {
        alert("Digite uma alternativa correta.");
    }
} while {
    !resposta.includes(resposta)};

if (resposta === resposta[0]) {
    alert("Você ganhou!");
    setTimeout(function() {
        window.location = "../tela ganhou/tela ganhou.gif";
    }, 2000);
} else {
    alert("Você perdeu!");
    setTimeout(function() {
        window.location = "../telas/gameOver.html";
    }, 2000);
}
}
                