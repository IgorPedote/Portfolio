var arr1 = [1,2,3,4,5,6,7,8]
// join
console.log(arr1.join (" "))

//shift - retira o primeiro elemento
var retirado = valores.shift();
console.log(retirado);

console.log(valores);

console.log("Posição deo numero 3:" + valores.indexOf(5))

//push - acrescenta no final
valores.push(9);

console.log(valores);

//pop - retira o ultimo elemento
valores.pop();


console.log(valores);


//criar uma nova array sem os numero negativos

function removerNumerosNegativos(array) {
    // Utiliza o método filter para criar uma nova array contendo apenas os números não negativos
    let arraySemNegativos = array.filter(function(numero) {
        return numero >= 0;
    });

    return arraySemNegativos;
}

// Exemplo de uso
let numeros = [-5,10,24,20,-3,89];
let numerosSemNegativos = removerNumerosNegativos(numeros);
console.log("Array sem números negativos:", numerosSemNegativos);
