let danoFisico = 0
let danoMagico = 0
const defFisica = 50
const defMagica = 50
const shieldDef = 120
const enchant = 15
const life = 500
const drag = 900

alert('Bem vindo ao Gates of Volcano') 
const play1 = prompt('Qual o nick do Personagem de ataque ?')
const play2 = prompt('Qual o nick de personagem que defende ?')
let weapon = prompt('Se seu personagem tem uma Espada ou Staff digite ?')
let shield = prompt('Ele possui shield ? 1 = (Sim), 2 = (Não)' )
let numberEnchants = Number(prompt('Sua arma tem quantos enchants'))


if (weapon = "espada"){
  danoFisico = numberEnchants * enchant
  alert( play1 + ' sua espada causara ' + danoFisico + ' de dano físico. ')
  
} else if (weapon = "staff") {
  danoMagico = numberEnchants * enchant
  alert( play1 + ' sua staff causara ' + danoMagico + ' de dano mágico. ')
}



