import { Link } from "react-router-dom";

// Estrutura inicial da página; os itens virão do contexto depois
function Carrinho() {
  return (
    <section>
      <h1>Seu carrinho</h1>
      <p>Os pacotes selecionados serão exibidos aqui.</p>

      {/* Permite retornar ao catálogo pela própria página */}
      <Link to="/produtos">Explorar destinos</Link>
    </section>
  );
}

export default Carrinho;
