// cria uma array vazia para os livros serem armazenados
let livros = []

// aqui busca os livros em json do seguinte link:
const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
// cria uma função para poder buscar os livros da API
getBuscarLivrosDaAPI()

// função assíncrona responsável por buscar os livros na API e aplicar desconto.
async function getBuscarLivrosDaAPI() {
    /* requisição assíncrona à URL da API definida em endpointDaAPI. 
       A palavra-chave await é usada para aguardar a resposta da 
       requisição antes de prosseguir com a execução do código.*/
    const res = await fetch(endpointDaAPI)
    // Aqui, a resposta da requisição é convertida para JSON usando o método json(). 
    livros = await res.json()
    // A função aplicarDesconto(livros) é chamada para aplicar o desconto de 30% nos preços dos livros obtidos da API.
    livros = aplicarDesconto(livros)
    // chamada dos livros
    exibirOsLivrosNaTela(livrosComDesconto)
}
