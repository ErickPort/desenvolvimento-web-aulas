//buscar o elemento html
//buscamos pelo ID
let meuElemento = document.getElementById("paragrafo");
console.log(meuElemento);
console.log(meuElemento.textContent);

//buscando o elemento pela calsse
let paragrafo1 = document.getElementsByClassName("paragrafo");
console.log(paragrafo1);
console.log(paragrafo1.textContent);

//for para imprimir todos os elementos da classe Paragrafo

for (let i = 0;i<paragrafo1.length; i++) {
    console.log(paragrafo1[i].textContent)   
}

//buscamos o elemento pela tag

let paragrafo2 = document.getElementsByTagName("p");
console.log(paragrafo2);

//criar um elemento html via JavaScript

let meuElementoHTML = document.getElementById("elemento");
let elementoHTML = document.createElement("p");
elementoHTML.textContent = "Paragrafo via JavaScript"
meuElementoHTML.append(elementoHTML);


//lista de compras

let lista = document.getElementById("lista");
let ul = document.createElement("ul"); // lista nao ordenada
let itens = ["Arroz", "Feijão", "Laranja","Toddy"];
//adicionar os ites a lista
for(i =0;i<itens.length;i++) {

    //criar o elemento HTML li
    
    let li = document.createElement("li");
    li.textContent = itens[i]; //adiciona o conteudo ao elemento li
    ul.append(li);  
}
lista.append(ul);

//algoritmo
function somar (){

    //capturar o que o usuario digita

    let n1 = parseFloat(document.getElementById("num1").value);
    console.log(typeof n1);

    let n2 = parseFloat(document.getElementById("num2").value);
    let soma = n1 + n2;
    console.log(soma);

    let saida = `Resultado: <b>${soma}<b>`; //template literal
    document.getElementById("resultado").innerHTML = saida;



}


