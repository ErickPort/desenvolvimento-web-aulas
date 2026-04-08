//preço do combustível
const precoGasolina = 6.69;
const precoEtanol = 5.85;
const precoDiesel = 6.10;

//função
function atualizarValor(){
    let tipo = document.getElementById("combustivel").value; //valores do elemento HTML
    let litros = parseFloat(document.getElementById("litros").value);
    let precoPorLitro;
    switch (tipo) {
        case "gasolina":
            precoPorLitro = precoGasolina;
            break;
        case "etanol":
            precoPorLitro = precoEtanol;
            break;
        case "diesel":
            precoPorLitro = precoDiesel;
            break;
        default:
            console.log("Escolha uma opção");
            return;
    };
    console.log(tipo);
    console.log(precoPorLitro);
    calcularAbastecimento(precoPorLitro, litros); //chamando a função
};

let tipo = document.getElementById("combustivel"); //elemento HTML
tipo.addEventListener("change", atualizarValor); //evento ao elemento HTML

function calcularAbastecimento(precoCombustivel, litros){
    let valorTotal = precoCombustivel * litros;
    document.getElementById("resultado").textContent = valorTotal;
};

let litros = document.getElementById("litros");
litros.addEventListener("input", atualizarValor);
