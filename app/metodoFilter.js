// cria uma variavel para armazenar uma lista de todos os elementos HTML que têm a classe "btn"
const botoes = document.querySelectorAll('.btn')
// loop forEach() é usado para adicionar um ouvinte de eventos para cada botão. Quando um botão é clicado, a função filtrarLivros() será chamada.
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros))

// cria a function filtrarLivros()
function filtrarLivros() {
    // Essa linha busca o elemento do botão que foi clicado usando o id do botão que acionou o evento.
    const elementoBtn = document.getElementById(this.id)
    // Aqui, a variável categoria é definida para armazenar o valor do atributo value do botão clicado
    const categoria = elementoBtn.value
    /* Essa linha utiliza um operador ternário para decidir se deve chamar a função filtrarPorDisponibilidade() 
    (se a categoria for 'disponivel') ou a função FiltrarPorCategoria(categoria) (se a categoria for diferente de 'disponivel') 
    para obter a lista de livros filtrados. */
    let livrosFiltrados = categoria == 'disponivel' ? filtrarPorDisponibilidade() : FiltrarPorCategoria(categoria)
    // exibe os livros filtrados na tela 
    exibirOsLivrosNaTela(livrosFiltrados)
    // Se a categoria selecionada for 'disponivel', o código dentro do bloco será executado.
    if (categoria == 'disponivel') {
        // cria a var para calcular o valor total dos livros disponíveis na lista filtrada.
        const valorTotal = calcularValorTotalDeLivrosDisponiveis(livrosFiltrados)
        // exibi o valor total dos livros disponíveis na tela.
        exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal)
    }
}

// cria a function filtrarPorCategoria() com o argumento categoria
function FiltrarPorCategoria(categoria) {
    // retorna um array de livros filtrado pela categoria informada.
    return livros.filter(livro => livro.categoria == categoria)
}

// cria a function filtrarPorDisponibilidade()
function filtrarPorDisponibilidade() {
    // retorna um array de livros filtrado para conter apenas os livros com quantidade maior que zero (ou seja, os livros disponíveis).
    return livros.filter(livro => livro.quantidade > 0)
}

// cria a function exibirValorTotalDosLivrosDisponiveisNaTela() com o argumento valorTotal
function exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal) {
    // retorna com o seguinte código HTML:
    elementoComValorTotalDeLivrosDisponiveis.innerHTML = `
    <div class="livros__disponiveis">
    <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
    </div>
    `
}