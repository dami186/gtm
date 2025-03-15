// Modal de Propostas
function abrirModalProposta() {
    document.getElementById("modal-proposta").style.display = "block";
}

function fecharModalProposta() {
    document.getElementById("modal-proposta").style.display = "none";
}

// Função para salvar uma nova proposta
function salvarProposta() {
    let cliente = document.getElementById("cliente").value;
    let data = document.getElementById("data").value;
    let vendedor = document.getElementById("vendedor").value;
    let valor = document.getElementById("valor").value;

    if (cliente && data && vendedor && valor) {
        let tabela = document.getElementById("tabela-propostas");
        let novaLinha = tabela.insertRow();

        novaLinha.innerHTML = `
            <td>${cliente}</td>
            <td>${data}</td>
            <td>${vendedor}</td>
            <td>R$ ${parseFloat(valor).toFixed(2)}</td>
            <td><button onclick="removerProposta(this)">🗑️</button></td>
        `;

        fecharModalProposta();
    } else {
        alert("Preencha todos os campos!");
    }
}

// Função para remover uma proposta
function removerProposta(botao) {
    let linha = botao.parentNode.parentNode;
    linha.parentNode.removeChild(linha);
}

// Função para abrir o modal de cliente
function abrirModalCliente() {
    document.getElementById("modal-cliente").style.display = "block";
}

// Função para fechar o modal de cliente
function fecharModalCliente() {
    document.getElementById("modal-cliente").style.display = "none";
}

// Função para salvar um novo cliente
function salvarCliente() {
    let nome = document.getElementById("nome").value;
    let cnpj = document.getElementById("cnpj").value;
    let endereco = document.getElementById("endereco").value;
    let segmento = document.getElementById("segmento").value;

    if (nome && cnpj && endereco && segmento) {
        let tabela = document.getElementById("tabela-clientes");
        let novaLinha = tabela.insertRow();

        novaLinha.innerHTML = `
            <td>${nome}</td>
            <td>${cnpj}</td>
            <td>${endereco}</td>
            <td>${segmento}</td>
            <td><button onclick="removerCliente(this)">🗑️</button></td>
        `;

        fecharModalCliente();
    } else {
        alert("Preencha todos os campos!");
    }
}

// Função para remover um cliente
function removerCliente(botao) {
    let linha = botao.parentNode.parentNode;
    linha.parentNode.removeChild(linha);
}
