var input = require("fs").readFileSync("stdin2", "utf8");
var lines = input.split("\n");

let frase = lines.shift().toUpperCase();
let fraseCorrigida = "";

for (let index = 0; index < frase.length; index++) {
  if (frase.charAt(index) == "Q") {
    fraseCorrigida += "K";
  } else {
    fraseCorrigida += frase.charAt(index);
  }
}

let matriz = [
  ["A", "B", "C", "D", "E"],
  ["F", "G", "H", "I", "J"],
  ["K", "L", "M", "N", "O"],
  ["P", "R", "S", "T", "U"],
  ["V", "W", "X", "Y", "Z"],
];

let cifra = "";

for (let i = 0; i < fraseCorrigida.length; i++) {
  
  let caractere = fraseCorrigida.charAt(i);

  for (let linha = 0; linha < 5; linha++) {

    for (let coluna = 0; coluna < 5; coluna++) {

      if (matriz[linha][coluna] == caractere) {

        cifra += linha + 1 + "" + (coluna + 1) + "";

      }

    }

  }
  
}

console.log(cifra);
