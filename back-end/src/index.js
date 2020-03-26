
const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
 

app.listen(3333);






/**
 * Rota / Recurso
 */

 /**
  * Métodos HTTP:
  * GET: Buscar/listar uma informação do back-end
  * POST: Criar uma informação no back-end
  * PUT: Alterar uma informação no back-end
  * DELETE: Deletar uma informação no back-end
  */

  /** Iniciar terminal
   *  Ctrol + ""
   * 
   * Executar: node index.js
   */

   /**
    * Tipos de parâmetros:
    * 
    * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
    * EX: http://localhost:3333/users?name=Larissa
    * 
    * Route Params: Parâmetros utilizados para identificar recursos
    * EX: http://localhost:3333/users/:id
    * 
    * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
    * 
    */

    /**
     * OBTER ACESSO AOS QUERY PARAMS:
     * 
     *     app.get('/users',(request, response) => {
     *  const params = request.query;
     * 
     * console.log(params);
     * 
     * return response.json({
     * evento : 'Semana OmniStack 11.0',
     * aluno : 'Larissa do Carmo'
     * });
     * });
     * 
     */

     /**
      * OBTER ACESSO AOS ROUTE PARAMS:
      * app.get('/users/:id',(request, response) => {
      * const params = request.params;
      * 
      * console.log(params);
      * 
      * return response.json({
      * evento : 'Semana OmniStack 11.0',
      * aluno : 'Larissa do Carmo'
      *  });
      * });
      *  */ 

      /**
       * OBTER ACESSO AOS REQUEST BODY:
       * 
       *  app.post('/users',(request, response) => {
       * const body = request.body;
       * 
       *        console.log(body);
       * return response.json({
       * evento : 'Semana OmniStack 11.0',
       * aluno : 'Larissa do Carmo'
       * });
       * });

       */


       /**
        * PARAR DE REINICIAR O node:
        * 
        * comando: npm install nodemon -D
        * apos isso ir na pasta package.json e na parte de scripts trocar o teste por start e colocar "nodemon index.js"
        * após isso só é preciso colocar nodemon start para utilizar sem precisar reiniciar
        */


        /**
         * TIPOS DE BANCO DE DADOS:
         * 
         * SQL: MySQL, SQLite, PostgreSQL, Oracle, etc.
         * NoSQL: MongoDB, CouchDB, etc
         * 
         * 
         * 
         * FORMAS DE COMUNICAÇÃO COM O BANCO DE DADOS:
         * 
         * Driver: SELECT * FROM users
         * Query Builder: table('users').select('*').where (aceita qqe banco sql)
         * 
         * INSTALAR O KNEX.JS PARA UTILIZAR QUERY BUILDER
         * comando: npm install knex
         * apos isso, instalar o banco de dados que for utilizar (no caso SQLite):
         * npm install sqlite3
         * 
         * apos isso para executar o arquivo baixado:
         * npx knex init
         * */


         /**
          * CRIANDO MIGRATIONS
          * 
          * site da knex js
          * 
          * basicamente:
          *npx knex migrate:make create_tabela (nome da tabela)
          */