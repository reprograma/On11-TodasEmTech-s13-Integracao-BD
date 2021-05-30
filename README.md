# On11-TodasEmTech-s13-Integracao-BD
Turma Online 11 - Todas em Tech | Back-end | 2021 | Semana 13 -  Integração BackEnd + Banco de Dados

<br>
<br>


## Plano da aula:
------
### `1. Chamada, apresentação das monitoras e acordos`
<img src="https://i.pinimg.com/474x/b4/17/86/b41786b5e7627ed0c678a0ef4a62e9f6.jpg" alt="video chamada" width="200">

* Usar as reações do zoom e levantar a mão para sinalizar que gostaria de falar
* Enviar as dúvidas no chat
* Manter microfone desligado quando outras pessoas estiverem falando
* Manter câmera ligada o máximo possível
* Momento mão no código, momento de olho na tela

<br>
<br>

### `2. Apresentação da {profa} Simara` 

  <img src="https://media.giphy.com/media/efhcZv18NpQDyRsaYa/giphy.gif" alt="Gif Yeah" width="200">

Ex-aluna {reprograma}, desenvolvedora na ThoughtWorks e criadora do Podcast Quero Ser Dev.

Minha história com o MongoDb.
Já dizia Jobs, a gente só consegue conectar os pontos olhando pra trás.

<br>
<br>

### `3. Por que precisamos de um banco de dados?`

Vantagens: 
* Facilidade de acesso
* Análises e comparativos
* Segurança de dados
* Atualizações e aprimoramento das informações
* Escalabilidade 

<br>
<br>

#### `4. NoSQL v/s SQL`

| NoSQL | SQL |
| --- | --- |
| `Surgiu no final dos anos 90 e como uma alternativa de natureza não relacional` | RDBMS ou Sistema de Gerenciamento de Banco de Dados Relacional, armazenam dados em um formato estruturado, usando linhas, colunas e tabelas |
| `Possuem alta escalabilidade e desempenho` | Geralmente demanda distribuição vertical de servidores, o que gera mais custo, pois quanto mais dados, mais memória e mais disco um servidor precisa. |
| `Alguns tipos de bancos de dados não relacional: armazenamento de chave-valor, armazenamento column family, orientado a grafos e orientado a documentos` | Structured Query Language, ou Linguagem de Consulta Estruturada ou SQL, é a linguagem de pesquisa declarativa padrão para banco de dados relacional.|

Aqui está um comparativo dos termos MongoDb e SQL:

| MongoDB | SQL |
| --- | --- |
| `database` | database|
| `collection` | table|
| `document` | row|
| `field` | column|
| `lookup` | table joins|


<br>
<br>

#### `5. O que é MongoDB?`
Um banco de dados não relacional, orientado a documentos, livre com o código aberto e multiplataforma. Ele foi escrito na linguagem C++.

No MongoDB, os conjuntos de dados forma uma collection, cada item forma um documento e dentro dos documentos temos os campos.

Os dados são armazenados no formato JSON, o que é uma grande facilidade para quem programa com Javascript.

Podemos usá-lo pelo serviço de nuvem(cloud) ou localmente fazendo o download para nossa máquina (vamos usar essa opção).

Além disso, o Mongo possui seu driver com suas próprias queries(comandos para interação com o banco que se assemelham muito com javascript com orientação a objeto), podemos também usar uma interface gráfica e ainda podemos usar um ODM(vamos usar a última opção).

#### `6. Quem usa MongoDB?`
Mais de 22.600 clientes no mundo usam MongoDB. Algumas delas: Google, Forbes, eBay, Toyota, SAP, Adobe e muitas outras.

#### `7. Operações de CRUD`
O CRUD é um acrônimo para Create, Read, Update e Delete(criação, consulta, atualização e remoção de dados) . São as 4 operações principais em um banco de dados. No MongoDB, usando o Mongoose essas funcionalidades são:


| OPERAÇÃO | MONGODB | MONGOOSE |
| --- | --- | --- |
| `C`REATE | insertOne() | save() |
| `R`EAD | find() | find() |
| `U`PDATE | updateOne() | save() |
| `D`ELETE | deleteOne() | remove() |

