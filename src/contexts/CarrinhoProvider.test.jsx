// @vitest-environment jsdom

import PropTypes from "prop-types";
import { act, renderHook } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { CarrinhoProvider } from "./CarrinhoProvider.jsx";
import { useCarrinho } from "../hooks/useCarrinho.js";

function Provedor({ children }) {
  return <CarrinhoProvider>{children}</CarrinhoProvider>;
}

Provedor.propTypes = {
  children: PropTypes.node.isRequired,
};

const pacote = {
  id: 1,
  nome: "Cancún - Mar Turquesa",
  preco: 7290,
  estoque: 2,
};

describe("CarrinhoProvider", () => {
  it("adiciona um pacote e calcula quantidade e valor total", () => {
    const { result } = renderHook(() => useCarrinho(), {
      wrapper: Provedor,
    });

    act(() => {
      result.current.adicionarAoCarrinho(pacote);
    });

    expect(result.current.itens).toHaveLength(1);
    expect(result.current.quantidadeTotal).toBe(1);
    expect(result.current.valorTotal).toBe(7290);
  });

  it("não permite quantidade acima do estoque", () => {
    const { result } = renderHook(() => useCarrinho(), {
      wrapper: Provedor,
    });

    act(() => {
      result.current.adicionarAoCarrinho(pacote);
      result.current.adicionarAoCarrinho(pacote);
      result.current.adicionarAoCarrinho(pacote);
    });

    expect(result.current.itens[0].quantidade).toBe(2);
    expect(result.current.quantidadeTotal).toBe(2);
  });

  it("mantém a quantidade mínima de uma unidade", () => {
    const { result } = renderHook(() => useCarrinho(), {
      wrapper: Provedor,
    });

    act(() => {
      result.current.adicionarAoCarrinho(pacote);
      result.current.atualizarQuantidade(pacote.id, 0);
    });

    expect(result.current.itens[0].quantidade).toBe(1);
  });

  it("remove e limpa os itens do carrinho", () => {
    const { result } = renderHook(() => useCarrinho(), {
      wrapper: Provedor,
    });

    act(() => {
      result.current.adicionarAoCarrinho(pacote);
      result.current.removerDoCarrinho(pacote.id);
    });

    expect(result.current.itens).toHaveLength(0);

    act(() => {
      result.current.adicionarAoCarrinho(pacote);
      result.current.limparCarrinho();
    });

    expect(result.current.quantidadeTotal).toBe(0);
    expect(result.current.valorTotal).toBe(0);
  });
});
