function adicionarAoCarrinho(nome, preco, quantidade) {
    var carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

    for (let i = 0; i < quantidade; i++) {
        let item = { nome: nome, preco: preco };
        carrinho.push(item);
    }

    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    atualizarTabelaCarrinho(carrinho);
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

function atualizarTabelaCarrinho(carrinho) {
    let tabela = document.querySelector("#carrinho tbody");
    let total = 0;

    tabela.innerHTML = "";

    carrinho.forEach(function(item, index) {
        let linha = document.createElement("tr");
        linha.innerHTML = `<td>${item.nome}</td><td>${item.preco.toFixed(2)}</td><td><button onclick="removerDoCarrinho(${index})" class="btn btn-warning">Remover</button></td>`;
        tabela.appendChild(linha);
        total += item.preco;
    });

    document.querySelector("#total").textContent = total.toFixed(2);
    let btnPagamento = document.querySelector("#btnPagamento");
    if (carrinho.length > 0) {
        btnPagamento.removeAttribute("disabled");
    } else {
        btnPagamento.setAttribute("disabled", "true");
    }
}

function removerDoCarrinho(index) {
    var carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    carrinho.splice(index, 1);
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    alert("Item removido do carrinho");
    atualizarTabelaCarrinho(carrinho);
}

function limparCarrinho() {
    localStorage.removeItem("carrinho");
    atualizarTabelaCarrinho([]);
}

document.addEventListener("DOMContentLoaded", function() {
    var carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    atualizarTabelaCarrinho(carrinho);
});

function seguirParaPagamento() {
    var carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    if (carrinho.length > 0) {
        window.location.href = "home.html";
    } else {
        alert("Por favor, adicione itens ao carrinho antes de prosseguir para o pagamento.");
    }
}



let carrinho = [];
const tabelaCorpo = document.querySelector("#carrinho tbody");
const totalTd = document.getElementById("total");

function adicionarItem(nome, preco) {
    carrinho.push({ nome, preco });
    atualizarTabela();
}

function removerItem(index) {
    carrinho.splice(index, 1);
    atualizarTabela();
}

function atualizarTabela() {
    tabelaCorpo.innerHTML = "";
    let total = 0;

    carrinho.forEach((item, index) => {
        const linha = document.createElement("tr");
        linha.innerHTML = `
            <td>${item.nome}</td>
            <td>R$ ${item.preco.toFixed(2)}</td>
            <td><button onclick="removerItem(${index})" class="btn btn-danger">Remover</button></td>
        `;
        tabelaCorpo.appendChild(linha);
        total += item.preco;
    });

    totalTd.textContent = `R$ ${total.toFixed(2)}`;
}

function mostrarFormularioPagamento() {
    const metodoPagamento = document.getElementById('metodoPagamento').value;
    const formularioPagamento = document.getElementById('formularioPagamento');

    if (metodoPagamento === 'credito') {
        formularioPagamento.innerHTML = `
            <div class="form-group">
                <label for="numeroCartaoCredito">Número do Cartão</label>
                <input type="text" class="form-control" id="numeroCartaoCredito">
            </div>
            <div class="form-group">
                <label for="nomeCartaoCredito">Nome do Titular do Cartão</label>
                <input type="text" class="form-control" id="nomeCartaoCredito">
            </div>
            <div class="form-group">
                <label for="validadeCartaoCredito">Qual a Data de Validade?</label>
                <input type="text" class="form-control" id="validadeCartaoCredito">
            </div>
            <div class="form-group">
                <label for="cvvCartaoCredito">CVV</label>
                <input type="text" class="form-control" id="cvvCartaoCredito">
            </div>
        `;
    } else if (metodoPagamento === 'debito') {
        formularioPagamento.innerHTML = `
            <div class="form-group">
                <label for="numeroCartaoDebito">Número do Cartão</label>
                <input type="text" class="form-control" id="numeroCartaoDebito">
            </div>
            <div class="form-group">
                <label for="nomeCartaoDebito">Nome do Titular do Cartão</label>
                <input type="text" class="form-control" id="nomeCartaoDebito">
            </div>
            <div class="form-group">
                <label for="validadeCartaoDebito">Qual a Data de Validade?</label>
                <input type="text" class="form-control" id="validadeCartaoDebito">
            </div>
            <div class="form-group">
                <label for="cvvCartaoDebito">CVV</label>
                <input type="text" class="form-control" id="cvvCartaoDebito">
            </div>
        `;
    } else if (metodoPagamento === 'pix') {
        formularioPagamento.innerHTML = `
            <div class="form-group">
                <label for="chavePix">Chave PIX (Copie e cole o código gerado abaixo) </label>
                <h6> ee768344-9e63-436d-a6c6-f617dfc55193 </h6>
                <label>*obs: Após efetuar o pagamento, encaminhe um print do comprovante de pagamento para o e-mail "Maisde8000@kamemail.com" utilizando o e-mail cadastrado na loja. </label>
            </div>
        `;
    } else {
        formularioPagamento.innerHTML = '';
    }
}

function finalizarPagamento() {
    const metodoPagamento = document.getElementById('metodoPagamento').value;
    if (metodoPagamento === '') {
        alert('Por favor, selecione um método de pagamento.');
        return;
    }
    alert('Pagamento finalizado com sucesso! Agradecemos pela preferência >_<');
}