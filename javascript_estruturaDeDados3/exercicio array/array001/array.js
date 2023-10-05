//usar o console no chrome para realizar essa tarefa.

var list = ["Sol", "Paula", "Polly", "Aquiles", "Maria", "Denis", "Anderson", "Pedro", "Victor", "Daniel"]
var old = ["35","28", "41", "7", "23", "18", "54", "63", "17", "25"]
var color = ["red", "Yellow", "Black", "White", "Blue", "Purple", "Black", "White", "red", "Yellow"]

//listar todos elementos no console
console.log(list)
console.log(old)
console.log(color)


//listar os itens na posição 3
console.log(list[3])
console.log(old[3])
console.log(color[3])


//listar os itens na posição 6
console.log(list[6])
console.log(old[6])
console.log(color[6])

//adicionar novos elementso ao final de cada lista
list.push('Rafael')
old.push('33')
color.push('Brown')

// imprimir novamente a list com os novos elementos adicionados
console.log(list)
console.log(old)
console.log(color)

//substituir itens da lista
list.splice(2,1,"Camila")
old.splice(2,1,"26")
color.splice(2,1,"Pink")

//// imprimir novamente a list com os novos elementos substituidos
console.log(list)
console.log(old)
console.log(color)
