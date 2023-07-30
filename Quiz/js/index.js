
const progress  = document.getElementById("progress");
const Input1 = document.getElementById("text1");
const Input2 = document.getElementById("text2");
const Input3 = document.getElementById("text3");
const Input4 = document.getElementById("text4");
const Menssage = document.getElementById("message");
const Menssage2 = document.getElementById("message2");
const Menssage3 = document.getElementById("message3");
const Menssage4 = document.getElementById("message4");
const Image = document.getElementById("image")


// Função de click dos cards para seecionar eles
// quando eles forem clicado vao ser selecionado ficando laranja e crescendo com o metodo scale do css
// O uso do if foi para checar se os cards  estao checados se estiver eu mudo a cor e o tamanho, mais ele nao volta pra posicao inicial depois
// Entao coloquei um else para voltar ao padrao normal dos cards

const message = () =>{
    console.log("Certo");

    if(Input1.checked){
        Menssage.style.backgroundColor = "#fcca46";
        Menssage.style.transform = "scale(1.1)";
    }else{
        Menssage.style.backgroundColor = "rgb(255, 255, 255)";
        Menssage.style.transform = "scale(1)";
    }

    if(Input2.checked){
        Menssage2.style.backgroundColor = "#fcca46";
        Menssage2.style.transform = "scale(1.1)";
    }else{
        Menssage2.style.backgroundColor = "rgb(255, 255, 255)";
        Menssage2.style.transform = "scale(1)";
    }

    if(Input3.checked){
        Menssage3.style.backgroundColor = "#fcca46";
        Menssage3.style.transform = "scale(1.1)";
    }else{
        Menssage3.style.backgroundColor = "rgb(255, 255, 255)";
        Menssage3.style.transform = "scale(1)";
    }

    if(Input4.checked){
        Menssage4.style.backgroundColor = "#fcca46";
        Menssage4.style.transform = "scale(1.1)";
    }else{
        Menssage4.style.backgroundColor = "rgb(255, 255, 255)";
        Menssage4.style.transform = "scale(1)";
    }
}

// Essa funcao é para fazer a checagem da resposta certa
//O primeiro if é para checar a resposta certa entao se quando eu clicar no notao verificar se o INput1 estiver checado ai vai aumentar a barrinha e vai aparecer um alert dizendo que voce acertou

//Assim como usamor o atributo value para pegar o valor do intput usamos o checked para ver se ele esta checado ou nao

//o if else esta realizando a checagem das respostas erradas entao eu coloquei o operador logico || que so precisa de 1 resposta verdadeira pra ocorrer a funcao
// Entao se uma das variaveis que esta dentro do else if estiver checado quando eu clicar no botao verificar vai exibir a menssagem de erro no alert
let images = ["./imagens/Homem-Aranha.jpeg","./imagens/fundo2.jpg", "./imagens/labra1.jpg", "./imagens/labra2.jpg"]
let validation = false;
function certo(){
    if(Input1.checked){
        alert("Voê acertou");
        progress.value = progress.value + 25;
       
    }else if(Input2.checked || Input3.checked || Input4.checked){
        progress.value =  0;
        alert("Resposta errada");
        Image.src = images[0]
    }
}