var respostas = ["A", "B", "C", "D"];

function verificar() {
    var respostaUsuario;

    do {
        respostaUsuario = prompt("Digite a letra da resposta").toUpperCase();
        if (!respostas.includes(respostaUsuario)) {
            alert("Digite uma alternativa correta.");
        }
    } while (!respostas.includes(respostaUsuario));

    if (respostaUsuario === respostas[2]) {
        alert("Você ganhou!");
        setTimeout(function() {
            window.location = "../telas/nivelHard.html";
        }, 2000);
    } else {
        alert("Você perdeu!");
        setTimeout(function() {
            window.location = "../telas/gameOver.html";
        }, 2000);
    }
}