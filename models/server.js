const express = require("express");
const cors = require("cors");
const { dbConnection } = require("../database/config");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.inbox = "/api/inbox";
    this.path = "/api/users";
    // Connect to db
    this.connectToDb();
    // Middlewares
    this.middlewares();
    // my routes
    this.routes();
  }

  async connectToDb() {
    await dbConnection();
  }

  middlewares() {
    // CORS
    this.app.use(cors());
    // parse body to json
    this.app.use(express.json());
    // Public dir
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.inbox, require('../routes/inbox.routes'));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`listen in port: ${this.port}`);
    });
  }
}

module.exports = Server;
