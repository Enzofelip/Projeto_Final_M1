var resposta = "programação";

function btnresposta()

         {
            var pergunta = prompt("Digite a resposta");  
     // Converter a resposta para maiúsculas para evitar problemas com letras minúsculas ou maiúsculas.

                if (pergunta === resposta) {
                    alert("Você ganhou!");
                    setTimeout(function() {
                        window.location = "/tela ganhou/index.html";
                      }, 2000);
                } else {
                    alert("Você perdeu!");
                    setTimeout(function() {
                        window.location = "../telas/gameOver.html";
                      }, 2000);

                }

            }
         
                