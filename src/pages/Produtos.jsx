import { useEffect, useMemo, useState } from "react";
import { buscarProdutos } from "../services/api.js";
import ProdutoCard from "../components/molecules/ProdutoCard/ProdutoCard.jsx";
import { filtrarProdutos } from "../utils/filtrarProdutos.js";
import styles from "./Produtos.module.css";

// Carrega o catálogo e apresenta os estados da consulta.
function Produtos() {
  const [produtos, setProdutos] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState("");
  const [termoBusca, setTermoBusca] = useState("");

  // Atualiza o resultado apenas quando os produtos ou a busca mudam.
  const produtosFiltrados = useMemo(
    () => filtrarProdutos(produtos, termoBusca),
    [produtos, termoBusca],
  );

  useEffect(() => {
    // Permite cancelar a consulta quando a página sai da tela.
    const controlador = new AbortController();

    async function carregarProdutos() {
      try {
        const lista = await buscarProdutos(controlador.signal);

        if (!controlador.signal.aborted) {
          setProdutos(lista);
        }
      } catch (erroConsulta) {
        // Cancelamento não representa uma falha para o usuário.
        if (!controlador.signal.aborted) {
          setErro(
            "Não foi possível carregar os pacotes. Tente novamente mais tarde.",
          );
          console.error("Falha na consulta do catálogo:", erroConsulta);
        }
      } finally {
        if (!controlador.signal.aborted) {
          setCarregando(false);
        }
      }
    }

    carregarProdutos();

    // Executa a limpeza ao desmontar ou reiniciar este efeito.
    return () => controlador.abort();
  }, []);

  return (
    <section>
      <h1>Explore nossos destinos</h1>
      <p>Encontre seu próximo destino com a XandyTurismo.</p>

      {/* Apresenta o resultado atual da consulta. */}
      {carregando ? (
        <p role="status">Carregando pacotes...</p>
      ) : erro ? (
        <p role="alert">{erro}</p>
      ) : produtos.length === 0 ? (
        <p>Nenhum pacote disponível no momento.</p>
      ) : (
        <>
          <div className={styles.busca}>
            <label htmlFor="busca">Buscar pacote</label>

            <div className={styles.campoBusca}>
              <input
                id="busca"
                type="search"
                value={termoBusca}
                onChange={(evento) => setTermoBusca(evento.target.value)}
                placeholder="Ex.: Caribe, Roma ou praia"
              />

              {termoBusca && (
                <button type="button" onClick={() => setTermoBusca("")}>
                  Limpar
                </button>
              )}
            </div>
          </div>

          {produtosFiltrados.length === 0 ? (
            <p>Nenhum pacote foi encontrado para esta busca.</p>
          ) : (
            <ul className={styles.listaProdutos}>
              {produtosFiltrados.map((produto) => (
                <ProdutoCard key={produto.id} produto={produto} />
              ))}
            </ul>
          )}
        </>
      )}
    </section>
  );
}

export default Produtos;
