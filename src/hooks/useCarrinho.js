import { useContext } from "react";
import { CarrinhoContext } from "../contexts/CarrinhoContext.js";

// Evita repetir a leitura do contexto em cada componente.
export function useCarrinho() {
    const  contexto = useContext(CarrinhoContext);

    if (!contexto) {
        throw new Error("useCarrinho deve ser usado dentro de um CarrinhoProvider");
    }

    return contexto;
}
