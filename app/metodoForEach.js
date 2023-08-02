// cria var para conseguir puxar os livros na function
const elementoParaInserirLivros = document.getElementById('livros')
// cria var para puxar o total dos livros disponíveis
const elementoComValorTotalDeLivrosDisponiveis = document.getElementById('valor_total_livros_disponiveis')

// cria a function que recebe a listaDeLivros como argumento 
function exibirOsLivrosNaTela(listaDeLivros) {
  // Redefine o conteúdo do elemento com o id "valor_total_livros_disponiveis" para uma string vazia
  elementoComValorTotalDeLivrosDisponiveis.innerHTML = ''
  // Redefine o conteúdo do elemento com o id "livros" para uma string vazia
  elementoParaInserirLivros.innerHTML = ''
  // A função forEach() é usada para iterar sobre cada livro na listaDeLivros e executar o código dentro do bloco para cada livro.
  listaDeLivros.forEach(livro => {
    // let disponibilidade = verificarDisponibilidadeDoLivro(livro)
    let disponibilidade = livro.quantidade > 0 ? 'livro__imagens' : 'livro__imagens indisponivel'
    // código HTML que será inserido para cada livro
    elementoParaInserirLivros.innerHTML += `
        <div class="livro">
        <img class="${disponibilidade}" src="${livro.imagem}"
          alt="${livro.alt}" />
        <h2 class="livro__titulo">
          ${livro.titulo}
        </h2>
        <p class="livro__descricao">${livro.autor}</p>
        <p class="livro__preco" id="preco">R$${livro.preco.toFixed(2)}</p>
        <div class="tags">
          <span class="tag">${livro.categoria}</span>
        </div>
      </div>
        `
  })
}

// function verificarDisponibilidadeDoLivro(livro) {
//   if (livro.quantidade > 0 ){
//     return 'livro__imagens'
//   } else {
//     return 'livros__imagens indisponivel'
//   }
// }