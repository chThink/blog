# 📦 Nome do Projeto: Blog/hi-gabrielly

Este projeto é uma aplicação Angular 18 com renderização do lado do servidor (SSR) utilizando Express.​

## 🧰 Pré-requisitos

### Antes de começar, certifique-se de ter instalado:

Node.js: Versão 18.19.1 ou superior.​

npm: O gerenciador de pacotes do Node.js.​

Angular CLI: Ferramenta de linha de comando para Angular.​

Editor de código: Recomenda-se o Visual Studio Code.​

## 🚀 Instalação

### Clone o repositório:

```bash
git clone https://github.com/seu-usuario/test-smarter.git
cd test-smarter
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
│ │ ├── author-profile-info/   //soon
│ │ ├── author-post-info/   //soon
│ │ ├── comment-post-item/   //soon
│ │ ├── comment-post-form/   //soon
│ │ ├── post-card-full/   //soon
│ │ ├── exception-page-message/   //soon
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
