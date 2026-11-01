import { Link } from "react-router-dom";
import { useCarrinho } from "../hooks/useCarrinho.js";
import styles from "./Carrinho.module.css";

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
            <li key={item.produto.id} className={styles.item}>
              <img
                className={styles.imagem}
                src={item.produto.imagem}
                alt={`Destino turístico: ${item.produto.nome}`}
              />

              <div className={styles.informacoes}>
                <span className={styles.categoria}>
                  {item.produto.categoria}
                </span>

                <h2>{item.produto.nome}</h2>

                <strong>{formatarPreco(item.produto.preco)} </strong>

                <div className={styles.quantidade}>
                  <button
                    type="button"
                    aria-label={`Diminuir quantidade de ${item.produto.nome}`}
                    onClick={() =>
                      atualizarQuantidade(item.produto.id, item.quantidade - 1)
                    }
                  >
                    -
                  </button>

                  <span aria-label="Quantidade selecionada">
                    {item.quantidade}
                  </span>

                  <button
                    type="button"
                    aria-label={`Aumentar quantidade de ${item.produto.nome}`}
                    disabled={item.quantidade === item.produto.estoque}
                    onClick={() =>
                      atualizarQuantidade(item.produto.id, item.quantidade + 1)
                    }
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                type="button"
                className={styles.remover}
                onClick={() => removerDoCarrinho(item.produto.id)}
              >
                Remover
              </button>
            </li>
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
