//IF ELSE

//EXERCICIO 1

// var idade = 15

// if (idade < 18){
//   console.log('menor de idade')
// } else {
//   console.log('Maior de idade')
// }

//EXERCÍCIO 2

// var idade = 82
// console.log(`Você tem ${idade} anos`)
// if (idade < 16) {
//   console.log('Não vota')
// } else if (idade < 18 || idade > 65){
//   console.log('Voto Opcional')
// } else {
//   console.log('Voto Obrigatório')
// }

//EXERCÍCIO 3

// var agora = new Date()
// var hora = agora.getHours()

// console.log(`Agora são exatamente ${hora} Horas`)
// if (hora >= 5 && hora <= 11) {
//   console.log('Bom dia')
// } else if (hora >= 12 && hora <= 18) {
//   console.log('Boa tarde')
// } else if (hora >= 19 && hora <= 23 ) {
//   console.log('Boa noite')
// } else {
//   console.log('Vai dormir que é de madrugada')
// }


//SWITCH

//EXERCÍCIO 4

// var agora = new Date()
// var diaSem = agora.getDay() //pegando data do sistema

// 1 = DOMINGO, 2 = SEGUNDA, 3 = TERÇA, 4 = QUARTA, 5 = QUINTA, 6 = SEXTA, 7 = SÁBADO

// console.log(diaSem)

// switch(diaSem){
//     case 0:
//     console.log('domingo')
//     break
//     case 1:
//     console.log('Segunda')
//     break
//     case 2:
//     console.log('Terça')
//     break
//     case 3:
//     console.log('Quarta')
//     break
//     case 4:
//     console.log('Quinta')
//     break
//     case 5:
//     console.log('Sexta')
//     break
//     case 6:
//     console.log('Sábado')
//     break
//     default:
//       console.log('[ERRO] Dia inválido')
//       break
// }


// //break

// for (var x = 1 ; x < 10; x++){
//   if(x == 5){
//     break
//   }
// }

// //continue

// for (var x = 1 ; x < 10; x++){
//   if(x == 5){
//     continue
//   }
//   document.write(x)
// }

// //while

// var contador = 1
// while (contador < 11){
//   document.write(contador++)
// }

// var salario = 3200
// var cargo = ('ajudante', 'operador', 'lider', 'supervisor')


// if (salario >= 2500 && cargo == 'ajudante'){
//     console.log('Precisa ser promovido !')
// } else {
//   console.log('Re-avaliar')
// }

// LISTA DE COMPRAS (FILA)

// let listaDeCompras = []
// console.log(listaDeCompras)

// listaDeCompras[0] = 'arroz'
// listaDeCompras[1] = 'Feijão'
// listaDeCompras[3] = 'Açucar'
// console.log(listaDeCompras)

//LISTA DE NOMES (PUSH) JOGA NO FINAL

var arr = ['Sol', 'Aquiles', 'Anderson', 'Lady']

let tamanho = arr.push('rock', 'Tata', 'Pinho', 'Bob', 'Mickey', 'Pluto')
console.log(arr)
console.log(tamanho)

// LISTA DE NOMES (UNSHIFT) JOGA NO ÍNICIO

arr.unshift('Mãe')
console.log(arr)
console.log(tamanho)


//LISTA DE NOMES (POP) REMOVE O ULTIMO ELEMENTO

var ultimoElemento = arr.pop()
console.log(arr)
console.log(ultimoElemento)
console.log(tamanho)

//LISTA DE NOMES (POP) REMOVE O COMEÇO ELEMENTO

ultimoElemento = arr.shift()
console.log(arr)
console.log(ultimoElemento)

//LISA DE NOMES (INCLUDE) PESQUISAR POR UM ELEMENTO

var inclui = arr.includes('Aquiles')
console.log(inclui)

//indexof

var indice = arr.indexOf('Aquiles')
console.log(indice)

//cortar e concatenar
//slice

var names = arr.slice(2, 3)
//obter os ultimos 4 itens da lista
var outros = arr.slice(-4)
console.log(arr)
console.log(names)
console.log(outros)

//concat

var anothers = names.concat(outros, 'Blue', 'Minie', 'Lauriel', 'Disney')
console.log(anothers)
console.log(tamanho)

//substituição de elementos.
//splice

var a = anothers.splice(indice, 3, "Ariel", "Rei")
console.log(anothers)
console.log(a)

//Iterar sobre os elementos

for (let indice = 0; indice < anothers.length; indice++){
  var elemento = anothers[indice]
  console.log(elemento + ' Se o elemento naposição ' + indice)
}