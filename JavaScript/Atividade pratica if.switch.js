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