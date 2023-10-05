/*resolução do exercício
Primeira parte: criar um arquivo em HTML no VSCODE;
Segunda parte: inserir os códigos do HTML que estão comentados abaixo e linkar com o arquivo JS.
Terceira Parte: Abrir o navegador a partir do arquivo criado.
*/



/*<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>DESCUBRA O VEICULO</title>
</head>
<body>
  <h1> Qual é o veiculo ?</h1>
  <script src="./index2.js"></script>
</body>
</html>*/

const terrestre = prompt ("O veiculo é terrestre ? (SIM/NÃO) ")
const capacidade = prompt ("O veiculo cabe uma pessoa ? (SIM/NÃO) ")
const peso = prompt ("O veiculo é pesado? (SIM/NÃO)")
const pedal = prompt ("O veiculo tem pedal ? (SIM/NÃO)")
const capacete = prompt ("O veiculo usa capacete ? (SIM/NÃO)")


if (terrestre === ("SIM") && capacidade === ("SIM") && peso === ("SIM")) {
   alert("Este veiculo é um Trator")
} else if (terrestre === ("NÃO")) {
  alert("Volte para o início.")
}

if (terrestre ===("SIM") && capacidade === ("SIM") && pedal === ("SIM")) {
  alert("Este veiculo é uma bicicleta")
} else if (terrestre === ("NÃO")) {
  alert("Volte para o início.")
}

if (terrestre ===("SIM") && capacete === ("SIM")) {
  alert("Este veiculo é uma moto")
} else if (terrestre === ("NÃO")) {
  alert("Volte para o início.")

}
