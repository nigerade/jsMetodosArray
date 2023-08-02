// cria a função
function aplicarDesconto(livros) {
    // cria var desconto com valor já definido
    const desconto = 0.3

    /* Aqui é criada uma variável livrosComDesconto para armazenar os livros com os descontos aplicados. 
        O método map() é utilizado no array de livros recebido como argumento para criar um novo array com as 
        alterações que serão feitas em cada livro. */
    livrosComDesconto = livros.map(livro => {
        return { ...livro, preco: livro.preco - (livro.preco * desconto) }
    })

    // retorna os livros com os descontos 
    return livrosComDesconto

    // se não me engano essa função nem foi usada no projeto
    // foi criado mais para demonstrar o método map
}