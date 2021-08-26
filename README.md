<h1 align="center">
     <a href="https://products-crud-complete.herokuapp.com" alt="link-crud"> CRUD de Produtos </a>
</h1>

<h4 align="center">
	🚧 Concluído 🚧
</h4>

# Tabela de conteúdos

<!--ts-->

- [Sobre o projeto](#-sobre-o-projeto)
- [Funcionalidades](#%EF%B8%8F-funcionalidades)
- [Demonstração da aplicação](#-demonstração-da-aplicação)
- [Como executar o projeto](#-como-executar-o-projeto)
  - [Pré-requisitos](#pré-requisitos)
    - [Rodando o Backend (servidor)](#user-content--rodando-o-backend-servidor)
    - [Rodando a aplicação web (Frontend)](#user-content--rodando-a-aplicação-web-frontend)
- [Tecnologias](#-tecnologias)
  - [Website](#website--react)
  - [Server](#server--nodejs)
- [Autor](#-autor)
- [Licença](#user-content--licença)

<!--te-->

## 💻 Sobre o projeto

É uma aplicação CRUD full-stack construído com MERN + Redux + Redux Saga.

---

## ⚙️ Funcionalidades

As seguintes funcionalidades estão disponíveis:

- [x] os usuários logados podem:

  - [x] listar os produtos
  - [x] registrar um novo produto
  - [x] editar um produto
  - [x] deletar um produto
  - [x] ordenar os produtos

---

## 🔍 Demonstração da aplicação

A aplicação está hospedada no [Heroku](https://products-crud-complete.herokuapp.com)

### Web

<p align="center" style="display: flex; align-items: flex-start; justify-content: center;">
  <img alt="crud" title="crud" src="./github/assets/crud.png" >
</p>

---

## 🚀 Como executar o projeto

Este projeto é divido em duas partes:

1. Backend (pasta src)
2. Frontend (pasta client)

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/) e [Yarn](https://yarnpkg.com/). Além disso,
será preciso ter uma conta no [MongoDB](https://www.mongodb.com/) para ter acesso ao banco de dados.

#### 🎲 Rodando o Backend (servidor)

```bash

# Clone este repositório
$ git clone https://github.com/lucasgbsampaio/crud.git

# Acesse a pasta do projeto no terminal/cmd para ter acesso a raiz da pasta
$ cd crud

# Instale as dependências
$ yarn

# Crie um arquivo .env na raiz seguindo as especificações do arquivo .sample-env,
# colocando uma chave secreta para o token, além de colocar a URL de conexão do MongoDB

# Execute a aplicação em modo desenvolvimento
$ yarn dev

# O servidor iniciará na porta:8080 - acesse http://localhost:8080

```

#### 🧭 Rodando a aplicação web (Frontend)

```bash

# Acesse a pasta do frontend no seu terminal/cmd
$ cd client

# Instale as dependências
$ yarn

# Execute a aplicação
$ yarn start

# A aplicação será aberta na porta:3000 - acesse http://localhost:3000

```

---

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

#### Website ([React](https://reactjs.org/))

- **[React Router Dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom)**
- **[Redux](https://redux.js.org/)**
- **[Redux Saga](https://redux-saga.js.org/)**
- **[React Bootstrap](https://react-bootstrap.github.io/)**
- **[React Paginate](https://www.npmjs.com/package/react-paginate)**

> Veja o arquivo [package.json](https://github.com/lucasgbsampaio/crud/blob/master/client/package.json)

#### Server ([NodeJS](https://nodejs.org/en/))

- **[Express](https://expressjs.com/)**
- **[CORS](https://expressjs.com/en/resources/middleware/cors.html)**
- **[dotenv](https://github.com/motdotla/dotenv#readme)**
- **[JsonWebToken](https://www.npmjs.com/package/jsonwebtoken)**
- **[BodyParser](https://www.npmjs.com/package/body-parser)**
- **[Mongoose](https://mongoosejs.com/)**

> Veja o arquivo [package.json](https://github.com/lucasgbsampaio/crud/blob/master/package.json)

---

## 👨‍💻 Autor

- **Lucas Sampaio (lucasgbsampaio)** - [Twitter](https://twitter.com/lucasgbsampaio) - [LinkedIn](https://www.linkedin.com/in/lucasgbsampaio/)

---

## 📝 Licença

Este projeto está sob a licença [MIT](./LICENSE).

---
