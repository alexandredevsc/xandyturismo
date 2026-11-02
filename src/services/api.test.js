import { afterEach, describe, expect, it, vi } from "vitest";
import { buscarProdutoPorId, buscarProdutos } from "./api.js";

afterEach(() => {
  vi.unstubAllGlobals();
  vi.restoreAllMocks();
});

describe("buscarProdutos", () => {
  it("retorna a lista recebida da API", async () => {
    const produtos = [{ id: 1, nome: "Cancún" }];
    const json = vi.fn().mockResolvedValue(produtos);

    vi.stubGlobal("fetch", vi.fn().mockResolvedValue({ ok: true, json }));

    await expect(buscarProdutos()).resolves.toEqual(produtos);
    expect(fetch).toHaveBeenCalledWith("http://localhost:3001/produtos", {
      signal: undefined,
    });
  });

  it("informa o status quando a API responde com erro", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({ ok: false, status: 500 }),
    );

    await expect(buscarProdutos()).rejects.toThrow(
      "Erro ao consultar produtos: HTTP 500",
    );
  });

  it("rejeita uma resposta que não é uma lista", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: true,
        json: vi.fn().mockResolvedValue({ nome: "Cancún" }),
      }),
    );

    await expect(buscarProdutos()).rejects.toThrow(
      "A API retornou uma lista de produtos inválida.",
    );
  });
});

describe("buscarProdutoPorId", () => {
  it("retorna null quando o pacote não existe", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({ ok: false, status: 404 }),
    );

    await expect(buscarProdutoPorId(999999)).resolves.toBeNull();
  });

  it("retorna o pacote encontrado", async () => {
    const produto = { id: 1, nome: "Cancún" };

    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: true,
        status: 200,
        json: vi.fn().mockResolvedValue(produto),
      }),
    );

    await expect(buscarProdutoPorId(1)).resolves.toEqual(produto);
  });
});