var resposta = "A";
    
function verificar()

         {
            var pergunta = prompt("Digite a letra da resposta");  
            if (pergunta !== null) {
                pergunta = pergunta.toUpperCase(); // Converter a resposta para maiúsculas para evitar problemas com letras minúsculas ou maiúsculas.

                if (pergunta === resposta) {
                    alert("Você ganhou!");
                    setTimeout(function() {
                        window.location = "/telas/round3.html";
                      }, 2000);
                } else {
                    alert("Você perdeu!");
                    setTimeout(function() {
                        window.location = "../telas/gameOver.html";
                      }, 2000);

                }
                
            }
        }