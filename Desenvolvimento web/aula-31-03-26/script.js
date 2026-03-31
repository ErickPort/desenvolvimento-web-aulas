//preço combustivel
const precoGasolina = 6.69
const precoEtanol = 5.85
const precoDiesel = 6.10

//funcao

function atualizarValor (){
    let tipo = document.getElementById("combustivel").value;
    let litros = parseFloat(document.getElementById("litros").value);
    switch (tipo){

        case "gasolina" : precoPorLitro = precoGasolina;
        break;

        case "etanol" : precoPorLitro = precoEtanol;
        break;

        case "diesel": precoPorLitro = precoDiesel; 
        break;

    default:
        console.log ("Escolha uma opção");

        return;
    };

console.log(tipo);
console.log(precoPorLitro);
calcularAbastecimento(precoPorLitro,litros);
};

let tipo = document.getElementById("combustivel");
tipo.addEventListener("change", atualizarValor);

function calcularAbastecimento (precoCombustivel,litros){
    let valorTotal = precoCombustivel * litros;
    
    document.getElementById("resultado").textContent = valorTotal;
}



let litros = document.getElementById("litros");
litros.addEventListener("input", atualizarValor);
