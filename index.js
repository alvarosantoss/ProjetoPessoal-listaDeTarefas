const prompt = require("prompt-sync")()

const aluno= prompt("Qual o seu nome?")
console.log(`Olá meu querido ${aluno}`)

let tarefas= "Aguardando"
let resposta= "Sim"

while(resposta==="Sim"){
    tarefas= prompt("Digite sua tarefa do dia:")
   resposta= prompt("Deseja adcionar outra tarefa?(sim/não):")
}
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



