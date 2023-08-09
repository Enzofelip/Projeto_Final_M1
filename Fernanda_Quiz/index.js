function responda(){

  var respostas = ["HTML", "CSS", "JAVASCRIPT"]

  let respo1 = prompt("Digite sua 1º Resposta");
  let respo2 = prompt("Digite sua 2º Resposta");
  let respo3 = prompt("Digite sua 3º Resposta");


  document.getElementById('resultado').innerHTML = "Resposta digitada: " +respo1.toUpperCase() + ", "+ respo2+ ", "+respo3;
  
    if(respostas[0] == respo1.toUpperCase() && respostas[1] == respo2.toUpperCase() && respostas[2] == respo3.toUpperCase()){
   
      alert("Você acertou!");
      
      
      // Abre a página "nova.html" depois de 5 segundos
      setTimeout(function() {
        window.location = "/telas/round3.html";
      }, 2000);
  } else{
      alert("Errado!");
      document.getElementById('resultado').innerHTML = "Resposta errada! O certo seria: HTML, CSS e JavaScript";
      setTimeout(function() {
        window.location = "../telas/gameOver.html";
      }, 2000);      
          
    }
}


