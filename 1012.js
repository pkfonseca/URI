var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');


var a = lines.shift().split(' ');

var b = Number(a.shift());
var c = Number(a.shift());
var d = Number(a.shift());
var pi = 3.14159;


var triangulo = b * d / 2;
var circulo = pi * (d ** 2);
var trapezio = ((b + c) * d) / 2;
var quadrado = c ** 2;
var retangulo = b * c;


console.log("TRIANGULO: " + triangulo.toFixed(3));
console.log("CIRCULO: " + circulo.toFixed(3));
console.log("TRAPEZIO: " + trapezio.toFixed(3));
console.log("QUADRADO: " + quadrado.toFixed(3));
console.log("RETANGULO: " + retangulo.toFixed(3));