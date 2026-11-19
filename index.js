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
// For utilizado para saber o tempo de resolução das atividades
// O tempo será para resolver as atividades e para o batimento das metas.
   let tempo= 0
   for( let i= 1; i<2; i++ ){
      total= Number(prompt("Qual o tempo para resolução de ambas metas/atividades?"))
      tempo= tempo+total
   console.log(`Seu tempo de resolução é de ${tempo} horas`)
   }
//Objeto utilizado para descobrir qual o tipo de material de estudo utilizado pelo aluno, utilizando as propriedades (nome e meio)
const material={
   nome:prompt("Digite o nome do material de estudo?"),
   meio:prompt("Qual meio você vai utilizar(canal, site...)?")
}
console.log("Dados do seu material de estudo:")
console.log(material.nome)
console.log(material.meio)
//Function utilizado para saber se o tempo de sono do aluno esta ok
console.log("Vamos verificar se seu sono está ok")
function verificaSono(tempoDeSono) {
  if (tempoDeSono >= 8) {
    return "Seu sono esta excelente e não afetará seu desempenho!"
  }

  return "Tome cuidado, se manter esse habito seu desempenho pode ser afetado!"
}
const tempoDeSono = Number(prompt("Digite o seu tempo de sono: "))
const situacao =verificaSono(tempoDeSono)
console.log(situacao)









