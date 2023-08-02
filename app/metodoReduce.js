// cria a function 
function calcularValorTotalDeLivrosDisponiveis(livros) {
    return livros.reduce((acc, livro) => acc + livro.preco, 0).toFixed(2)

    // se não me engano essa função nem foi usada no projeto
    // foi criado mais para demonstrar o método reduce
}