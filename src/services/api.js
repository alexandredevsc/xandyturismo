// Endereço da API simulada durante o desenvolvimento local
const API_URL = "http://localhost:3001";

// Consulta os pacotes e aceita um sinal para cancelar a requisição
export async function buscarProdutos(signal) {
  const resposta = await fetch(`${API_URL}/produtos`, { signal });

  // O fetch não rejeita automaticamente respostas HTTP como 404 e 500
  if (!resposta.ok) {
    throw new Error(`Erro ao consultar produtos: HTTP ${resposta.status}`);
  }

  const produtos = await resposta.json();

  // Garante que a página receba uma lista
  if (!Array.isArray(produtos)) {
    throw new Error("A API retornou uma lista de produtos inválida.");
  }

  return produtos;
}