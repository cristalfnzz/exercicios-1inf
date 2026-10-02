//RF 1 — Registro do pedido
const cliente = "Thiago Moraes"
const opcaoMenu= 4
const quantidade = 2
const formaPagamento = "dinheiro"
const statusPedido = "aprovado"

//RF02 — Identificação do item
let prato
switch (opcaoMenu) {
    case 1:
        prato = "Marmita Pequena"
        break
    case 2:
        prato = "Marmita Grande"
        break
    case 3:
        prato = "Suco Natural"
        break
    case 4:
        prato = "Pudim"
        break
    default:
        prato = "Opção inválida" }
        
//RF03 — Preço unitário
        let precoUnitario 

    switch (opcaoMenu) {
        case 1: 
        precoUnitario = 16 
        case 2: 
        precoUnitario = 22
        case 3: 
        precoUnitario = 7
        case 4: 
        precoUnitario = 9
     break
        default: 
        precoUnitario = 0 
    }

//RF04 — Cálculo do subtotal
const subtotal= precoUnitario * quantidade

//RF05 — Frete
const freteStatus = subtotal >= 80 ? "Frete grátis" : "Frete pago"
const frete = subtotal >= 80 ? 0 : 15

//RF06 — Mensagem da forma de pagamento
let pagamentoMensagem 

switch (formaPagamento) { 
      case "pix":
        pagamentoMensagem = "Pagamento via PIX"
        break
    case "cartao":
        pagamentoMensagem = "Pagamento via cartão"
        break
    case "dinheiro":
        pagamentoMensagem = "Pagamento em dinheiro"
        break
    default:
        pagamentoMensagem = "Forma de pagamento inválida"
}
//RF07 — Desconto e total
let descontoPercentual 
switch (formaPagamento) {
    case "pix":
    case "cartao":
        descontoPercentual = 15
        break;
    case "dinheiro":
        descontoPercentual = 0
        break
    default:
        descontoPercentual = 0
}


const desconto = subtotal * descontoPercentual / 100
const total = subtotal - desconto + frete
//RF08 — Situação do pedido
let statusMensagem;

switch (statusPedido) {
    case "pendente":
        statusMensagem = "Aguardando pagamento"
        break
    case "aprovado":
        statusMensagem = "Pedido em preparo"
        break
    case "enviado":
        statusMensagem = "Pedido a caminho"
        break;
    case "cancelado":
        statusMensagem = "Pedido cancelado"
        break;
    default:
        statusMensagem = "Status desconhecido"
}

//RF09 — Resumo do pedido
const resumo = `
Resumo do pedido
Cliente: ${cliente}
Item: ${prato}
Quantidade: ${quantidade}
Subtotal: R$ ${subtotal}
Frete: ${freteStatus}
Forma de pagamento: ${pagamentoMensagem}
Desconto: R$ ${desconto}
Total: R$ ${total}
Situação: ${statusMensagem}
`

console.log(resumo)

module.exports = {
    cliente,
    opcaoMenu,
    quantidade,
    formaPagamento,
    statusPedido,
    prato,
    precoUnitario,
    subtotal,
    freteStatus,
    frete,
    pagamentoMensagem,
    descontoPercentual,
    desconto,
    total,
    statusMensagem,
    resumo
}