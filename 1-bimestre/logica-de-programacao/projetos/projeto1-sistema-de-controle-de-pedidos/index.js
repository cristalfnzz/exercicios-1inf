// CRIE SUA SOLUÇÃO ABAIXO ================
// 1. Dados do cliente
const cliente = "Mariana Silva"
const cidade = "Fortaleza"

// 2. Dados do produto
const produto = "Notebook Pro"
const categoria = "Notebook"
const preco = 3500
const quantidade = 2

// 3. Dados do desconto e pagamento
const descontoPercentual = 10
const valorPago = 7000

// 4. Cálculos
const subtotal = preco * quantidade
const valorDesconto = (subtotal * descontoPercentual) / 100
const valorFinal = subtotal - valorDesconto
const troco = valorPago - valorFinal

// 5. Resumo do pedido
const resumo =
console.log(`
==================================================
TECHSTORE SISTEMAS
RESUMO DO PEDIDO
==================================================

Cliente: ${cliente}
Cidade: ${cidade}

Produto: ${produto}
Categoria: ${categoria}
Quantidade: ${quantidade}
Preço unitário: R$ ${preco}

Subtotal: R$ ${subtotal}
Desconto: ${descontoPercentual}%
Valor do desconto: R$ ${valorDesconto}
Valor final: R$ ${valorFinal}

Valor pago: R$ ${valorPago}
Troco: R$ ${troco}

Obrigado pela compra!
==================================================
`)


// === FIM DO CÓDIGO =======================
// === NÃO FAZER NADA ABAIXO DESSA LINHA ===
module.exports = {
  cliente,
  cidade,
  produto,
  categoria,
  preco,
  quantidade,
  descontoPercentual,
  valorPago,
  subtotal,
  valorDesconto,
  valorFinal,
  troco,
  resumo
}