import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import { useCarrinho } from "../../hooks/useCarrinho.js";

// Impede o acesso ao pagamento quando não há pacotes no carrinho.
function RotaPagamentoProtegida({ children }) {
  const { itens } = useCarrinho();

  if (itens.length === 0) {
    return <Navigate to="/carrinho" replace />;
  }

  return children;
}

RotaPagamentoProtegida.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RotaPagamentoProtegida;
