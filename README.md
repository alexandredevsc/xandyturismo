# XandyTurismo - Tour Internacional

Aplicação web responsiva para demonstração de pacotes turísticos fictícios. O projeto foi desenvolvido como entrega acadêmica do Projeto Final SC TEC - Fron-End React, Módulo 2.

> Não há reservas, viagens ou cobranças reais nesta aplicação.

## Funcionalidades

- Catálogo de pacotes consumido por uma API simulada com `json-server`.
- Estados de carregamento, erro, catálogo vazio e busca sem resultado.
- Busca por nome, categoria ou descrição, sem diferenciar maiúsculas e minúsculas.
- Página de detalhes por pacote e tratamento para produto inexistente.
- Carrinho global com context API e hook personalizado.
- Inclusão, remoção e alteração de quantidade limitada ao estoque.
- Cálculo automático da quantidade total e do valor do pedido.
- Indicador de itens no cabeçalho.
- Rota de pagamento protegida para carrinho vazio.
- Formulário de pagamento fictício com React Hook Form, Zod e componentes Material UI.
- Simulação de aprovação, que limpa o carrinho.
- Simulação de recusa, que preserva o carrinho e exibe a mensagem `tentativa de golpe`.
- Layout responsivo para celular, tablet e desktop.
- Testes automatizados com Vitest e Testing Library.

## Tecnologias

- React
- Vite
- React Router
- Context API
- CSS Modules
- Material UI
- React Hook Form
- Zod
- json-server
- Vitest
- Testing Library
- ESLint

## Estrutura do projeto

```text
src/
├── assets/                 # Imagens e identidade visual
├── components/
│   ├── guards/             # Proteção de rotas
│   ├── molecules/          # ProdutoCard e ItemCarrinho
│   ├── organisms/          # Header e Footer
│   └── templates/          # Layout compartilhado
├── contexts/               # Contexto e Provider do carrinho
├── hooks/                  # Hook useCarrinho
├── pages/                  # Páginas da aplicação
├── services/               # Comunicação com a API simulada
├── test/                   # Configuração dos testes
└── utils/                  # Funções reutilizáveis, como a busca
```

## Rotas

| Rota            | Descrição                        |
| --------------- | -------------------------------- |
| `/`             | Redireciona para o catálogo      |
| `/produtos`     | Catálogo e busca de pacotes      |
| `/produtos/:id` | Detalhes de um pacote            |
| `/carrinho`     | Pacotes adicionados ao carrinho  |
| `/pagamento`    | Checkout fictício protegido      |
| `/sucesso`      | Resultado de compra aprovada     |
| `/falha`        | Resultado de compra não aprovada |
| `*`             | Página não encontrada            |

## Como executar localmente

### 1. Instale as dependências

```bash
npm install
```

### 2. Inicie a API simulada

Em um terminal:

```bash
npm run api
```

A API será disponibilizada em:

```text
http://localhost:3001
```

### 3. Inicie a aplicação

Em outro terminal:

```bash
npm run dev
```

Abra o endereço informado pelo Vite, normalmente:

```text
http://localhost:5173
```

## Comandos disponíveis

| Comando                 | Finalidade                              |
| ----------------------- | --------------------------------------- |
| `npm run dev`           | Inicia a aplicação em desenvolvimento   |
| `npm run api`           | Inicia a API simulada com json-server   |
| `npm run test -- --run` | Executa os testes automatizados uma vez |
| `npm run lint`          | Verifica regras de qualidade do código  |
| `npm run build`         | Gera a versão de produção               |
| `npm run preview`       | Visualiza localmente a build gerada     |

## Testes automatizados

Foram implementados 14 testes automatizados:

- **5 testes** para a busca de pacotes:
  - busca vazia;
  - busca por nome;
  - busca por categoria;
  - busca por descrição;
  - busca sem correspondência.

- **5 testes** para o serviço da API:
  - lista válida;
  - erro HTTP;
  - resposta inválida;
  - pacote inexistente;
  - pacote encontrado.

- **4 testes** para as regras do carrinho:
  - adição e cálculo de total;
  - limite de estoque;
  - quantidade mínima;
  - remoção e limpeza.

Para executar:

```bash
npm run test -- --run
```

## Checkout fictício

O formulário não processa pagamentos reais.

Para demonstrar a recusa simulada, informe a expressão abaixo em qualquer campo do formulário:

```text
tentativa de golpe
```

O resultado será direcionado para a rota `/falha`, preservando os pacotes no carrinho. Em outros casos válidos, a compra fictícia será aprovada e o carrinho será limpo.

## Acessibilidade e responsividade

- Estrutura semântica com cabeçalho, navegação, conteúdo principal, seções e rodapé.
- Imagens com textos alternativos contextuais.
- Botões e links acessíveis por teclado.
- Estados de carregamento e erro anunciados com `role="status"` e `role="alert"`.
- Interface revisada em celular, tablet e desktop.
- Contraste entre textos, botões e fundos revisado no layout.

## Recursos visuais

A identidade visual, o banner e as imagens dos destinos foram produzidos com auxílio de IA exclusivamente para este projeto acadêmico. As imagens são ilustrativas e não representam ofertas reais, disponibilidade de viagens ou fotografias documentais.

## Repositório

[github.com/alexandredevsc/xandyturismo](https://github.com/alexandredevsc/xandyturismo)

## Links do projeto

- **Aplicação publicada:** [Acessar XandyTurismo](https://xandyturismo.vercel.app)
- **Planejamento no Trello:** [Ver quadro do projeto](https://trello.com/b/HjeHwy3B/xandyturismo-projeto-final-sc-tec)
- **Vídeo de apresentação:** [Assistir no YouTube](https://youtu.be/BEq0ywUWYwU)

## Autor

Desenvolvido por Alexandre Alves para o Projeto Final SC TEC.
