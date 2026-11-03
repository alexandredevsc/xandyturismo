import { useMemo, useState } from "react";
import PropTypes from "prop-types";
import { CarrinhoContext } from "./CarrinhoContext.js";

// Centraliza os dados e as ações do carrinho.
export function CarrinhoProvider({ children }) {
  const [itens, setItens] = useState([]);

  function adicionarAoCarrinho(produto) {
    if (produto.estoque === 0) {
      return;
    }

    setItens((itensAtuais) => {
      const itemExistente = itensAtuais.find(
        (item) => item.produto.id === produto.id,
      );

      if (!itemExistente) {
        return [...itensAtuais, { produto, quantidade: 1 }];
      }

      return itensAtuais.map((item) =>
        item.produto.id === produto.id
          ? {
              ...item,
              quantidade: Math.min(item.quantidade + 1, produto.estoque),
            }
          : item,
      );
    });
  }

  function atualizarQuantidade(id, quantidade) {
    setItens((itensAtuais) =>
      itensAtuais.map((item) =>
        item.produto.id === id
          ? {
              ...item,
              quantidade: Math.min(
                Math.max(quantidade, 1),
                item.produto.estoque,
              ),
            }
          : item,
      ),
    );
  }

  function removerDoCarrinho(id) {
    setItens((itensAtuais) =>
      itensAtuais.filter((item) => item.produto.id !== id),
    );
  }

  function limparCarrinho() {
    setItens([]);
  }

  const quantidadeTotal = useMemo(
    () => itens.reduce((total, item) => total + item.quantidade, 0),
    [itens],
  );

  const valorTotal = useMemo(
    () =>
      itens.reduce(
        (total, item) => total + item.produto.preco * item.quantidade,
        0,
      ),
    [itens],
  );

  return (
    <CarrinhoContext.Provider
      value={{
        itens,
        quantidadeTotal,
        valorTotal,
        adicionarAoCarrinho,
        atualizarQuantidade,
        removerDoCarrinho,
        limparCarrinho,
      }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
}

CarrinhoProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
