// Este método JS irá organizar todos os livros por preço
// começando do mais barato até o mais caro

// declara variavel para o botão
let btnOdenarPorPreco = document.getElementById('btnOrdenarPorPreco')
// ao clicar no botão chama a function ordernarLivrosPorPreco (Event Listener)
btnOdenarPorPreco.addEventListener('click', ordenarLivrosPorPreco)

// cria a function
function ordenarLivrosPorPreco() {
    // cria a variavel que organiza os livros a partir do mais barato
    let lirvosOrdenados = livros.sort((a, b) => a.preco - b.preco)
    // mostra os livros
    exibirOsLivrosNaTela(lirvosOrdenados)
}