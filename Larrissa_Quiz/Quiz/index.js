
var responder = document.getElementsByClassName("btnresposta");

function btnresposta(){
var responder = prompt("Javascript é uma linguagem de...");
            if (responder == null || responder == "") {
            alert("Insira a resposta");
        }
            else (responder == "programação"); {
            alert ("resposta certa");
            setTimeout(function() {
                window.location = "/tela ganhou/index.html";
            }, 2000);
                    }
                }