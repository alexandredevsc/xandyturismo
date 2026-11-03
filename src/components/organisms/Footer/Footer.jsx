import styles from "./Footer.module.css";
// Identifica a marca e esclarece o caráter demonstrativo do projeto
function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.marca}>XandyTurismo - Tour Internacional</p>
        <p className={styles.slogan}>
          Experiências que conectam você ao mundo.
        </p>

        {/* Informa que não existem reservas ou cobranças reais */}

        <p className={styles.aviso}>
          Projeto acadêmico demonstrativo. Não realiza reservas ou pagamentos
          reais.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
