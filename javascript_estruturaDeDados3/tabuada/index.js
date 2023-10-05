const numero = parseFloat(prompt("Informe um número.\n"))

let resultado = ""

for (let fator = 1; fator <= 10; fator++) {
  resultado += " -> " + numero + " * " + fator + (numero * fator) + "\n"
}

alert ("Resultado: " + numero + ":\n\n" + resultado )