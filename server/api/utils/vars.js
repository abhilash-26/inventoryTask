require("dotenv").config();

const db_url = process.env.mongo_url;
const port = process.env.port;

module.exports = { db_url, port };
