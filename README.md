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

## Identidade visual planejada

A identidade de XandyTurismo segue o painel visual aprovado.

| Cor | Código | Uso planejado |
|---|---|---|
| Azul-marinho | #0B2D4F | Cabeçalho, títulos e fundos de destaque |
| Laranja | #FF7A00 | Destaques e ações principais |
| Turquesa | #00B4DB | Detalhes gráficos e elementos de apoio |
| Fundo claro | #F5F7FA | Fundo das páginas |
| Grafite | #1F2937 | Textos sobre fundos claros |
| Branco | #FFFFFF | Superfícies e textos sobre fundos escuros |
| Verde | #10B981 | Elementos de confirmação de sucesso |

As combinações de texto e fundo serão verificadas quanto ao contraste antes da aplicação nos componentes.

A tipografia planejada é Poppins, com uma fonte alternativa sem serifa.

As imagens serão preparadas em arquivos individuais para logo, banner e pacotes. Textos e botões serão implementados em React para permitir adaptação às telas e acessibilidade.

### Tipografia e espaçamentos planejados

- Fonte principal: Poppins.
- Fontes alternativas: Arial, sans-serif.
- Texto base: 1rem, respeitando a configuração do navegador.
- Altura de linha dos textos: 1.5.
- Pesos: 400 para textos, 600 para subtítulos e botões, 700 para títulos.
- Escala de espaçamento: 4, 8, 12, 16, 24, 32, 48 e 64px.
- Abordagem mobile-first, com tamanhos de títulos e espaçamentos ajustados conforme a largura disponível.

### Símbolo da marca

O símbolo foi gerado com auxílio de IA a partir do painel visual fornecido pelo autor e aprovado para o projeto.

- Original: src/assets/brand/simbolo-xandyturismo.png — 1254 × 1254 pixels.
- Versão reduzida: src/assets/brand/simbolo-xandyturismo-256.png — 256 × 256 pixels, 73.734 bytes.
- Formato PNG com transparência.
- Redimensionamento realizado no Paint, preservando o original.
- A versão reduzida será avaliada no cabeçalho antes da definição de uso final.

As imagens geradas são ilustrativas e não representam ofertas ou reservas reais.

### Banner de abertura

Imagem ilustrativa gerada com IA, inspirada na Isla Saona, República Dominicana. Não representa uma fotografia documental do destino.

- Original: src/assets/images/banner-saona-original.png.
- Versão para uso no site: src/assets/images/banner-saona.jpg.
- Dimensões: 1536 × 1024 pixels.
- JPEG: 556.862 bytes, aproximadamente 78% menor que o PNG original.
- Conversão realizada no Paint, preservando o original.
- Textos e botões serão implementados em React.
- Enquadramento responsivo e contraste serão verificados na implementação.

### Pacotes planejados

Os pacotes, preços e estoques serão fictícios, para demonstração acadêmica.

| Pacote | Categoria | Imagem planejada |
|---|---|---|
| Curaçao | Caribe | Orla de Willemstad com fachadas coloridas |
| Cancún | Caribe | Praia de areia branca e mar turquesa |
| Punta Cana | Caribe | Paisagem inspirada na Ilha Saona |
| Aruba | Caribe | Praia com árvore divi-divi |
| Paris | Europa | Torre Eiffel e paisagem urbana |
| Roma | Europa | Coliseu e arredores |
| Lisboa | Europa | Bonde em uma rua histórica |
| Orlando | América do Norte | Paisagem urbana com lago e palmeiras |
| Nova York | América do Norte | Times Square ao anoitecer |
| Buenos Aires | América do Sul | Obelisco e Avenida 9 de Julio |
| Santiago | América do Sul | Cidade com a Cordilheira dos Andes ao fundo |
| Rio de Janeiro | América do Sul | Baía de Guanabara e Pão de Açúcar |

As imagens serão ilustrativas, geradas com auxílio de IA e revisadas antes do uso. Não serão apresentadas como fotografias documentais dos destinos.

### Textos alternativos planejados

As imagens dos destinos são ilustrações geradas com auxílio de IA. Essa informação será apresentada no catálogo.

| Arquivo | Texto alternativo |
|---|---|
| curacao.jpg | Fachadas coloridas à beira do porto, em Willemstad |
| cancun.jpg | Praia de areia branca, mar turquesa e hotéis, em Cancún |
| punta-cana.jpg | Coqueiros e águas claras em praia na Ilha Saona |
| aruba.jpg | Árvore divi-divi à beira de uma praia em Aruba |
| paris.jpg | Torre Eiffel e Rio Sena ao entardecer, em Paris |
| roma.jpg | Coliseu iluminado pela luz de fim de tarde, em Roma |
| lisboa.jpg | Bonde amarelo entre fachadas históricas, em Lisboa |
| orlando.jpg | Lago, palmeiras e edifícios ao entardecer, em Orlando |
| nova-york.jpg | Telões luminosos e táxis amarelos na Times Square |
| buenos-aires.jpg | Obelisco e avenida arborizada em Buenos Aires |
| santiago.jpg | Edifícios e Andes nevados em cena de Santiago |
| rio-de-janeiro.jpg | Pão de Açúcar e baía com veleiros no Rio de Janeiro |

O texto alternativo será ajustado conforme o contexto do componente. Imagens puramente decorativas poderão usar alt vazio para evitar repetição.

### Origem dos recursos visuais

O símbolo, o banner e as 12 imagens dos destinos foram gerados com auxílio de IA e aprovados pelo autor do projeto.

O painel visual fornecido pelo autor foi usado como referência para a identidade da marca.

As imagens dos destinos são ilustrativas e não representam fotografias documentais, disponibilidade de viagens ou serviços reais.

Os originais foram preservados. As cópias para uso na aplicação foram preparadas no Paint:
- Símbolo: PNG com transparência, 256 × 256 pixels.
- Banner: JPEG, 1536 × 1024 pixels.
- Destinos: JPEG, 960 × 640 pixels.

O painel visual de referência foi gerado pelo autor com auxílio de IA no ChatGPT Plus e utilizado como base para a identidade visual da XandyTurismo.

### Contrastes verificados

| Texto | Fundo | Contraste | Uso em texto comum |
|---|---|---|---|
| Branco | Azul-marinho | 13,98:1 | Aprovado |
| Grafite | Fundo claro | 13,68:1 | Aprovado |
| Branco | Laranja | 2,61:1 | Reprovado |
| Azul-marinho | Laranja | 5,35:1 | Aprovado |
| Azul-marinho | Turquesa | 5,69:1 | Aprovado |
| Azul-marinho | Verde | 5,51:1 | Aprovado |

Os botões laranja utilizarão texto azul-marinho.
Textos sobre fotografias terão o contraste verificado no layout final.
Estados de foco, hover e desabilitado também serão revisados na implementação.