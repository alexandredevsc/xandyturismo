import { Link } from "react-router-dom";
// Apresenta o resultado de aprovação da compra fictícia
function Sucesso() {
  return (
    <section>
      <h1>Compra fictícia aprovada!</h1>
      <p>Sua simulação foi concluída. Nenhuma cobrança foi realizada.</p>

      {/* Permite continuar explorando os pacotes */}
      <Link to="/produtos">Voltar ao catálogo</Link>
    </section>
  );
}

export default Sucesso;
