// forEach
var a = [10, 20, 30, 40 ,50]

a.forEach(valor => console.log(valor))

var tot = 0
a.forEach(valor => {
    tot += valor
})
console.log(tot)

// if...else - estrutura condicional que executa a afirmação, dentro do bloco, se determinada condição for verdadeira. Se for falsa, executa as afirmações dentro de else
var idade = 15

if (idade < 16){
    console.log("Não vota")
} else if (idade < 18 || idade > 65){
    console.log("Voto opcional")
} else {
    console.log("Voto obrigatório")
}

// Switch - avalia um expressão, combinando valor de expressão para um cláusua case, e executa as instruções associadas ao case

let x = 7
let resultado = ""

if (x > 10){
    resultado = "A"
} else if (x < 5){
    resultado = "B"
} else {
    resultado = "C"
}
console.log(resultado)

let totalcompra = 150
let desconto = ""

if(totalcompra > 200){
    desconto ="20%"
} else if (totalcompra > 100){
    desconto = "10%"
} else if (totalcompra > 50){
    desconto = "5%"
}  else {
    desconto = "Sem desconto"
}

console.log(desconto)

var EscolhaBebida = "café"
var valor = ""

switch (EscolhaBebida){
    case "café":
        valor = 2.00
        console.log("Você escolheu café. O valor a ser pago é de R$2.00")
        break
    case "leite":
        valor = 2.50
        console.log("Você escolheu leite. O valor a ser pago é de R$2.50")
        break
    case "chá":
        valor = 5.00
        console.log("Você escolheu chá. O valor a ser pago é de R$5.00")
        break
    default:
        console.log("Escolha invalida, por favor escolher entre uma das três opções café, leite ou chá")            
}

const carro = {

    modelo: 'Audi A3',
  
    marca: 'Audi',
  
    ano: 2020
  
  };
  
  for (let caracteristica in carro) {
  
    console.log(caracteristica + ': ' + carro[caracteristica]);
  
  }

 
  const numeros = [2, 4, 6, 8, 10];

  let soma = 0;
  
  for (let i = 0; i < numeros.length; i++) {
  
    if (numeros[i] % 2 === 0) {
  
      soma += numeros[i];
  
    }
  
  }
  
  console.log(soma);  