# 📦 Resumo do Projeto: Desenvolvimento de Blog em Angular

Objetivo do Projeto: Desenvolver um blog utilizando Angular, com foco em uma interface intuitiva e com recursos como navegação e busca, interação e integração com uma API para facilitar o consumo de artigos.

### Fase 1: Planejamento e Definição de Requisitos

1. Objetivo do Blog:
  
    - Criar um layout com um design que exiba um conjunto de posts. Estes podem ser organizados em grid, lista ou ambos. Cada post deverá conter um título e um resumo.
  
    - Exibir o autor associado ao post.
  
    - Adicionar integrações às APIs disponíveis em https://jsonplaceholder.typicode.com/ para tornar a aplicação dinâmica.
  
    - Implementar busca de posts
  
    - Implementar paginação de posts
  
    - Criar um formulário para postagem de comentários.
  
    - Conferir a navegação.
  
    - Exibir o autor e os comentários relacionados ao post.
  
    - Criar uma tela que mostre o post completo, com o título e o conteúdo
  
    - Criar uma página com os posts do autor

2. Tecnologias Escolhidas:

    - Angular 18.1.0

3. Decisão Tomada:

    - A escolha do Angular foi motivada pela facilidade de criar interfaces dinâmicas e escaláveis, utilizando conceitos como two-way data binding e Component-Based Architecture.

    - A integração com um mock API foi uma boa escolha para representar uma simulação de dados reais.
  
    - O design projetado do zero, sem bibliotecas de estilo foi uma escolha um pouco ousada, porém trouxe minimalismo e singularidade.

### Fase 2: Arquitetura do Sistema e Definição da API

1. Estrutura do Blog:

    - O sistema foi dividido em componentes, pages, services, models e utils.
  
    - Roteamento foi implementado para navegar entre os posts e categorias.

### Fase 3: Desenvolvimento da Interface de Usuário (UI)

1. Design da Interface:

    - A interface do blog foi projetada com foco na leitura confortável, com uma homepage que lista os posts mais recentes, top voices e artigos sortidos.

2. Decisão Tomada:

    - A ideia de desenvolver os componentes se deve pela familiaridade e liberdade para criar um design responsivo e customizado, garantindo uma experiência de usuário consistente em diversos dispositivos.

### Fase 4: Integração e Funcionalidades

1. Integração com a API:

    - A comunicação entre o frontend e o backend foi realizada via HTTP com o uso do Angular HttpClient para consumir as APIs e operators do rxjs para gerenciamento dos consumos.

2. Funcionalidades do Blog:

    - Navegação e paginação.
  
    - Filtragem por busca.
  
    - Comentários.

3. Decisão Tomada:
  
    - A decisão de usar Angular Services para consumir a API foi tomada para garantir que o código fosse modular e reutilizável, aproveitei também para gerenciar estados globais pelas Services, o que trouxe agilidade para o desenvolvimento.

### Fase 5: Testes e Validação
   
  - Foram realizados Teste Exploratório, Teste Funcional Manual, Teste de Aceitação Manual, Teste de Regressão Manual, Teste de Usabilidade Manual e testes de integração para validar os componentes e a interação com a API.
  
  - Não foi implementado testes unitários nessa primeira versão pois tinha um escopo e um prazo. A ideia é implementar em alguns componentes mais robustos, para garantir bom funcionamento.

### Fase 6: Lançamento e Feedback

1. Lançamento Inicial:

    - A primeira versão do blog foi versionada no github, ainda não disponivel em distribuição.

2. Feedback e Melhorias:

    - Com base em testes e pesquisas, melhorias serão implementadas no sistema de comentários e na interface de interação com o post, tornando-a mais intuitiva e com filtros de busca mais avançados e um painel para administração de posts.
  
    - Implementar skeleton, um tipo de componente para minimizar o impacto de carregamento dos dados.
  
    - Implementar opção de likes e compartilhamento dos posts.
  
    - Refatorar o código tornando mais legível e organizado.

### Conclusão

O projeto do blog em Angular foi desenvolvido de forma modular, com foco na escalabilidade e flexibilidade. A escolha de Angular para o frontend se mostrou eficaz, criando uma aplicação robusta e fácil de manter. Mesmo com o uso de uma API externa o frontend assegura que o sistema esteja preparado para futuras expansões.

## 🧰 Pré-requisitos

### Antes de começar, certifique-se de ter instalado:

Node.js: Versão 18.19.1 ou superior.​

npm: O gerenciador de pacotes do Node.js.​

Angular CLI: Ferramenta de linha de comando para Angular.​

Editor de código: Recomenda-se o Visual Studio Code.​

## 🚀 Instalação

### Clone o repositório:

```bash
HTTPS
git clone https://github.com/seu-usuario/blog.git
cd blog

SSH
git@github.com:seu-usuario/blog.git
cd blog
```

### Instale as dependências:

```bash
npm install
```

## 🧪 Scripts Disponíveis

Iniciar o servidor de desenvolvimento:

```bash
npm start
```

A aplicação estará disponível em: http://localhost:4200​

### Construir a aplicação para produção:

```bash
npm run build
```

## 🗂️ Estrutura do Projeto

```bash
src/
├── app/
│ ├── components/
│ │ ├── button/
│ │ ├── chip/
│ │ ├── header/
│ │ ├── input-search/
│ │ ├── author-profile-info/
│ │ ├── author-post-info/
│ │ ├── comment-post-item/
│ │ ├── comment-post-form/
│ │ ├── post-card-full/
│ │ ├── exception-page-message/
│ │ └── post-card/
│ ├── pages/
│ │ ├── blog-author-profile/
│ │ ├── blog-explorer/
│ │ ├── blog-post/
│ │ └── blog-search-articles/
│ ├── services/
│ │ ├── api/
│ │ ├── posts/
│ │ └── users/
│ ├── models/
│ │ └── user/
│ ├── utils/
│ │ └── truncate/
│ ├── app.module.ts
│ └── app.server.module.ts
├── assets/
├── environments/
├── index.html
├── main.ts
├── main.server.ts
├── polyfills.ts
└── styles.css
angular.json
package.json
README.md
```

## 🌐 Ambiente

Este projeto utiliza o Angular 18 com SSR. O servidor Express é configurado para servir a aplicação renderizada do lado do servidor.​

## 📄 Licença

Este projeto está licenciado sob a MIT License.
