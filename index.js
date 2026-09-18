const aluno= "Álvaro Luis"
const idade= "15 anos"
const escola= "EEEP Deputado Roberto Mesquita"
const curso= "Infórmatica"
const infrequente= "Sim"
const atividadeCotidianas= "Jogar vôlei"

//================================================================================================
let atividadeBaseT="Fazer projeto"
let atividadeBaseC="Fazer TD"
let indice= "Urgente"
let statusAtividade="Aguardando"
let afazeres="Aguardando"
let afazeresdois="Aguardando"
//=====================================================================================================
// condicional verifica as atividades do dia
if(atividadeBaseT=== "Fazer projeto"&&indice==="Urgente"){
     statusAtividade="Dar preferência"
}else{
     statusAtividade="Fazer com calma"
}
//=====================================================================================================
// condicional verifica afazeres do dia que faltei
if(atividadeBaseT==="Fazer projeto" && infrequente==="Sim"){
    afazeres="Abrir aula no GitHub"
}else{
    afazeres="Concluir projetos"
}
//======================================================================================================
// condicional verifica o tempo de resolução dos afazeres
 if(atividadeBaseC==="Fazer TD" && indice==="Urgente"){
    afazeresdois="Resolução urgente"
 }else{
    afazeresdois="Resolução não urgente"
 }
 //=====================================================================================================
 // condicional indica o que dar preferência caso o aluno tenha outras atividades
 if(atividadeBaseT=== "Fazer projeto" && indice=== "Urgente" && atividadeCotidianas==="Jogar vôlei"){
    console.log("Faltar treino para fazer o projeto")
 }else{
    console.log("Ir para o vôlei e depois fazer projeto")
 }
 //=======================================================================================================
 const resumo=`
 nome do aluno:${aluno}
 idade do aluno:${idade}
 escola:${escola}
 curso tecnico:${curso}
 aluno infrequente:${infrequente}
 atividades cotidianas:${atividadeCotidianas}
 atividades da base técnica:${atividadeBaseT}
 atividades da base comum:${atividadeBaseC}
 indice de entrega das atividades:${indice}
 status da atividade da base técnica:${statusAtividade}
 afazeres do dia que faltei base técnica:${afazeres}
 afazeres do TD base comum:${afazeresdois}
 `
 console.log(resumo)