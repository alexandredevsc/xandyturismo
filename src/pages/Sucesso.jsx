import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useCarrinho } from "../hooks/useCarrinho.js";
import styles from "./ResultadoPagamento.module.css";

// Apresenta o resultado de aprovação e limpa o carrinho ao concluir a compra.
function Sucesso() {
  const { limparCarrinho } = useCarrinho();
  const carrinhoFoiLimpo = useRef(false);

  useEffect(() => {
    if (carrinhoFoiLimpo.current) {
      return;
    }

    limparCarrinho();
    carrinhoFoiLimpo.current = true;
  }, [limparCarrinho]);

  return (
    <section className={styles.pagina}>
      <div className={styles.cartao}>
        <p className={styles.icone} aria-hidden="true">
          ✓
        </p>
        <h1 className={styles.titulo}>Compra fictícia aprovada!</h1>
        <p className={styles.texto}>
          Sua simulação foi concluída. Nenhuma cobrança foi realizada.
        </p>
        <Link className={styles.botao} to="/produtos">
          Explorar novos destinos
        </Link>
      </div>
    </section>
  );
}

export default Sucesso;
