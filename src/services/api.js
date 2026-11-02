import dados from "../../db.json";

// Endereço da API simulada durante o desenvolvimento local.
const API_URL = "http://localhost:3001";

// Na publicação estática, usa os mesmos dados com imagens públicas.
const produtosPublicos = dados.produtos.map((produto) => ({
  ...produto,
  imagem: produto.imagem.replace(
    "/src/assets/images/destinos/",
    "/destinos/",
  ),
}));

// Consulta os pacotes e aceita um sinal para cancelar a requisição.
export async function buscarProdutos(signal) {
  if (import.meta.env.PROD) {
    return produtosPublicos;
  }

  const resposta = await fetch(`${API_URL}/produtos`, { signal });

  if (!resposta.ok) {
    throw new Error(`Erro ao consultar produtos: HTTP ${resposta.status}`);
  }

  const produtos = await resposta.json();

  if (!Array.isArray(produtos)) {
    throw new Error("A API retornou uma lista de produtos inválida.");
  }

  return produtos;
}

// Consulta um pacote pelo identificador presente na URL.
export async function buscarProdutoPorId(id, signal) {
  if (import.meta.env.PROD) {
    return produtosPublicos.find((produto) => produto.id === id) ?? null;
  }

  const resposta = await fetch(`${API_URL}/produtos/${id}`, { signal });

  if (resposta.status === 404) {
    return null;
  }

  if (!resposta.ok) {
    throw new Error(`Erro ao consultar produto: HTTP ${resposta.status}`);
  }

  return resposta.json();
}