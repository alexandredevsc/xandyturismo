import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/templates/Layout/Layout.jsx";
import Produtos from "./pages/Produtos.jsx";
import Carrinho from "./pages/Carrinho.jsx";
import NaoEncontrada from "./pages/NaoEncontrada.jsx";
import DetalheProduto from "./pages/DetalheProduto.jsx";
import Pagamento from "./pages/Pagamento.jsx";
import Sucesso from "./pages/Sucesso.jsx";
import Falha from "./pages/Falha.jsx";
import RotaPagamentoProtegida from "./components/guards/RotaPagamentoProtegida.jsx";

// Associa as páginas às rotas dentro do Layout compartilhado

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {/* Direciona o endereço inicial para o catálogo */}
        <Route path="/" element={<Navigate to="/produtos" replace />} />

        {/* Renderiza o catálogo no Outlet do layout */}
        <Route path="/produtos" element={<Produtos />} />

        {/* Renderiza a página do carrinho no Layout compartilhado */}
        <Route path="/carrinho" element={<Carrinho />} />

        {/* Usa o identificador do endereço para abrir a página de detalhes */}
        <Route path="/produtos/:id" element={<DetalheProduto />} />

        {/* Exibe a estrutura inicial; a proteção será implementada com o carrinho */}
        <Route
          path="/pagamento"
          element={
            <RotaPagamentoProtegida>
              <Pagamento />
            </RotaPagamentoProtegida>
          }
        />

        {/* Apresenta a tela de aprovação da compra fictícia */}
        <Route path="/sucesso" element={<Sucesso />} />

        {/* Apresenta a falha e permite retornar ao pagamento */}
        <Route path="/falha" element={<Falha />} />

        {/* Exibe uma orientação para endereços não cadastrados */}
        <Route path="*" element={<NaoEncontrada />} />
      </Route>
    </Routes>
  );
}

export default App;
