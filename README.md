# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Organização planejada

A estrutura será organizada por responsabilidade. As pastas e os arquivos serão criados conforme as funcionalidades forem desenvolvidas; portanto, a estrutura abaixo representa o planejamento do projeto.

```text
src/
  components/
    atoms/
    molecules/
    organisms/
    templates/
  pages/
  routes/
  contexts/
  hooks/
  services/
  utils/
    __tests__/
  assets/
  styles/
```

### Componentes — Atomic Design

- **atoms:** elementos pequenos da interface, como botão e preço.
- **molecules:** combinações de elementos, como ProdutoCard e ItemCarrinho.
- **organisms:** conjuntos maiores da interface, como Header e ListaProdutos.
- **templates:** estrutura compartilhada das páginas, como Layout com Header, Outlet e Footer.

### Demais responsabilidades

- **pages:** componentes das telas associadas às rotas, como Produtos, Carrinho e Pagamento.
- **routes:** componentes auxiliares da navegação, como RotaPrivada.
- **contexts:** gerenciamento de estado compartilhado, como os itens e operações do carrinho.
- **hooks:** hooks customizados para reutilizar lógica React, como useCarrinho.
- **services:** comunicação com a API e tratamento das respostas das requisições.
- **utils:** funções independentes da interface, como busca, formatação monetária e cálculo de totais.
- utils/__tests__/: testes unitários das funções de regra de negócio.
- **assets:** recursos importados pelo código, como imagens e logotipos.
- **styles:** estilos globais e definições visuais compartilhadas. Os arquivos CSS Modules ficarão próximos dos componentes que estilizam.

### Arquivos de entrada

- **index.html:** documento HTML inicial, localizado na raiz do projeto, com o elemento root.
- **src/main.jsx:** inicializa o React e renderiza o componente principal no elemento root.
- **src/App.jsx:** componente principal que organizará as rotas da aplicação.

### Critério de organização

Os componentes serão classificados conforme sua responsabilidade e composição, evitando divisões desnecessárias. O estado do carrinho ficará centralizado no contexto; as requisições ficarão nos serviços; e as regras de negócio reutilizáveis ficarão em utils.