const prompt = require("prompt-sync")()

// RF01 - Registro do pedido
const precoUnitario = Number(prompt("Digite o preço unitário: "))
const quantidade = Number(prompt("Digite a quantidade: "))
const formaPagamento = prompt("Digite a forma de pagamento (pix, cartao ou dinheiro): ")

// RF02 - Função para calcular o subtotal
const calcularSubtotal = (preco, quantidade) => {
    return preco * quantidade
}

// RF03 - Função para calcular o frete
function calcularFrete(subtotal) {
    if (subtotal >= 100) {
        return 0
    } else {
        return 10
    }
}

// RF04 - Função para calcular o desconto
function calcularDesconto(subtotal, formaPagamento) {
    let percentual = 0

    switch (formaPagamento) {
        case "pix":
        case "dinheiro":
            percentual = 5
            break

        case "cartao":
            percentual = 0
            break
    }

    return subtotal * percentual / 100
}

// RF05 - Função para calcular o total
function calcularTotal(preco, quantidade, formaPagamento) {
    const subtotal = calcularSubtotal(preco, quantidade)
    const frete = calcularFrete(subtotal)
    const desconto = calcularDesconto(subtotal, formaPagamento)

    return subtotal - desconto + frete
}

// RF06 - Resumo do pedido
const subtotal = calcularSubtotal(precoUnitario, quantidade)
const frete = calcularFrete(subtotal)
const desconto = calcularDesconto(subtotal, formaPagamento)
const total = calcularTotal(precoUnitario, quantidade, formaPagamento)

const resumo = `
===== RESUMO DO PEDIDO =====
Subtotal: R$ ${subtotal}
Frete: R$ ${frete}
Desconto: R$ ${desconto}
Total: R$ ${total}
============================
`

console.log(resumo)

// Exportação para os testes automáticos
module.exports = {
    precoUnitario,
    quantidade,
    formaPagamento,
    calcularSubtotal,
    calcularFrete,
    calcularDesconto,
    calcularTotal,
    subtotal,
    frete,
    desconto,
    total,
    resumo
}