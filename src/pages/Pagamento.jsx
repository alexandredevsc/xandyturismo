import { zodResolver } from "@hookform/resolvers/zod";
import Alert from "@mui/material/Alert";
import CircularProgress from "@mui/material/CircularProgress";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { useCarrinho } from "../hooks/useCarrinho.js";
import styles from "./Pagamento.module.css";

const dadosPagamentoSchema = z.object({
  nome: z.string().trim().min(3, "Informe seu nome completo."),
  email: z.string().trim().email("Informe um e-mail válido."),
  numeroCartao: z
    .string()
    .trim()
    .regex(/^\d{16}$/, "Digite os 16 números do cartão fictício."),
  validade: z
    .string()
    .trim()
    .regex(/^(0[1-9]|1[0-2])\/\d{2}$/, "Use o formato MM/AA."),
  cvv: z
    .string()
    .trim()
    .regex(/^\d{3}$/, "Digite os 3 números do CVV."),
});

const formatarPreco = (preco) =>
  new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(preco);

// Simula o pagamento e direciona para o resultado da compra fictícia.
function Pagamento() {
  const navigate = useNavigate();
  const { itens, valorTotal} = useCarrinho();
  const [processando, setProcessando] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(dadosPagamentoSchema),
  });

  async function finalizarPagamento(dados) {
    setProcessando(true);

    await new Promise((resolve) => {
      setTimeout(resolve, 800);
    });

    const possuiTentativaDeGolpe = Object.values(dados).some((valor) =>
      valor.toLowerCase().includes("tentativa de golpe"),
    );

    if (possuiTentativaDeGolpe) {
      navigate("/falha");
      return;
    }

    navigate("/sucesso");
  }

  return (
    <section className={styles.pagina}>
      <header className={styles.cabecalho}>
        <p>PAGAMENTO FICTÍCIO</p>
        <h1>Finalize sua experiência</h1>
        <span>Preencha dados fictícios. Nenhuma cobrança será realizada.</span>
      </header>

      <div className={styles.conteudo}>
        <form
          className={styles.formulario}
          onSubmit={handleSubmit(finalizarPagamento)}
          noValidate
        >
          <Alert severity="info">
            Use somente informações fictícias nesta demonstração.
          </Alert>

          <label htmlFor="nome">
            Nome completo
            <input
              id="nome"
              type="text"
              autoComplete="name"
              {...register("nome")}
            />
            {errors.nome && <small>{errors.nome.message}</small>}
          </label>

          <label htmlFor="email">
            E-mail
            <input
              id="email"
              type="email"
              autoComplete="email"
              {...register("email")}
            />
            {errors.email && <small>{errors.email.message}</small>}
          </label>

          <label htmlFor="numeroCartao">
            Número do cartão fictício
            <input
              id="numeroCartao"
              type="text"
              inputMode="numeric"
              maxLength="16"
              placeholder="1234567812345678"
              {...register("numeroCartao")}
            />
            {errors.numeroCartao && (
              <small>{errors.numeroCartao.message}</small>
            )}
          </label>

          <div className={styles.camposMenores}>
            <label htmlFor="validade">
              Validade
              <input
                id="validade"
                type="text"
                inputMode="numeric"
                maxLength="5"
                placeholder="12/30"
                {...register("validade")}
              />
              {errors.validade && <small>{errors.validade.message}</small>}
            </label>

            <label htmlFor="cvv">
              CVV
              <input
                id="cvv"
                type="password"
                inputMode="numeric"
                maxLength="3"
                placeholder="123"
                {...register("cvv")}
              />
              {errors.cvv && <small>{errors.cvv.message}</small>}
            </label>
          </div>

          <button
            className={styles.botaoPrincipal}
            type="submit"
            disabled={processando}
          >
            {processando ? (
              <CircularProgress size={20} color="inherit" />
            ) : null}
            {processando ? "Processando..." : "Finalizar compra fictícia"}
          </button>
        </form>

        <aside className={styles.resumo}>
          <h2>Resumo do pedido</h2>

          <ul>
            {itens.map((item) => (
              <li key={item.produto.id}>
                <span>
                  {item.quantidade}x {item.produto.nome}
                </span>
                <strong>
                  {formatarPreco(item.produto.preco * item.quantidade)}
                </strong>
              </li>
            ))}
          </ul>

          <div className={styles.total}>
            <span>Total</span>
            <strong>{formatarPreco(valorTotal)}</strong>
          </div>
        </aside>
      </div>
    </section>
  );
}

export default Pagamento;
