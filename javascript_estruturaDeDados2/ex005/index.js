// Exercício
// ■ Um cinema oferece aos seus clientes dois tipos de ingressos: o ingresso VIP
// (com uma poltrona) e um ingresso standard (cadeira comum). É possível
// optar também por um combo promocional de pipoca e refrigerante ou não.
// Faça um programa que solicite ao usuário o tipo de ingresso que ele deseja
// (digitando 1 para VIP e 2 para standard), bem como se ele deseja o combo de
// pipoca (opção 1) ou não (opção 2). O programa deverá imprimir uma
// mensagem para o usuário de acordo com as seguintes regras:


// ■ Ingresso VIP sem pipoca: “Valor: 80 reais”;
// ■ Ingresso VIP com pipoca: : “Valor: 110 reais”;
// ■ Ingresso standard sem pipoca: “Valor: 40 reais”;
// ■ Ingresso standard com pipoca: “Valor: 70 reais”;



let ingresso = Number(prompt('Seja bem vindo ao cine softex' + '\n' +
                          '1 - Sala vip (1) ou Standad (2)'))
let combo = Number(prompt('2 - Com Pipoca (1) ou sem Pipoca (2)'))


if (ingresso == 1 && combo == 1 ){
   alert('Sua escolha foi SALA VIP COM COMBO: Valor R$ 110,00')  
} else if (ingresso == 1 && combo == 2){
   alert('Sua escolha foi SALA VIP SEM COMBO: Valor R$ 80,00')  
} else if (ingresso == 2 && combo == 1){
   alert('Sua escolha foi SALA STANDARD COM COMBO: Valor R$ 70,00')  
}else if (ingresso == 2 && combo == 2){
   alert('Sua escolha foi SALA STANDARD SEM COMBO: Valor R$ 40,00')  
}else{
   alert('Opção inválida, retorne o processo de compra.')
}