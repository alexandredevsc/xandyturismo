import { Link } from "react-router-dom";

// Estrutura inicial dos detalhes; os dados serão consultados na API depois
function DetalheProduto() {
  return (
    <section>
      <h1>Detalhes do pacote</h1>
      <p>As informações do pacote serão exibidas aqui.</p>

      {/* Permite retornar à listagem de destinos */}
      <Link to="/produtos">Voltar ao catálogo</Link>
    </section>
  );
}

export default DetalheProduto;
