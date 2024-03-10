// Splice - remove uma quantidade de elementos ou somente um único
var elemento = [1,2,3,4,5,6,7,8,9];
elemento.splice (4, 1);
console.log(elemento);

//Usando splice para trocar itens no arrays
var nomes = ["maria", "joao", "lucas", "pedote"]
var novos = nomes.splice(1,2,"amanda", "alessandra")
console.log(nomes)

//Slice - Copia uma parte de um array e o retorna como um novo array

var pessoa = ["Eduardo", "Joana", "Wallace", "Rosana"]
var pessoa1 = pessoa.slice(0,3)
console.log(pessoa)
console.log(pessoa1)


//Concat - é um metodo que faz a junção de duas partes e retorna como uma nova array
var ano = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
var primeiro = ano.slice(0,3)
var segundo = ano.slice(3,6)
var terceito = ano.slice(6,9)
var quarto = ano.slice(9,12)
console.log(quarto)

//Filter - recebe cada elemento do array e aplica uma insrução condicional a ele
var numeros = [1,2,3,4,5,6,7,8,9,0]
var resultado = numeros.filter(item => item % 2 == 0)
console.log(resultado)

var numerosfiltrados = numeros.filter(
    function(valor){
        return valor > 5;
    }
)
console.log(numerosfiltrados)

function buscarValores(valor){
    return valor < 5
}

var numeroEncontrados = numeros.filter(buscarValores)
console.log(numeroEncontrados)

var r1 = numeros.filter((valor) => {
    return valor >5
})
console.log(r1)

var r2 = numeros.filter(valor => valor > 5)
console.log(r2)

var funcionario = [
    {nome: "Luis", idade: 62},
    {nome: "Alessandra", idade: 22},
    {nome: "Andressa", idade: 40},
    {nome: "Luz", idade: 30},
]

var pessoas = funcionario.filter(
    function(valor){
        console.log(valor.nome)
})

var lista = funcionario.filter(
    function(valor){
        return valor.nome.length < 4
})
console.log(lista)

// Array.map - permite a você iterar sobre o array e modificar seus elementos usando uma função de callback

let arr = [3,4,5,6]

let modifiedArr = arr.map(function(element){
    return element *3
})

console.log(modifiedArr)

var nume = [1,2,3,4,5,6,7,8,9,0]

var num = nume.map(function(valor){
    return valor *2
})
console.log(num)

var objeto = [
    {nome: "Luis", idade: 62},
    {nome: "Alessandra", idade: 22},
    {nome: "Andressa", idade: 40},
    {nome: "Luz", idade: 30},
]

nomes = objeto.map(pessoa => pessoa.nome)
console.log(nomes)

//Reduce - reduz um array de valores a um único valor.

var numero = [1,2,3,4,5,6,7,8,9,0]
var tot = numero.reduce(function(tot, numero){
    return tot + numero
}, 0)
console.log(tot)

