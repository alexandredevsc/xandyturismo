import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./ProdutoCard.module.css";
import { useCarrinho } from "../../../hooks/useCarrinho.js";

// Formata o preço sempre no padrão brasileiro.
const formatarPreco = (preco) =>
  new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(preco);

// Exibe as informações resumidas de um pacote no catálogo.
function ProdutoCard({ produto }) {
  const { adicionarAoCarrinho } = useCarrinho();
  return (
    <li className={styles.item}>
      <article className={styles.card}>
        <img
          className={styles.imagem}
          src={produto.imagem}
          alt={`Destino turístico: ${produto.nome}`}
        />

        <div className={styles.conteudo}>
          <span className={styles.categoria}>{produto.categoria}</span>

          <h2>{produto.nome}</h2>

          <p className={styles.descricao}>{produto.descricao}</p>

          <strong className={styles.preco}>
            {formatarPreco(produto.preco)}
          </strong>

          <div className={styles.acoes}>
            <Link to={`/produtos/${produto.id}`}>Ver detalhes</Link>

            {/* A ação real será ligada ao Contexto do carrinho depois. */}
            <button
              type="button"
              onClick={() => adicionarAoCarrinho(produto)}
              disabled={produto.estoque === 0}
            >
              {produto.estoque === 0 ? "Esgotado" : "Adicionar ao carrinho"}
            </button>
          </div>
        </div>
      </article>
    </li>
  );
}

ProdutoCard.propTypes = {
  produto: PropTypes.shape({
    id: PropTypes.string.isRequired,
    nome: PropTypes.string.isRequired,
    descricao: PropTypes.string.isRequired,
    preco: PropTypes.number.isRequired,
    categoria: PropTypes.string.isRequired,
    imagem: PropTypes.string.isRequired,
    estoque: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProdutoCard;
