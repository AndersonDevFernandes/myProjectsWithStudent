// ## Fila de Espera

// Escreva um programa em javascript para simular uma fila de espera em um consultório médico. 
// O programa deve iniciar mostrando na tela um menu interativo contendo a lista de todos os pacientes 
// esperando em ordem mostrando sua posição ao lado do nome (ex.: 1º Matheus, 2º Marcos, etc). 
// O menu também deve permitir escolher entre as opções de “Novo paciente”, 
// para adicionar um novo paciente ao fim da fila (pedindo o nome do paciente), “Consultar paciente”, que 
// retira o primeiro paciente da fila e mostra na tela o nome do paciente consultado, e “Sair”. 
// O programa só deve ser encerrado ao escolher a opção de “Sair”, caso contrário deve voltar ao menu.

let fila = []
let opcao = ''

do {
 let pacientes = ""
 for (let i = 0; i < fila.length; i++) {
  pacientes += (i + 1) + "° - " + fila[i] + '\n'
 }

 opcao = prompt(
  'Pacientes: \n' + pacientes + 
  '\n Escolha uma opção: \n1. Novo Paciente\n2. Consultar Paciente\n3. Sair'
 )

 switch(opcao){
  case '1':
    const novoPaciente = prompt('Qual é o nome do Paciente? ')
    fila.push(novoPaciente)
    break
  case '2':
    const pacienteConsultado = fila.shift()
    alert(pacienteConsultado + 'foi removido da fila. ')
    break
  case '3':
    alert('Encerrando...')
    break
   default:  
    alert('opção Inválida!')
 }

} while (opcao !== "3") //arbitrário, significa que no menu a opção 3 é sair)

