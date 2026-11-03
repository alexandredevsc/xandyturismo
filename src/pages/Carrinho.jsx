import { Link } from "react-router-dom";
import { useCarrinho } from "../hooks/useCarrinho.js";
import styles from "./Carrinho.module.css";
import ItemCarrinho from "../components/molecules/ItemCarrinho/ItemCarrinho.jsx";

// Formata valores monetários no padrão brasileiro
const formatarPreco = (preco) =>
  new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(preco);

// Estrutura inicial da página; os itens virão do contexto depois
function Carrinho() {
  const { itens, valorTotal, atualizarQuantidade, removerDoCarrinho } =
    useCarrinho();

  if (itens.length === 0) {
    return (
      <section className={styles.estadoVazio}>
        <h1>Seu carrinho está vazio</h1>
        <p>Escolha um destino para começar a planejar sua viagem.</p>

        <Link className={styles.botaoPrincipal} to="/produtos">
          Explorar destinos
        </Link>
      </section>
    );
  }

  return (
    <section className={styles.pagina}>
      <header className={styles.cabecalho}>
        <p>SEUS PACOTES</p>
        <h1>Seu carrinho</h1>
        <span>Revise seus destinos antes de seguir para o pagamento.</span>
      </header>

      <div className={styles.conteudo}>
        <ul className={styles.lista}>
          {itens.map((item) => (
            <ItemCarrinho
              key={item.produto.id}
              item={item}
              classes={styles}
              formatarPreco={formatarPreco}
              onAtualizarQuantidade={atualizarQuantidade}
              onRemover={removerDoCarrinho}
            />
          ))}
        </ul>

        <aside className={styles.resumo}>
          <h2>Resumo do pedido</h2>

          <div>
            <span>Total</span>
            <strong>{formatarPreco(valorTotal)}</strong>
          </div>

          <Link className={styles.botaoPrincipal} to="/pagamento">
            Ir para pagamento
          </Link>

          <Link className={styles.continuar} to="/produtos">
            Continuar explorando
          </Link>
        </aside>
      </div>
    </section>
  );
}

export default Carrinho;
