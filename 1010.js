var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var peca1 = lines.shift().split(' ');
var peca2 = lines.shift().split(' ');

var codigoPeca1 = peca1[0];
var codigoPeca2 = peca2[0];

var qtdPeca1 = Number(peca1[1]);
var qtdPeca2 = Number(peca2[1]);


var valorPeca1 = Number(peca1[2]).toFixed(2);
var valorPeca2 = Number(peca2[2]).toFixed(2);

var total = (qtdPeca1 * valorPeca1) + (qtdPeca2 * valorPeca2);

console.log("VALOR A PAGAR: R$ " + total.toFixed(2));