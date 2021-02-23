var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let linesTamanho = lines.length;
const alfabeto = "abcdefghijklmnopqrstuvwxyz";
let fraseFormatacao = lines.shift();
let frase = fraseFormatacao.toLowerCase();
let casas = 3;

/* se o tamanho for >= 2, quer dizer que foi fornecido a quantidade de casas a serem puladas
caso não seja, executa com o padrão de 3 casas puladas.
*/
if (linesTamanho >= 2) {

  casas = lines.shift();

  if (casas % 26 != 0) {

    casas = casas % 26;

  }

  let caracteresFrase = [];
  let caracteresFraseCifrada = [];

  for (let index = 0; index < frase.length; index++) {

    caracteresFrase.push(frase.charAt(index));

  }

  for (let index = 0; index < frase.length; index++) {

    if (alfabeto.includes(caracteresFrase[index])) {

      let indice = alfabeto.indexOf(caracteresFrase[index]) + casas;

      if (indice >= alfabeto.length) {

        indice = indice - alfabeto.length;

      }

      caracteresFraseCifrada.push(alfabeto.charAt(indice));

    } else {

      caracteresFraseCifrada.push(frase.charAt(index));

    }
  }

  let fraseCifrada = "";

  for (let index = 0; index < caracteresFraseCifrada.length; index++) {

    if (caracteresFrase[index].toUpperCase() == fraseFormatacao.charAt(index)) {

      fraseCifrada += caracteresFraseCifrada[index].toUpperCase();

    } else {

      fraseCifrada += caracteresFraseCifrada[index];

    }
  }
  console.log(fraseCifrada);

} else {
  let caracteresFrase = [];
  let caracteresFraseCifrada = [];

  for (let index = 0; index < frase.length; index++) {

    caracteresFrase.push(frase.charAt(index));

  }

  for (let index = 0; index < frase.length; index++) {

    if (alfabeto.includes(caracteresFrase[index])) {

      let indice = alfabeto.indexOf(caracteresFrase[index]) + casas;

      if (indice >= alfabeto.length) {

        indice = indice - alfabeto.length;
      }

      caracteresFraseCifrada.push(alfabeto.charAt(indice));

    } else {

      caracteresFraseCifrada.push(frase.charAt(index));

    }
  }

  let fraseCifrada = "";

  for (let index = 0; index < caracteresFraseCifrada.length; index++) {

    if (caracteresFrase[index].toUpperCase() == fraseFormatacao.charAt(index)) {
      
      fraseCifrada += caracteresFraseCifrada[index].toUpperCase();

    } else {

      fraseCifrada += caracteresFraseCifrada[index];
      
    }
  }
  console.log(fraseCifrada);
}
