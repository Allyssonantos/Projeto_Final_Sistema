// Lista de pizzas e bebidas disponíveis
const menuPizzas = [
    { id: 1, nome: "Mussarela", preco: 30 },
    { id: 2, nome: "Calabresa", preco: 32 },
    { id: 3, nome: "Portuguesa", preco: 35 }
];

const menuBebidas = [
    { id: 1, nome: "Refrigerante Lata", preco: 5 },
    { id: 2, nome: "Suco Natural", preco: 8 },
    { id: 3, nome: "Água", preco: 3 }
];

let carrinho = [];

// Função para adicionar itens ao carrinho
function adicionarAoCarrinho(tipo, id) {
    let itemSelecionado;
    
    if (tipo === "pizza") {
        itemSelecionado = menuPizzas.find(pizza => pizza.id === id);
    } else if (tipo === "bebida") {
        itemSelecionado = menuBebidas.find(bebida => bebida.id === id);
    }

    if (itemSelecionado) {
        let itemCarrinho = carrinho.find(item => item.nome === itemSelecionado.nome);
        if (itemCarrinho) {
            itemCarrinho.quantidade++;
        } else {
            carrinho.push({ nome: itemSelecionado.nome, preco: itemSelecionado.preco, quantidade: 1 });
        }
        atualizarCarrinho();
    }
}

// Atualiza o carrinho no HTML
function atualizarCarrinho() {
    let carrinhoHTML = document.getElementById("carrinho");
    let totalHTML = document.getElementById("total");
    carrinhoHTML.innerHTML = "";
    let total = 0;

    carrinho.forEach(item => {
        let itemHTML = document.createElement("li");
        itemHTML.textContent = `${item.quantidade}x ${item.nome} - R$ ${(item.preco * item.quantidade).toFixed(2)}`;
        carrinhoHTML.appendChild(itemHTML);
        total += item.preco * item.quantidade;
    });

    totalHTML.textContent = `Total: R$ ${total.toFixed(2)}`;
}

// Atualiza o carrinho no HTML e adiciona botões de remoção
function atualizarCarrinho() {
    let carrinhoHTML = document.getElementById("carrinho");
    let totalHTML = document.getElementById("total");
    carrinhoHTML.innerHTML = "";
    let total = 0;

    carrinho.forEach((item, index) => {
        let itemHTML = document.createElement("li");
        itemHTML.innerHTML = `${item.quantidade}x ${item.nome} - R$ ${(item.preco * item.quantidade).toFixed(2)}
            <button onclick="removerDoCarrinho(${index})">❌</button>`;
        carrinhoHTML.appendChild(itemHTML);
        total += item.preco * item.quantidade;
    });

    totalHTML.textContent = `Total: R$ ${total.toFixed(2)}`;
}

// Função para remover itens do carrinho
function removerDoCarrinho(index) {
    carrinho.splice(index, 1);
    atualizarCarrinho();
}

// Finalizar pedido
function finalizarPedido() {
    if (carrinho.length === 0) {
        alert("Seu carrinho está vazio!");
        return;
    }

    let metodoPagamento = prompt("Digite o método de pagamento (Cartão ou Dinheiro):");
    if (!metodoPagamento || (metodoPagamento.toLowerCase() !== "cartão" && metodoPagamento.toLowerCase() !== "dinheiro")) {
        alert("Método de pagamento inválido!");
        return;
    }

    alert("Pedido realizado com sucesso!");
    carrinho = [];
    atualizarCarrinho();
}
