
const progress  = document.getElementById("progress");
const Input1 = document.getElementById("text1");
const Input2 = document.getElementById("text2");
const Input3 = document.getElementById("text3");
const Input4 = document.getElementById("text4");
const textQuestao = document.getElementById("textPergunta");

function certo(){
    if(Input1.checked){
        alert("Você acertou");
        window.location.href = "/telas/round2.html"     
    }else if(Input2.checked || Input3.checked || Input4.checked){
         alert("Resposta errada");
    }   
}


