const prompt = require("prompt-sync")()
//Nome do aluno
const aluno= prompt("Qual o seu nome?")
console.log(`Olá meu querido(a) ${aluno}`)

//While utilizado para saber as tarefas do aluno
let tarefas= []
let resposta= "Sim"

while(resposta==="Sim"){
    let tarefa= prompt("Digite sua tarefa do dia:")
    tarefas.push(tarefa)
   resposta= prompt("Deseja adcionar outra tarefa?(sim/não):")
}
//Array utilizado para fazer uma lista das atividades
const lista=[`${tarefas}`]
console.log(`Sua lista de tarefas é: ${lista}`)
//Do while utilizado para saber as metas do aluno
   let metaDoDia= "Aguardando"

   do{
      metaDoDia=(prompt(`Qual a sua meta de resolução do dia?`))
      resposta= prompt("Deseja adcionar outra meta?(sim/não)")
   }while(resposta==="Sim"){
      console.log(`Sua meta do dia é ${metaDoDia}`)
   }
// O tempo será para resolver as atividades e para o batimento das metas.
// Ele também foi adcionado para controlar o sono do estudante, para não atrapalhar o seu desempenho.
   let tempo= 0
   for( let i= 1; i<2; i++ ){
      total= Number(prompt("Qual o tempo para resolução de ambas metas/atividades?"))
      tempo= tempo+total
   console.log(`Seu tempo de resolução é de ${tempo} horas`)
   }






