let num1 = Number(prompt('Digite o primeiro número ?'))
let num2 = Number(prompt('Digite o segundo número ?'))

if (num1 > num2){
  alert(`${num1} é maior que ${num2}`)
} else if (num1 < num2) {
  alert(`${num2} é maior que ${num1}`)
} else {
  alert('Condição errada, refaça o teste.')
}