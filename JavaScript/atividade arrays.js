//atividade

//1.acrescentar monica e retirar o ultimo elemento da array e encontrar o elemento do samuel e trocar manuel por emanuel 

var arr1 = ["Guilherme", "Samuel", "Manuel", "Davi", "Joao"]

//Acrescentar Monica

arr1.push("Monica")

//Retirar o último elemento

arr1.pop()

//Encontrar o elemento Samuel

var posição = arr1.indexOf("Samuel")

//trocar Manuel por Emanuel
var novo = arr1.splice(2,1,"Emanuel")

//2.dividir os meses do ano em trimestes

var ano = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
var primeiro = ano.slice(0,3)
var segundo = ano.slice(3,6)
var terceito = ano.slice(6,9)
var quarto = ano.slice(9,12)
console.log(quarto)

//3.Criar um array com filter para buscar somente a categoria Eletronico
var produtos =[
    {id: 1, descrição: "Smartphone", categoria: "Eletronico"},
    {id: 2, descrição: "Notebook", categoria: "Eletronico"},
    {id: 3, descrição: "Geladeira", categoria: "Eletrodomestico"},
]

var listagem = produtos.filter(
    function(valor){
        return valor.categoria.length <11
    }
)
console.log(listagem)