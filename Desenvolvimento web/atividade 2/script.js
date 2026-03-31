let incrementar = document.getElementById("incrementar");
let decrementar = document.getElementById("decrementar");
let contador = document.getElementById("contador");

let input = document.getElementById("texto");
let contador2 = document.getElementById("contador2");
let listaDigitada = document.getElementById("listaDigitada");

let listas = document.getElementById("listas");
let tipoLista = document.getElementById("tipoLista");

let resetar = document.getElementById("resetar");

incrementar.addEventListener("click", () => {
    contador.textContent = parseInt(contador.textContent) + 1;
});

decrementar.addEventListener("click", () => {
    let valor = parseInt(contador.textContent);

    if (valor > 0) {
        contador.textContent = valor - 1;
    } else {
        alert("O contador já está em zero.");
    }
});

input.addEventListener("input", () => {
    contador2.textContent = input.value.replace(/\s/g, "").length;
});

input.addEventListener("keypress", (e) => {
    if (e.key === "Enter" && input.value.trim() !== "") {

        let item = document.createElement("li");
        item.textContent = input.value.trim();

        listaDigitada.appendChild(item);

        input.value = "";
        contador2.textContent = 0;
    }
});

document.getElementById("adicionarItem").addEventListener("click", () => {

    let tipo = tipoLista.value;

    if (!tipo) {
        alert("Escolha o tipo de lista.");
        return;
    }

    let lista = document.createElement(tipo);

    let item = document.createElement("li");
    item.textContent = "item";

    lista.appendChild(item);
    listas.appendChild(lista);

});

resetar.addEventListener("click", () => {

    contador.textContent = "0";

    input.value = "";
    contador2.textContent = "0";

    listaDigitada.innerHTML = "";
    listas.innerHTML = "";

});