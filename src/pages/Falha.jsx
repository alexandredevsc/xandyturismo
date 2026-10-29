import { Link } from "react-router-dom";

// Apresenta o resultado de falha da compra fictícia
function Falha() {
  return (
    <section>
      <h1>Compra não aprovada!</h1>

      {/* Preserva a mensagem exata exigida pelo edital */}

      <p>tentativa de golpe</p>

      {/* Retorna ao pagamento para uma nova tentativa */}
      <Link to="/pagamento">Tentar novamente</Link>
    </section>
  );
}

export default Falha;
