const http = require('http');
const app = require('./app');
const server = http.createServer(app);
const { db } = require('./models');

const port = 3000;

const init = async () => {
    //sync creates the table if it does not exist. alter true creates the tables and makes any changes to keep the modules in sync
    await db.sync({force:false})
    server.listen(port, () => {
      console.log(`Server is listening on port ${port}!`);
    });
  }
  
  init();