Para conhecer todas as operações MongoDb: 
https://docs.mongodb.com/manual/crud/

#### `8. O que é odm?`
Uma ferramenta que mapeia entre um Modelo de Objeto e um Banco de Dados de Documentos.

#### `9. Mongoose`

Mongoose é uma modelagem de objeto mongodb elegante para node.js.

Tudo no Mongoose começa com um Schema. Cada esquema é mapa para uma coleção MongoDB e define a forma dos documentos dentro dessa coleção.

Exemplo photoshop x Filtro do Instagram

#### `10. Conceito de Model (Schema)`
Model ou Schema são moldes que descrevem quais campos serão aceitos no seu banco de dados, podemos também definir informações de tipo de dados e fazer "os relacionamentos".

#### `11. Extra: `

`Dotenv`

Essa dica com certeza dará mais maturidade aos seus códigos de backend.
Afinal de contas dotenv é uma excelente ferramenta para gerenciar os dados sensíveis de desenvolvimento que não devem ser compartilhados como: chaves de API’s, informações do banco de dados, entre outras.

Vem aprender como orquestrar suas variáveis do ambiente dev em apenas 4 passos:

```
1- No seu projeto node com express, instale como dependência de desenvolvimento o dotenv. Utilize yarn ou npm.

yarn add dotenv -D
npm I —save-dev dotenv

2- Crie o arquivo .env

E nele crie suas chaves e valores que contém informações sensíveis e não podem ser compartilhadas além do ambiente de dev.

Por padrão as chaves são maiúsculas e não podem conter espaço, os valores ficam após o igual e podem ser de qualquer tipo pois retornarão sempre uma string:

NOME_DA_CHAVE=valor

3- Execute o ‘dotenv’, importando, usando a função config e incluindo ao processo para ler as variáveis configuradas:

require(‘dotenv’).config( )
process.env.NOME_DA_CHAVE

4- Como boa prática lembre-se de incluir seu arquivo .env no .gitignore

Você pode criar um .env.example e deixar apenas as chaves genéricas
```

____
### Mão no código

Vamos criar nossa primeira integração com MongoDB. Será um CRUD para um sistema simples de cadastros de livros.

Mas antes disso, vamos preparar nosso ambiente:

