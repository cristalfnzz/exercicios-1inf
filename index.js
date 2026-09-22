// Sistema de Rendimento escolar

//RF 1 - Informações do estudante.
const nome = "Luan Caio"
const turma = "comércio"

//RF 2 - Registro das matérias.
const materiaBiologia = "Biologia"
const materiaMatematica = "Matemática" 

//RF 3 - Registro das notas.
const notaMatematica1 = 5
const notaMatematica2 = 5
const notaMatematica3 = 2

const notaBiologia1 = 7
const notaBiologia2 = 4
const notaBiologia3 = 5
 
// RF 4 - Cálculo da média.
const mediaMatematica = (notaMatematica1 + notaMatematica2 + notaMatematica3)/ 3
const mediaBiologia = (notaBiologia1 + notaBiologia2 + notaBiologia3)/ 3

//====================================================================//

//RF 5 - Verificação da situação do estudante na matéria de matemática.
let situacaoMatematica;

if (mediaMatematica >= 6) {
    situacaoMatematica = "aprovado"
}else{
    situacaoMatematica = "reprovado"
}

// RF 6 - Verificação do rendimento na matéria de matemática.
let rendimentoMatematica;

if (mediaMatematica>= 6) { 
  rendimentoMatematica = "Excelente rendimento" 
}else { 
    rendimentoMatematica = "Péssimo rendimento"
 }

//RF 7 - Verificação da situação do estudante na matéria de biologia.
let situacaoBiologia;

if (mediaBiologia >= 6) {
    situacaoBiologia = "aprovado"
}else{
    situacaoBiologia = "reprovado"
}
//RF 8 - Verificação do rendimento na matéria de biologia.
let rendimentoBiologia;

if (mediaBiologia>= 6) { rendimentoBiologia = "Excelente rendimento" }
 else { 
    rendimentoBiologia = "Péssimo rendimento"
 }
//RF 9 - Mensagem de atenção para o aluno caso tenha alguma média baixa
 let mensagem;
 if (mediaMatematica <= 5 || mediaBiologia <= 5) {
   mensagem = "Atenção! Existe uma nota abaixo da média.";
 } else {
   mensagem = "Todas as notas estão acima da média mínima.";
 }

 // RF 10 - Resumo do aluno
 const resumo = `
 // SISTEMA DE RENDIMENTO ESCOLAR
 Aluno: ${nome} 
 Turma: ${turma}

 ------------------------------------ 
 ${materiaMatematica} 
 Nota 1: ${notaMatematica1}
 Nota 2: ${notaMatematica2}
 Nota 3: ${notaMatematica3}


 Média: ${mediaMatematica}
 Situação: ${situacaoMatematica}
 Rendimento: ${rendimentoMatematica}

 ------------------------------------
 ${materiaBiologia}
 Nota 1: ${notaBiologia1} 
 Nota 2: ${notaBiologia2} 
 Nota 3: ${notaBiologia3}

 Média: ${mediaBiologia} 
 Situação: ${situacaoBiologia}
 Rendimento: ${rendimentoBiologia}

 -----------------------------------
 Mensagem ${mensagem}
 
 ===========================================
 `
 console.log(resumo)