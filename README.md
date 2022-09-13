# [ API ] Estúdio de Tatuagem 
### 📑 Descrição
Desenvolvimento da <em>**API REST**</em> no **padrão MVC** que retorna informações das entidades de um estúdio de tatuagem e efetua todas as operações **CRUD**: ``tatuador``, ``cliente``, ``agendamento``, ``materiais``.


**[Slides da Apresentação](https://drive.google.com/file/d/1iC972UneVB5enoFDt_vQodc0EbTuHmOw/view)**

**[ Tecnologias ]**

<samp>
  
- <em>Node.js</em> | <em>SQLite3</em> | <em>Express</em> | <em>Insomnia</em> | <em>CORS</em> | <em>npm</em> | <em>Nodemon</em>
  
</samp>

<details>
<summary>  
  <strong>Estrutura do Diretório</strong>
</summary>
<br>

```
src/
├─ controllers/
│  ├─ TatuadorController.js
│  ├─ ClienteController.js
│  ├─ MateriaisController.js
│  └─ AgendamentoController.js
├─ dao/
│  ├─ TatuadorDAO.js
│  ├─ ClienteDAO.js
│  ├─ MateriaisDAO.js
│  └─ AgendamentoDAO.js
├─ models/
│  ├─ Tatuador.js
│  ├─ Cliente.js
│  ├─ Materiais.js
│  └─ Agendamento.js
├─ database/
│  ├─ create-and-populate.js
│  ├─ config.js
│  └─ database.db
├─ routes/
│  ├─ tatuador.js
│  ├─ cliente.js
│  ├─ materiais.js
│  └─ agendamento.js
└─ main.js
```
  
</details>


### 🎲 Iniciando o Projeto


<samp>
  
> **Warning** 
> Pré-Requisitos: Git, Node.js e um editor de código.

</samp>

```bash
# Clone o repositório
$ git clone <https://github.com/IplinskyLeo/tattooApi.git>

# Acesse a pasta do projeto no terminal/cmd
$ cd tattooApi

# Instale as dependências
$ npm install

# Execute a aplicação 
$ npm start

# Acesse o servidor
$ <http://localhost:4000>
```

## Rotas CRUD

### [ 1 ] <em>Tatuador</em>

| Método | Rota | Descrição |
| ------ | ----- | ----------- |
| **`GET`** | **/tatuadores** | Retorna todos os tatuadores. |
|  **`GET`** | **/tatuador/id** | Retorna um tatuador. |
|  **`POST`** | **/tatuador** | Cria um novo tatuador.  |
|  **`PUT`** | **/tatuador/id** | Altera os dados do tatuador.
|  **`DELETE`** | **/tatuador/id** | Remove o tatuador.
  
### [ 2 ] <em>Clientes</em>

| Método | Rota | Descrição |
| ------ | ----- | ----------- |
|  **`GET`** | **/clients** | Retorna todos os clientes. |
|  **`GET`** | **/clients/id** | Retorna um cliente. |
|  **`POST`** | **/clients** | Cria um novo cliente.  |
|  **`PUT`** | **/clients/id** | Altera os dados do cliente.
|  **`DELETE`** | **/clients/id** | Remove o cliente.
  

### [ 2 ] <em>Materiais</em>

| Método | Rota | Descrição |
| ------ | ----- | ----------- |
|  **`GET`** | **/materiais** | Retorna todos os materiais. |
|  **`GET`** | **/materiais/id** |  Retorna um material. |
|  **`POST`** | **/materiais** | Cria um novo material.  |
|  **`PUT`** | **/materiais/id** | Altera os dados do material.
|  **`DELETE`** | **/materiais/id** | Remove o material.
  
### [ 2 ] <em>Agendamento</em>

| Método | Rota | Descrição |
| ------ | ----- | ----------- |
|  **`GET`** | **/agendamentos** | Retorna todos os agendamentos. |
|  **`GET`** | **/agendamento/id** | Retorna um agendamento. |
|  **`POST`** | **/agendamento** | Cria um novo agendamento.  |
|  **`PUT`** | **/agendamento/id** | Altera os dados do agendamento.
|  **`DELETE`** | **/agendamento/id** | Remove o agendamento.

---

## Squad
- [Ellen Maria](https://github.com/ellenmariadev/)
- [Larissa Ferreira](https://github.com/Lari-Ferreira)
- [Leonardo Iplinsky](https://github.com/IplinskyLeo)
- [Viniele Lopes](https://github.com/vinielelopes)
