const prompt = require("prompt-sync")()
const quantidadeDeDias = Number(prompt("Quantidade de dias registrados:"))
const metaDiaria = Number(prompt("Qual sua meta diária:"))
const metaSemanal= Number(prompt("Qual a sua meta semanal:"))

let totalVendido= 0
let diasAcimaDaMeta= 0
let melhorDia= 0
let situacaoSemana= 0

for(let dia= 1; dia<=quantidadeDeDias; dia++){
    const venda= Number(prompt(`Venda do dia ${dia}:`))
    totalVendido= totalVendido + venda
    if(venda>=metaDiaria){
        diasAcimaDaMeta++
    }
    if(venda>melhorDia){
        melhorDia= venda
    }
    if(totalVendido>= metaSemanal){
        situacaoSemana="Meta semanal atingida"
    }else{
        situacaoSemana="Meta semanal não atingida"
    }
}

const mediaVendas= totalVendido/quantidadeDeDias



const resumo=`
total vendido; ${totalVendido}
média diária; ${mediaVendas}
quantidade de dias acima da meta; ${diasAcimaDaMeta}
melhor dia de vendas; ${melhorDia}
situação da semana; ${situacaoSemana}

`
console.log(resumo)
module.exports = {
    quantidadeDeDias,
    metaDiaria,
    metaSemanal,
    totalVendido,
    mediaVendas,
    diasAcimaDaMeta,
    melhorDia,
    situacaoSemana,
    resumo
}
module.exports = {
    quantidadeDeDias,
    metaDiaria,
    metaSemanal,
    totalVendido,
    mediaVendas,
    diasAcimaDaMeta,
    melhorDia,
    situacaoSemana,
    resumo
}