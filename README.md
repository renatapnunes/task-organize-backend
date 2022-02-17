# PROJETO: TASK ORGANIZER
👋 Bem-vinda(o) ao meu projeto! 

_Projeto proposto no curso de Desenvolvimento Web da_ [_Trybe_](https://www.betrybe.com/)
***Simulaçao de desafio técnico***

### Contexto
Este projeto foi desenvolvido para solucionar o problema que a empresa Ebyrt (~~fictícia~~) está tendo com a organização das tarefas individuais de seus colaboradores.
Como solicitado, a aplicação utiliza a Stack **MERN** (*MongoDB, Express, React e Node.js*) e por opção, a Arquitetura em camadas **MSC** (*Model, Service e Controller*).

O back-end da aplicação consiste em uma API que permite a criação, listagem, atualização e exclusão de tarefas em um banco de dados.
O front-end por sua vez consome essa API, permitindo ao usuário filtrar as tarefas exibidas por ordem alfabética, data de criação ou por seu status.

##### Este repositório contém apenas o back-end da aplicação.
##### O front-end encontra-se neste repositório: [Task Organizer - Frontend](https://github.com/renatapnunes/task-organize-frontend)

### Instalação
Pré-requisitos:

 - Ter instalado em sua máquina o MongoDB e o NPM
 
 No terminal da sua máquina digite a seguinte sequência de comandos:

     git clone git@github.com:renatapnunes/task-organize-backend.git
     cd task-organize-backend
     npm install
     npm start
Estes comandos são o suficiente para a conexão com o front-end.

### Rotas
As rotas configuradas para se fazer as requisições na API são:

 - Para criar uma tarefa: [POST] /task
 - Para listar as tarefas: [GET] /task
 - Para atualizar uma tarefa: [PUT] /task/:id
 - Para deletar uma tarefa: [DELETE] /task/:id
 - Para deletar todas as tarefas: [DELETE] /task

 ### Banco de dados
 A aplicação está configurada para gerar o banco de dados "Tasks" no MongoDB, cuja entidade da coleção "tasks" possuí as propriedades: _id, task, status, created e update.

### Dependências
Juntamente com o **Node.js** foram usadas as seguintes dependências neste projeto:
**Express**, **Joi**, **Moment**, **Cors** e **ESLint**

 ### Testes
 Os testes de integração foram desenvolvidos utilizando-se:
 **Mocha**, **Sinon**, **Chai** e **Chai-http**

Foi usado também o **Mongodb Memory Server** para mockar o banco de dados.

Para rodar os testes use:

    npm test

Para conferir a cobertura:

    npm run test:coverage

A cobertura atual está assim:

![Cobertura dos testes](https://github.com/renatapnunes/task-organize-backend/blob/main/tests.png)

### Imagem da aplicação (integrada ao front-end)

![Aplicação rodando no browser](https://github.com/renatapnunes/task-organize-backend/blob/main/task-organizer.png)

### Próximos passos

 - Implementar testes unitários
 - Fazer o deploy da aplicação, provavelmente no Heroku

### Meus contatos
Estou aberta a feedbacks sobre este projeto.
Caso queria colaborar, fique a vontade para entrar em contato pelo meu:
👉 [Linkedin](https://www.linkedin.com/in/renata-p-nunes/)

Vou ficar muito feliz em aprender algo novo! 😄
