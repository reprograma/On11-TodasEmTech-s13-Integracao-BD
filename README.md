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
O CRUD é um acrônimo para Create, Read, Update e Delete(criação, consulta, atualização e remoção de dados) . São as 4 operações principais em um banco de dados. No MongoDB essas funcionalidades são:
```
Create - insert() ou save()

Read - find()

Update - update()

Delete - remove()
```

#### `8. O que é odm?`
Uma ferramenta que mapeia entre um Modelo de Objeto e um Banco de Dados de Documentos.

#### `9. Mongoose`

Mongoose é uma modelagem de objeto mongodb elegante para node.js.

Tudo no Mongoose começa com um Schema. Cada esquema é mapeado para uma coleção MongoDB e define a forma dos documentos dentro dessa coleção.

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

`Introdução de programação orientada a objetos`

#### class x function 

*O que é a programação orientada a objetos? 

*É um paradigma de desenvolvimento, uma forma de construir e analisar a nossa lógica,além disso é utilizado muito na maioria dos sistemas atuais* 

*Tudo o que fazemos na POO é trabalhar com objetos.Ela foi criada para tentarmos representar objetos do mundo real nos códigos, com estados e comportamentos.*

*Os 4 pilares da programação orientada a objeto:*

*herança: podemos extender propriedades e metodos de uma classe mae para uma classe filha.Isso serve para replicar as caracteristicas de um objeto para outro. Isso nos ajuda a escrever códigos sem repetir tanto as mesmas linhas de código.*

*encapsulamento: conceito simples e poderoso, pois guarda a lógica da nossa classe, deixando nossos atributos de forma privada e só podemos acessar utilizando os metodos de get e set.*

*polimorfismo: a capacidade de objetos compativeis, se passar por outro em certas ocaciões. Podemos dessa forma herdar metodos, e reescrever todos os comportamentos. "Podemos brincar a vontade com o DNA do nosso sistema".*

*abstração: não é um conceito concreto, chega ser redundante. O super poder é criarmos a classe mãe o mais abstrata possível, ela recebe o nome de template, identidade ou superclasse. Não pode ser criado um onjeto diretamente dessa classe, mas sim das classes filhas que herdam as caracteristicas e comportamentos da classe mae.*

*Se você começou agora, vai perceber com o tempo a importancia desses 4 pilares, pois eles são as bases de técnicas e ferramentas que nos ajudam desde a concepção do projeto até codificação dele. Uma dessas técnicas é o design patterns que nos ajudar a manter um padrão de qualidade em nossos códigos. Além disso, muitas linguagens utilizam esse paradigma: java, python, .Net, Javascript e muitas outras.*

* Como entender classes no JS.

*Classes são como formas/moldes que definem os métodos e as propriedades para instanciarmos um objeto. Dentro dela não definimos nenhum dado ou informação é apenas a forma de como nosso objeto irá se parecer. Já objetos são as versões instanciadas dessas classes, essencialmente uma versão especifica dessa classe com os valores para as propriedades. Por exemplo se criarmos uma class Parede que recebe a propriedade cor, ela não diz qual cor será pintada essa parede, apenas diz que quando for criado um objeto nova parede ela irá receber um valor para cor.*

* E a palavra reservada this?

*Antes de 2015 as classes eram escritas como funções, após o es6 usamos a sintaxe class e a palavra reservada this é usada para internamente da classe associarmos um valor.*


* Qual a função do constructor nas classes?

*As classes em JavaScript têm um método constructor que permite definir campos quando o objeto é instanciado com uma class, ou seja, é esse método que faz a contrução do objeto quando a gente cria uma intância dessa classe usando a palavra reservada new. Cada classe pode ter apenas um constructor. Se houver mais de um, SyntaxError será lançado. O constructor também pode chamar o método super para chamar o constructor de outra classe se a classe estender uma classe mãe. Configurando assim a herança na POO.*

* Quais seriam as situações que seria mais lógico usar classe ao invés de uma função?

*O mais importante a lembrar: as classes são apenas funções JavaScript normais e antes eram declaradas sem o uso da class sintaxe. Que somente foi adicionado ao ES6(2015) para tornar mais fácil declarar e herdar objetos complexos.*

*A principal diferença entre a sintaxe class e function é que function sofre hoisting, enquanto class não. Isso significa que um objeto nunca pode ser instanciado executando uma classe que foi declarada posteriormente. Enquanto é possível executar uma funçao antes e declarar depois. Pois o interpretador do javascript eleva a função para o topo da página.*

*Agora para decidir quando usar class ou function, é muito importante lembrar dos conceitos da programação orientada a objeto. Por exemplo quando nós encapsulamos a lógica em uma class, o código fica muito mais limpo e de fácil entendimento em vez de criarmos várias funções.*

*Geralmente usamos classes para construir diferentes objetos com as mesmas propriedades. Exemplo conta bancária. Usamos também em algumas bibliotecas e supersets (class components no React e typescript nos types e interfaces)*

____
### Mão no código

Vamos criar nossa primeira integração com MongoDB. Será um CRUD para um sistema simples de cadastros de livros.

Mas antes disso, vamos preparar nosso ambiente:

```
1- Baixar e instalar o MongoDb

2- Baixar e instalar o Mongo Compass ou Robo 3T 

3- Definir a porta como 27017

4- Criar conexão com a string: mongodb://localhost/books

5- Criar a database com o nome de books

6-  Iniciar projeto node/express 

7- Instalar a dependencia Mongoose

8- Instalar como dependencias de desenvolvimento o dotenv e o nodemon

9- Configurar o script de devStart do nodemon

10- Imprimir no console status de conexao com db e também status do servidor.
```


Usaremos Mongoose para modelar nosso objeto e conectar com o banco de dados. Os campos serão conforme abaixo: 

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

---
<br>
**CRUD:**
o endpoint será: localhost:3333/books

<br>
<br>

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

***Obs.: Todas as rotas deverão ser testadas no postman ou insomnia e verificar se as informações foram de fato persistidas no db***

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