const sqlite = require('sqlite3').verbose();
const bd = new sqlite.Database('./src/infra/database.bd')

module.exports = bd;



