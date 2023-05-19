/**
 * @file database.js
 * @description this file is for the connecting the mongoose database to our react app. if the connection is succesfull then it will retrive all the tables which are created in the database. if there is no connection then it will throw an error that "database connection unsuccesfull". 
 * @author Tanoj kumar Innamuri
 */
const mongoose = require("mongoose");
const logger = require("../helpers/logger");
const process = require("process");
require('dotenv').config();

class Database {
  MONGODB_URI = process.env.MONGODB_URI;

  constructor() {
    if (this.MONGODB_URI) {
      this._connect();
    } else {
      console.log(this.MONGODB_URI);
      throw new Error("No MONGODB_URI configured");
    }
  }

  _connect() {
    mongoose
      .connect(this.MONGODB_URI, {
        useCreateIndex: true,
        useUnifiedTopology: true,
        useNewUrlParser: true,
      })
      .then(() => {
        logger.info("Database connection successful");
        logger.info(`Database name: ${mongoose.connection.name}`);
      })
      .catch((err) => {
        logger.error(err);
        logger.info("Database connection error");
      });
  }

  close() {
    const conn = mongoose.connection;
    conn.close();
  }

  getConnection() {
    return mongoose.connection;
  }

  dropAllDatabase() {
    const conn = mongoose.connection;
    return conn.dropDatabase();
  }
}

module.exports = new Database();
