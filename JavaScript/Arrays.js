var valores = [8,3,5,6,1,9]

console.log(valores [0])

console.log("Array invertido" + valores.reverse())

for ( var pos = 0 ;  pos < valores.length ; pos++){
    console.log("Posição:  " + pos + "valor: " + valores[pos]);
}

// calcular a média de todos os numeros de um array

var soma = 0
for ( var pos = 0 ;  pos < valores.length ; pos++){
    soma += valores[pos];
}

var media = soma/valores.length;

console.log(media);

//localizar o maior valor dentro de uma rede de numeros

function encontrarMaiorValor(array) {
    let maiorValor = array[0];  // Supõe-se que o primeiro elemento seja o maior inicialmente
    
    for (let i = 1; i < array.length; i++) {
        if (array[i] > maiorValor) {
            maiorValor = array[i];
        }
    }
    
    return maiorValor;
}

// Exemplo de uso
let numeros = [5, 12, 7, 25, 3, 15];
let maior = encontrarMaiorValor(numeros);
console.log("O maior valor é:", maior);


//qual é a cidade que tenha o maior numero de letras no nome - array (sao paulo, salvador, rio de janeiro, sergipe, santa catarina, rio grande do norte)

function encontrarCidadeComMaiorNumeroDeLetras(cidades) {
    let cidadeComMaiorNumeroDeLetras = '';

    for (let i = 0; i < cidades.length; i++) {
        if (cidades[i].length > cidadeComMaiorNumeroDeLetras.length) {
            cidadeComMaiorNumeroDeLetras = cidades[i];
        }
    }

    return cidadeComMaiorNumeroDeLetras;
}

// Exemplo de uso
let cidades = ["São Paulo", "Salvador", "Rio de Janeiro", "Sergipe", "Santa Catarina", "Rio Grande do Norte"];
let cidadeComMaiorNumeroDeLetras = encontrarCidadeComMaiorNumeroDeLetras(cidades);
console.log("A cidade com o maior número de letras no nome é:", cidadeComMaiorNumeroDeLetras);