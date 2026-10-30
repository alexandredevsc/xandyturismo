// Filtra a lista sem alterar os produtos originais.
export function filtrarProdutos(produtos, termoBusca) {
  const termoNormalizado = termoBusca.trim().toLocaleLowerCase("pt-BR");

  // Sem texto de busca, mantém a lista completa.
  if (!termoNormalizado) {
    return produtos;
  }

  return produtos.filter((produto) => {
    const conteudoPesquisavel = [
      produto.nome,
      produto.categoria,
      produto.descricao,
    ]
      .join(" ")
      .toLocaleLowerCase("pt-BR");

    return conteudoPesquisavel.includes(termoNormalizado);
  });
}