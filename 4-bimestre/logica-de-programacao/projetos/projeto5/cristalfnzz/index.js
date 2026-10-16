// PROJETO 5 - CONTROLE DE PRODUÇÃO DE POTES

const prompt = require("prompt-sync")()

// RF01 - Registro do turno
const nomeTurno = prompt("Turno: ")
const meta = Number(prompt("Meta: "))
const producaoInicial = Number(prompt("Produção inicial: "))
const pecasPorCaixa = Number(prompt("Itens por caixa: "))

// RF02 - Produção até a meta
let producaoFinal = producaoInicial

while (producaoFinal < meta) {
    producaoFinal++
}

// RF03 - Caixas necessárias para embalar
let caixasNecessarias = 0
let itensRestantes = producaoFinal

do {
    itensRestantes -= pecasPorCaixa
    caixasNecessarias++
} while (itensRestantes > 0)

// RF04 - Situação da meta
const situacaoMeta = producaoFinal >= meta
    ? "Meta atingida"
    : "Meta não atingida"

// RF05 - Resumo do turno
const resumo = `
===== RESUMO DO TURNO =====
Turno: ${nomeTurno}
Produção final: ${producaoFinal}
Caixas necessárias: ${caixasNecessarias}
Situação: ${situacaoMeta}
===========================
`

console.log(resumo)

// Exportação para os testes automáticos
module.exports = {
    nomeTurno,
    meta,
    producaoInicial,
    pecasPorCaixa,
    producaoFinal,
    caixasNecessarias,
    situacaoMeta,
    resumo
}