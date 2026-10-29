import { Outlet } from "react-router-dom";
import Header from "../../organisms/Header/Header.jsx";
import Footer from "../../organisms/Footer/Footer.jsx";
import styles from "./Layout.module.css";

// Compartilha a estrutura principal entre as páginas

function Layout() {
  return (
    <div className={styles.layout}>
      <Header />
      {/* Reserva espaço para a página e mantém distância das bordas*/}

      <main id="conteudo-principal" className={styles.conteudo}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
