# BLOG

<!-- TABLE OF CONTENTS -->
## Tabela de Conteúdos

1. [📔Sobre o Projeto](#📔sobre-o-projeto)
   1. [✨Funcionalidades](#✨funcionalidades)
   2. [💻Tecnologias Aplicadas](#💻tecnologias-aplicadas)
2. [➡️Executando a aplicação](#➡️executando-a-aplicação)
   1. [Pré-requisitos](#pré-requisitos)
   2. [Instalação](#instalação)
3. [🤝Contribuição](#🤝contribuição)
4. [📝Licença](#📝licença)
5. [📧Contato](#📧contato)

<!-- ABOUT THE PROJECT -->
## 📔Sobre o Projeto

_Blog_ é um software baseado em Web com o objetivo de armazenar postagens realizadas por usuários cadastrados. Uma aplicação frontend _react native_ comunica com backend, uma API Restful, em Node.JS. As informações são armazenadas em um bando de dados MySQL.

Este projeto foi desenvolvido para o desafio técnico da [SoftMakers](https://site.softmakers.com.br/). Verifique a [documentação](https://github.com/BrSoftMakers/desafio-desenvolvedor-junior-3).

### ✨Funcionalidades

- Rotas da aplicação backend
  - `/register`: cadastrar um usuário;
  - `/login`: autenticar um usuário;
- Rotas com autenticação da aplicação backend
  - `/posts`: cadastrar uma postagem.
  - `/posts/{id}`: editar a postagem do ID especificado.
  - `/posts`: listar todas as postagens ordenadas das mais recentes para as mais antigas.
    - `?author=true`: lista somente as postagens do autor autenticado.
    - `?order=desc`: ordena as postagens das mais antigas para a mais recentes.
  - `/posts/{id}`: retornar a postagem do ID especificado com todos os seus dados.
  - `/posts/{id}`: deletar a postagem do ID especificado.

- Aplicação frontend
  - Cadastro e login de usuário
  - Visualização de postagens realizadas no sistema com opção de filtros sendo:
    - exibir todas as postagens;
    - exibir somente as postagens realizadas pelo usuário autenticado;
    - ordenar as postagens pelas mais recentes ou pelas mais antigas.
  - Criar, editar e excluir postagem.
  - Visualizar detalhes de uma postagem

### 💻Tecnologias Aplicadas

- HTML5
- CSS3
- JavaScript/Typescript
- MySQL
- Node.JS
- Express
- Prisma
- React Native
- Context API
- Json Web Token (JWT)
- Docker

<!-- GETTING STARTED -->
## ➡️Executando a aplicação

🚧 em construção...

### Pré-requisitos

Primeiramente é necessário que possua instalado as seguintes ferramentas: gerenciador de pacotes NPM e o Git.
Para implementar o ambiente de execução das aplicações é necessário ter instalado o Docker e o Docker Compose.
Além disto é bom ter um editor para trabalhar com o código como VSCode.

### Instalação

1. Faça uma cópia do repositório (HTTPS ou SSH)

   ```sh
   git clone https://github.com/flpnascto/desafio-desenvolvedor-junior-3.git
   ```

   ```sh
   git@github.com:flpnascto/desafio-desenvolvedor-junior-3.git
   ```

2. Acesse a pasta do repositório local e execute o comando para criar os containers

   ```sh
    docker-compose up -d
    ```

🚧 em construção...
<!-- USAGE EXAMPLES -->
<!-- ROADMAP -->
<!-- CONTRIBUTING -->
## 🤝Contribuição

As contribuições são o que tornam a comunidade open source um lugar incrível para aprender, inspirar e criar. Juntos vamos mais longe :rocket:.
Sinta-se a vontade para sugerir melhorias e compartilhar o conhecimento.

1. Fork o projeto
2. Crie sua _Feature Branch_ (`git checkout -b feature/AmazingFeature`)
3. _Commit_ suas alterações (`git commit -m 'Add some AmazingFeature'`)
4. _Push_ para o repositório remoto (`git push origin feature/AmazingFeature`)
5. Abra um _Pull Request_

<!-- LICENSE -->
## 📝Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

<!-- CONTACT -->
## 📧Contato

[![LinkedIn Badge](https://img.shields.io/badge/-Felipe_Nascimento-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/fnascto/)](https://www.linkedin.com/in/fnascto/) [![GMail Badge](https://img.shields.io/badge/-flpnascto@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:flpnascto@gmail.com)](mailto:flpnascto@gmail.com)
[![GitHub Badge](https://img.shields.io/badge/-Profile-181717?style=flat-square&logo=GitHub&logoColor=white&link=https://github.com/flpnascto)](https://github.com/flpnascto)

Project Link: [https://github.com/flpnascto/desafio-desenvolvedor-junior-3](https://github.com/flpnascto/desafio-desenvolvedor-junior-3)
