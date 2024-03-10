//empresa

var idademinima = 18;
var experienciaminima = 3;
var nivelEducacaoMinimo = "superior"
var certificadoobrogatorio = true;

// candidato

var idade = 28;
var experienciaAnos = 5;
var nivelEducacao = "superior"
var possuiCertificado = true;

// verificar dados

var elegivel =

idade >= idademinima &&

experienciaAnos >= experienciaminima &&

(nivelEducacao === nivelEducacaoMinimo) &&

(!certificadoobrogatorio || possuiCertificado);

// saida do resultado

console.log("elegivel para a vaga?" + elegivel);


