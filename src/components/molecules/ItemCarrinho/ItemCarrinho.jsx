import PropTypes from "prop-types";

// Exibe um pacote selecionado e suas ações no carrinho.
function ItemCarrinho({
  item,
  classes,
  formatarPreco,
  onAtualizarQuantidade,
  onRemover,
}) {
  const { produto, quantidade } = item;
  const subtotal = produto.preco * quantidade;

  return (
    <li className={classes.item}>
      <img
        className={classes.imagem}
        src={produto.imagem}
        alt={`Destino turístico: ${produto.nome}`}
      />

      <div className={classes.informacoes}>
        <span className={classes.categoria}>{produto.categoria}</span>

        <h2>{produto.nome}</h2>

        <strong>{formatarPreco(produto.preco)}</strong>

        <span>Subtotal: {formatarPreco(subtotal)}</span>

        <div className={classes.quantidade}>
          <button
            type="button"
            aria-label={`Diminuir quantidade de ${produto.nome}`}
            disabled={quantidade === 1}
            onClick={() => onAtualizarQuantidade(produto.id, quantidade - 1)}
          >
            -
          </button>

          <span aria-label="Quantidade selecionada">{quantidade}</span>

          <button
            type="button"
            aria-label={`Aumentar quantidade de ${produto.nome}`}
            disabled={quantidade === produto.estoque}
            onClick={() => onAtualizarQuantidade(produto.id, quantidade + 1)}
          >
            +
          </button>
        </div>
      </div>

      <button
        type="button"
        className={classes.remover}
        onClick={() => onRemover(produto.id)}
      >
        Remover
      </button>
    </li>
  );
}

ItemCarrinho.propTypes = {
  item: PropTypes.shape({
    quantidade: PropTypes.number.isRequired,
    produto: PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      nome: PropTypes.string.isRequired,
      categoria: PropTypes.string.isRequired,
      imagem: PropTypes.string.isRequired,
      preco: PropTypes.number.isRequired,
      estoque: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
  classes: PropTypes.object.isRequired,
  formatarPreco: PropTypes.func.isRequired,
  onAtualizarQuantidade: PropTypes.func.isRequired,
  onRemover: PropTypes.func.isRequired,
};

export default ItemCarrinho;
