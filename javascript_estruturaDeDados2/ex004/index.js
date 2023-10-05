let nota1 = parseInt(prompt('Qual foi a primeira nota? '))
let nota2 = parseInt(prompt('Qual foi a segunda nota? '))

let falta = Number(prompt('Qual o número de falta ? '))


let média = (nota1 + nota2) /2

if (média >= 6 && falta < 30){
  alert('Parabéns, Você esta aprovado !')
} else if ( média >= 6 && falta > 30 ){ 
  alert('Você atingiu a média mas foi reprovado por número de falta !')
} else {
  alert('Infelizmente foi reprovado por média.')
}