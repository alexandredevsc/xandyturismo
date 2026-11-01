import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { buscarProdutoPorId } from "../services/api.js";
import styles from "./DetalheProduto.module.css";

//Formata o valor do pacote no padrão brasileiro.
const formatarPreco = (preco) =>
  new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(preco);

// Carrega e apresenta os detalhes de um pacote pelo id da URL.
function DetalheProduto() {
  const { id } = useParams();
  const [produto, setProduto] = useState(null);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState("");

  useEffect(() => {
    // Permite cancelar a consulta quando a página sai da tela.
    const controlador = new AbortController();

    async function carregarProduto() {
      try {
        const pacote = await buscarProdutoPorId(id, controlador.signal);

        if (!controlador.signal.aborted) {
          setProduto(pacote);
        }
      } catch (erroConsulta) {
        // Cancelamento não representa uma falha para o usuário.
        if (!controlador.signal.aborted) {
          setErro(
            "Não foi possível carregar os detalhes do pacote. Tente novamente mais tarde.",
          );
          console.error("Falha na consulta do pacote:", erroConsulta);
        }
      } finally {
        if (!controlador.signal.aborted) {
          setCarregando(false);
        }
      }
    }

    carregarProduto();

    // Cancela a consulta se o usuário sair desta página.
    return () => controlador.abort();
  }, [id]);

  if (carregando) {
    return <p role="status">Carregando detalhes do pacote</p>;
  }

  if (erro) {
    return <p role="alert">{erro}</p>;
  }

  if (!produto) {
    return (
      <section>
        <h1>Pacote não encontrado</h1>
        <p>Este pacote não existe ou não está mais disponível.</p>

        {/* Permite retornar à listagem de destinos */}
        <Link to="/produtos">Voltar ao catálogo</Link>
      </section>
    );
  }

  return (
    <section className={styles.pagina}>
      <Link className={styles.voltar} to="/produtos">
        Voltar ao catálogo
      </Link>

      <article className={styles.detalhe}>
        <img
          className={styles.imagem}
          src={produto.imagem}
          alt={`Destino Turístico: ${produto.nome}`}
        />

        <div className={styles.conteudo}>
          <span className={styles.categoria}>{produto.categoria}</span>
          <h1>{produto.nome}</h1>
          <p className={styles.descricao}>{produto.descricao}</p>

          <strong className={styles.preco}>
            {formatarPreco(produto.preco)}
          </strong>

          <p className={styles.estoque}>
            {produto.estoque > 0
              ? `${produto.estoque} Vagas disponíveis`
              : "Pacote esgotado"}
          </p>

          <button
            className={styles.botao}
            type="button"
            disabled={produto.estoque === 0}
          >
            Adicionar ao carrinho
          </button>
        </div>
      </article>
    </section>
  );
}

export default DetalheProduto;
