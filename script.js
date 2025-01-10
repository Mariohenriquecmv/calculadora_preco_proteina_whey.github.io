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
    peco: "#preco",
};

const segundoProdutoids = { //criando objeto segundo produto//
    marca: "#marca2",
    peso: "#peso2",
    porcao: "#porcao2",
    proteina: "#proteina2",
    peco: "#preco2",
};

