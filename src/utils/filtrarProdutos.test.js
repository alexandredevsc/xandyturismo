import { describe, expect, it } from "vitest";
import { filtrarProdutos } from "./filtrarProdutos.js";

const produtos = [
  {
    id: 1,
    nome: "Cancún - Mar Turquesa",
    categoria: "Caribe",
    descricao: "Praias de areia branca e mar azul.",
  },
  {
    id: 2,
    nome: "Roma - Caminhos da História",
    categoria: "Europa",
    descricao: "Conheça a história e a culinária italiana.",
  },
];

describe("filtrarProdutos", () => {
  it("retorna todos os produtos quando a busca está vazia", () => {
    expect(filtrarProdutos(produtos, "   ")).toEqual(produtos);
  });

  it("encontra um produto pelo nome sem diferenciar maiúsculas e minúsculas", () => {
    const resultado = filtrarProdutos(produtos, "cAnCúN");

    expect(resultado).toEqual([produtos[0]]);
  });

  it("encontra um produto pela categoria", () => {
    const resultado = filtrarProdutos(produtos, "europa");

    expect(resultado).toEqual([produtos[1]]);
  });

  it("encontra um produto pela descrição", () => {
    const resultado = filtrarProdutos(produtos, "culinária");

    expect(resultado).toEqual([produtos[1]]);
  });

  it("retorna uma lista vazia quando não há correspondência", () => {
    expect(filtrarProdutos(produtos, "Antártida")).toEqual([]);
  });
});