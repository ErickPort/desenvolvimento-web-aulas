//eventos - propriedades

let botao1 = document.getElementById("botao1");

//manipuladores
botao1.onclick = function(){
    alert("Ação 1: Evento");
};

botao1.onclick = function(){ //sobrescrever o primeiro evento
    alert("Ação 2: Evento");
}


let botao2 = document.getElementById("botao2");
botao2.onmouseover = function(){
    botao2.style.backgroundColor = "red";
    //alert("Teste");
};

botao2.onmouseout = function(){
    botao2.style.backgroundColor = "";
};

botao2.ondblclick = function(){
    botao2.textContent = "Duplo Clique";
};

//evento = teclado
let campoEntrada = document.getElementById("campoEntrada");
let resultado = document.getElementById("resultado");
campoEntrada.onkeydown = function(event){
    if(event.key == "Enter"){
        console.log("pressionou uma tecla");
        resultado.innerHTML = campoEntrada.value;
        campoEntrada.value = "";
    }
};

//addEventListener
let botao3 = document.getElementById("botao3");
let mensagem1 = document.getElementById("mensagem1");
let mensagem2 = document.getElementById("mensagem2");
botao3.addEventListener("click", function(){
    mensagem1.textContent = "primeiro evento";
});

botao3.addEventListener("click", function(){
    mensagem2.textContent = "segundo evento";
});

//arrastar o elemento
let caixa = document.getElementById("caixa");
let area = document.getElementById("area");

caixa.addEventListener("dragstart", ()=>{
    console.log("arrastando o objeto");
});

area.addEventListener("dragover", (e)=>{
    e.preventDefault();
});

area.addEventListener("drop", ()=>{
    area.appendChild(caixa);
});