[Guia para instalar o MongoDB](https://drive.google.com/file/d/1lhw4exyMhoBVWz3aMzHK_ANPF-OxfoMm/view?usp=sharing)

`Tecnologias que vamos usar:`
| Ferramenta | Descrição |
| --- | --- |
| `javascript` | Linguagem de programação |
| `nodejs` | Ambiente de execução do javascript|
| `express` | Framework NodeJS |
| `dotenv` | Dependência para proteger dados sensíveis do projeto|
| `mongoose` | Dependência que interage com o MongoDB para a conexão da database, criação do model e das collections|
| `nodemon` | Dependência que observa as atualizações realizadas nos documentos para rodar o servidor automaticamente|
| `npm ou yarn` | Gerenciador de pacotes|
| `MongoDb` | Banco de dado não relacional orietado a documentos|
| `MongoDb Compass` | Interface gráfica para verificar se os dados foram persistidos|
 `Insomnia ou Postman` | Interface gráfica para realizar os testes|


`Vamos iniciar o projeto`
```
1- Iniciar projeto node: npm init -y

2- Instalar express e mongoose: 
npm i --save express mongoose

3- Instalar como dependencias de desenvolvimento o dotenv e o nodemon:
npm i --save-dev dotenv nodemon
```

`Arquitetura - vamos criar nossas pastinhas e arquivos`
#### Server.js
> Sobe servidor nodejs, usa as rotas, converte os dados para Json e faz conexao com a importação do db.

#### .env
> Gerencia a variavel de ambiente de configuração do MongoDb

#### .env.example
> Salva a variavel de forma genérica

#### .gitignore
> Ignora arquivos e pastas para o git

#### 📂SRC

#### 📂Routes
>  Cria as rotas apenas com a responsabilidade dos metodos HTTP
#### 📂Controllers
> Cria a lógica e salva as informações do db.
#### 📂Models
> Modela o esquema de dados para o banco.
#### 📂Data
> Cria a configuração de conexão com o banco.


`Vamos configurar o mongoose e conectar o mongodb`
```
1- Em models cria o esquema e exporta o models

2- Em database cria toda a configuração de conexão e passa a string de conexão

3- No server realmente chama o database e liga o mongodb, usando o mongoose 

4- Verifica se no terminal o console retorna a mensagem de banco de dados conectado ou erro.
```

`Vamos criar nosso model com o Mongoose para modelar nosso objeto. O nosso documento será conforme abaixo:`

* name
  - String
  - required
  
* author
  - String
  - required
* pages
  - Number
  - required
* created_at
  - Date
  - required
  - default

---
<br>
**CRUD:**
o endpoint será: localhost:3333/livros

<br>
<br>

`Comportamento esperado`

| Recurso | Descrição |
| --- | --- |
| `/` | Deverá listar todos os livros cadastrados|

| Recurso | Descrição |
| --- | --- |
| `/` | Deverá criar um novo livro a partir do corpo da requisição|

| Recurso | Descrição |
| --- | --- |
| `/:id` | A partir do route params id, deverá ser possível buscar um livro para listá-lo.|

| Recurso | Descrição |
| --- | --- |
| `/:id` | A partir do route params id, deverá ser possível buscar um livro para alterar uma informação específica que será passada pelo corpo da requisição.|

| Recurso | Descrição |
| --- | --- |
| `/:id` | A partir do route params id, deverá ser possível buscar um livro para deletá-lo.|

<br>

***Obs.: Todas as rotas deverão ser testadas no postman ou insomnia e verificar se as informações foram de fato persistidas no mongodb***

`Vamos se os dados estão salvando no MongoDB pela interface gráfica MongoCompass`

```
1- Abre o Mongo Compass
2- Clica em nova conexão
3- Cola a string de conexão que usamos lá no nosso arquivo database
4- Se o db não aparecer automaticamente, clica no botão create database e coloca os mesmos nomes que salvamos no nosso projeto node. Exemplp: db: livros, collection: livros e finaliza
5- Encontre na lista de databases a que voce deseja conectar, clique no db e depois na collection e consiga ver suas alterações sendo salvas lá
```

`Vamos testar nossas requisições e respostas com o Postman ou Insomnia`
1- crie as requisições para cada método HTTP, coloque a rota e informações necessárias e envie
2-  Tudo que foi feito por dentro do postman deve refletir no MongoCompass :)

<br>

---

### Entregável da semana

Vamos criar uma integração com MongoDB. Será um CRUD para um sistema simples de cadastros de filmes.

Usaremos Mongoose para modelar nosso objeto e conectar com o banco de dados. Os campos serão conforme abaixo: 

* title
  - String
  - required 
* description
  - String
  - required
* type
  - String
  - required
* available_on
  - String
  - required
* created_at
  - Date
  - required
  - default

---
<br>
**CRUD:**
o endpoint será: localhost:3333/movies

<br>
<br>

| Recurso | Descrição |
| --- | --- |
| `/` | Deverá listar todos os filmes cadastrados|

| Recurso | Descrição |
| --- | --- |
| `/` | Deverá criar um novo filme a partir do corpo da requisição|

| Recurso | Descrição |
| --- | --- |
| `/:id` | A partir do route params id, deverá ser possível buscar um filme para listá-lo.|

| Recurso | Descrição |
| --- | --- |
| `/:id` | A partir do route params id, deverá ser possível buscar um filme para alterar uma informação específica que será passada pelo corpo da requisição.|

| Recurso | Descrição |
| --- | --- |
| `/:id` | A partir do route params id, deverá ser possível buscar um filme para deletá-lo.|
---

***Obs.: Todas as rotas deverão ser testadas no postman ou insomnia e verificar se as informações foram de fato persistidas no db***

---
## Simara Conceição
- [instagram](https://www.instagram.com/simara_conceicao)
- [linkedin](https://www.linkedin.com/in/simaraconceicao/)
- [github](https://github.com/simaraconceicao)
- [spotify](https://open.spotify.com/show/59vCz4TY6tPHXW26qJknh3)
- [blog](https://simaraconceicao.com/blog)