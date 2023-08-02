// cria a function 
function calcularValorTotalDeLivrosDisponiveis(livros) {
    return livros.reduce((acc, livro) => acc + livro.preco, 0).toFixed(2)
    /* Nesta linha, a função reduce() é aplicada no array de livros para calcular o valor total de 
    todos os livros disponíveis. O método reduce() acumula o valor total, somando cada preço de livro 
    (livro.preco) ao acumulador (acc), começando com um valor inicial de 0. O método toFixed(2) é chamado 
    para formatar o resultado com duas casas decimais.*/
}