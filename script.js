function entradaWhey(ids) {
    return {
        marca: document.querySelector(ids.marca).value,
        peso: parseFloat(document.querySelector(ids.peso).value),
        porcao: parseFloat(document.querySelector(ids.porcao).value),
        proteina: parseFloat(document.querySelector(ids.proteina).value),
        preco: parseFloat(document.querySelector(ids.preco).value),
    };
}

const primeiroProdutoids = { //criando objeto primeiro produto//
    marca: "#marca",
    peso: "#peso",
    porcao: "#porcao",
    proteina: "#proteina",
    preco: "#preco",
};

const segundoProdutoids = { //criando objeto segundo produto//
    marca: "#marca2",
    peso: "#peso2",
    porcao: "#porcao2",
    proteina: "#proteina2",
    preco: "#preco2",
};

//Funções para calculos//

function proteinaPorEmbalagem(peso,porcao,proteina){
    const porcoesTotais = peso / porcao;
    const proteinaTotal = porcoesTotais * proteina;
    return proteinaTotal
}

function valor100gProteina(preco,proteinaTotal){
    const proteinaTotal = proteinaPorEmbalagem(peso,porcao,proteina);
    const valor100g = (preco / proteinaTotal) * 100
    return valor100g
}

// Função resultado //

function resultado(){

}