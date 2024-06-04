document.addEventListener("DOMContentLoaded", function() {
    var carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    console.log("Itens carregados do carrinho na página de pagamento:", carrinho);
    atualizarResumoCarrinho(carrinho);
    atualizarTabelaMetodosPagamento();
});

function atualizarResumoCarrinho(carrinho) {
    let tabela = document.querySelector("#carrinho tbody");
    let total = 0;

    tabela.innerHTML = "";

    carrinho.forEach(function(item) {
        let linha = document.createElement("tr");
        linha.innerHTML = `<td>${item.nome}</td><td>${item.preco.toFixed(2)}</td><td>1</td>`;
        tabela.appendChild(linha);
        total += item.preco;
    });

    document.querySelector("#totalPagamento").textContent = total.toFixed(2);
}

function atualizarTabelaMetodosPagamento() {
    let tabela = document.querySelector("#metodosPagamento tbody");
    tabela.innerHTML = "";

    let linhaCartao = document.createElement("tr");
    linhaCartao.innerHTML = `<td>Cartão de Crédito</td><td><button class="btn btn-warning">Pagar com cartão</button></td>`;
    tabela.appendChild(linhaCartao);

    let linhaPix = document.createElement("tr");
    linhaPix.innerHTML = `<td>PIX</td><td><button class="btn btn-warning">Pagar com PIX</button></td>`;
    tabela.appendChild(linhaPix);

    let linhaBoleto = document.createElement("tr");
    linhaBoleto.innerHTML = `<td>Boleto Bancário</td><td><button class="btn btn-warning">Gerar boleto</button></td>`;
    tabela.appendChild(linhaBoleto);
}
