// Escreva um código que simula um chatbot. Nesse código, o usuário criará um menu
// interativo com 3 opções de resposta. Em cada resposta terá que haver outras duas
// formas de interação final. Antes de terminar, o código deve informar que irá ser
// encerrado.



let choice

alert('Bem vindo ao chatbot da Cacaushow')
alert('Escolha um de nossos produtos para mais informações.')
choice = Number(prompt('1 - Itens sem lactone, \n 2 - Itens que contém Alcool, \n 3 - Ao leite'))

switch (choice){
  case 1:
    alert('Itens sem lactose: \n\n Delicioso chocolate ao leite zero lactose, ideal para quem tem restrições na dieta. Cremoso, derrete na boca e perfeito para levar a qualquer lugar!')
    break
  case 2:
    alert('Itens que contém Alcool: \n\n CLÁSSICOS GOLDEN GIFT SORTIDO 160G possui álcool na composição, pois é composto de bombons de chocolate ao leite com recheios nos sabores avelã, trufa tradicional e cereja ao licor.')  
    break
  case 3:
    alert('Itens ao leite: \n\n Cacau Show é a maior rede de Chocolates Finos do mundo. Descubra em nossa loja virtual o universo dos melhores Chocolates')  
  default:
    alert('Opção Inválida! ')  
}