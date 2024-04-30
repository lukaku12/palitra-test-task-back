const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database(':memory:')

db.serialize(() => {
    db.run('CREATE TABLE products (name TEXT, price REAL, image TEXT)')

    // ... rest of your code
})

module.exports = db