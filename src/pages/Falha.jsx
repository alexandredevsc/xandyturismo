import { Link } from "react-router-dom";
import styles from "./ResultadoPagamento.module.css";

// Apresenta o resultado de falha da compra fictícia
function Falha() {
  return (
    <section className={styles.pagina}>
      <div className={styles.cartao}>
        <p className={styles.icone} aria-hidden="true">
          !
        </p>

        <h1 className={`${styles.titulo} ${styles.falha}`}>
          Compra não aprovada!
        </h1>

        {/* Preserva a mensagem exata exigida pelo edital */}

        <p className={styles.texto}>tentativa de golpe</p>

        <p className={styles.texto}>
          Seus pacotes continuam no carrinho. Confira os dados fictícios e tente
          novamente.
        </p>

        {/* Retorna ao pagamento para uma nova tentativa */}
        <Link className={styles.botao} to="/pagamento">
          Tentar novamente
        </Link>
      </div>
    </section>
  );
}

export default Falha;
