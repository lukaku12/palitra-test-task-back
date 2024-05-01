const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database(':memory:')

db.serialize(() => {
    db.run('CREATE TABLE products (id int, name TEXT, price REAL, image TEXT, description TEXT)')
})

module.exports = db