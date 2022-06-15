var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var pi = 3.14159;
var raio = lines.shift() ** 3;


var volume = 4 / 3.0 * pi * raio;

console.log("VOLUME = " + volume.toFixed(3));
