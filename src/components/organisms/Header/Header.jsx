import { Link } from "react-router-dom";
import simbolo from "../../../assets/brand/simbolo-xandyturismo-256.png";
import styles from "./Header.module.css";
import { useCarrinho } from "../../../hooks/useCarrinho.js";

// Apresenta a marca e a navegação principal
function Header() {
  const { quantidadeTotal } = useCarrinho();
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Agrupa símbolo e textos em um único link */}
        <Link to="/produtos" className={styles.marca}>
          <img src={simbolo} alt="" width="64" height="64" />
          <span>
            <span className={styles.nome}>XandyTurismo</span>
            <span className={styles.subtitulo}>Tour Internacional</span>
          </span>
        </Link>

        {/* Permite navegar entre catálogo e carrinho */}
        <nav aria-label="Navegação principal" className={styles.navegacao}>
          <Link to="/produtos">Produtos</Link>
          <Link
            to="/carrinho"
            aria-label={`Carrinho com ${quantidadeTotal}pacote(s)`}
          >
            Carrinho ({quantidadeTotal})
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
