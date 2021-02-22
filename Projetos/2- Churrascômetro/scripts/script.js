// Carne 400g por pessoa + de 6 horas - 650g
// Refrigerante - 1200ml por pessoa + 6 horas - 2000ml 
// suco/agua - 1000ml por pessoa + 6 horas - 1500ml
// crianças valem por 0,5

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular() {
    console.log("Calculando...");

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qtdTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
    let qtdTotalRefri = refriPP(duracao) * adultos + (refriPP(duracao) / 2 * criancas);
    let qtdTotalSuco = sucoPP(duracao) * adultos + (sucoPP(duracao) / 2 * criancas);

    resultado.innerHTML = `<p>${qtdTotalCarne/1000}Kg de Carne</p>`;
    resultado.innerHTML += `<p>${qtdTotalRefri/2000}und de Refrigerante 2L</p>`;
    resultado.innerHTML += `<p>${qtdTotalSuco/1000}und de Suco 1L</p>`;
}


function carnePP(duracao) {
    if (duracao >= 6) {
        return 650;
    } else {
        return 400;
    }

}

function refriPP(duracao) {
    if (duracao >= 6) {
        return 2000;
    } else {
        return 1200;
    }

}

function sucoPP(duracao) {
    if (duracao >= 6) {
        return 1500;
    } else {
        return 1000;
    }

}