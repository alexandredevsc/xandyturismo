import { Link } from "react-router-dom";

// Orienta o usuário quando o endereço acessado não existe

function NaoEncontrada() {
  return (
    <section>
      <h1>Página não encontrada</h1>
      <p>O endereço que você tentou acessar não está disponível.</p>

      {/* Oferece um caminho de volta para a aplicação */}
      <Link to="/produtos">Voltar ao catálogo</Link>
    </section>
  );
}

export default NaoEncontrada;
