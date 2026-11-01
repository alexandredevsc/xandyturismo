import { useEffect, useMemo, useState } from "react";
import { buscarProdutos } from "../services/api.js";
import ProdutoCard from "../components/molecules/ProdutoCard/ProdutoCard.jsx";
import { filtrarProdutos } from "../utils/filtrarProdutos.js";
import styles from "./Produtos.module.css";
import bannerHeroCentro from "../assets/images/banner-hero-centro.png";
import GppGoodOutlinedIcon from "@mui/icons-material/GppGoodOutlined";
import ConfirmationNumberOutlinedIcon from "@mui/icons-material/ConfirmationNumberOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";

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
    <>
      <section
        className={styles.hero}
        style={{ "--imagem-hero": `url(${bannerHeroCentro})` }}
      >
        <div className={styles.heroConteudo}>
          <p className={styles.heroIdentificacao}>XANDY TURISMO</p>

          <h1>
            Explore
            <br />
            o Mundo com
            <br />a <span>XandyTurismo</span>
          </h1>

          <div className={styles.linhaDestaque} />

          <p className={styles.heroTexto}>
            Pacotes turísticos para viver experiências que conectam você ao
            mundo.
          </p>

          <a className={styles.heroBotao} href="#catalogo">
            Conhecer pacotes
          </a>

          <ul className={styles.beneficios}>
            <li>
              <GppGoodOutlinedIcon aria-hidden="true" />
              <span>
                Viagens
                <br />
                seguras
              </span>
            </li>
            <li>
              <ConfirmationNumberOutlinedIcon aria-hidden="true" />
              <span>
                Pacotes
                <br />
                completos
              </span>
            </li>
            <li>
              <SupportAgentOutlinedIcon aria-hidden="true" />
              <span>
                Atendimento
                <br />
                personalizado
              </span>
            </li>
            <li>
              <PublicOutlinedIcon aria-hidden="true" />
              <span>
                Destinos
                <br />
                incríveis
              </span>
            </li>
          </ul>
        </div>
      </section>

      <section id="catalogo" className={styles.catalogo}>
        <header className={styles.cabecalhoCatalogo}>
          <p>DESTINOS INESQUECÍVEIS</p>
          <h2>Encontre a sua próxima viagem</h2>
          <span>Escolha um destino e comece a planejar sua experiência</span>
        </header>

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
              <label htmlFor="busca">Para onde você quer viajar?</label>

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
    </>
  );
}

export default Produtos;
