function entradaWhey(ids) {
    return {
        marca: document.querySelector(ids.marca).value,
        peso: parseFloat(document.querySelector(ids.peso).value), // peso total do produto
        porcao: parseFloat(document.querySelector(ids.porcao).value), // porções totais
        proteina: parseFloat(document.querySelector(ids.proteina).value), // proteína por porção
        preco: parseFloat(document.querySelector(ids.preco).value), // preço do produto
    };
}

const primeiroProdutoids = { //criando objeto primeiro produto
    marca: "#marca",
    peso: "#peso",
    porcao: "#porcao",
    proteina: "#proteina",
    preco: "#preco",
};

const segundoProdutoids = { //criando objeto segundo produto
    marca: "#marca2",
    peso: "#peso2",
    porcao: "#porcao2",
    proteina: "#proteina2",
    preco: "#preco2",
};

// Funções para cálculos

// Calcular a proteína total por embalagem
function proteinaPorEmbalagem(peso, porcao, proteina) {
    const porcoesTotais = peso / porcao; // número total de porções
    const proteinaTotal = porcoesTotais * proteina; // total de proteína
    return proteinaTotal;
}

// Calcular o custo por 100g de proteína
function valor100gProteina(peso, preco, porcao, proteina) {
    const proteinaTotal = proteinaPorEmbalagem(peso, porcao, proteina); // proteína total na embalagem
    const valor100g = (preco / proteinaTotal) * 100; // custo para 100g de proteína
    return valor100g;
}

// Função para resultado do primeiro produto
function resultado1() {
    const produto1 = entradaWhey(primeiroProdutoids);
    const valor100g = valor100gProteina(produto1.peso, produto1.preco, produto1.porcao, produto1.proteina);
    const resultado = `O custo por 100g de proteína do whey ${produto1.marca} é: R$ ${valor100g.toFixed(2)}<br>`;
    return resultado;
}

// Função para resultado do segundo produto
function resultado2() {
    const produto2 = entradaWhey(segundoProdutoids);
    const valor100g = valor100gProteina(produto2.peso, produto2.preco, produto2.porcao, produto2.proteina);
    const resultado2 = `O custo por 100g de proteína do whey ${produto2.marca} é: R$ ${valor100g.toFixed(2)}<br>`;
    return resultado2;
}

// Evento para calcular e exibir o resultado
document.getElementById("calcularCusto").addEventListener("click", function () {
    const resultados = resultado1() + resultado2();
    document.getElementById("resultado").innerHTML = resultados;
});
