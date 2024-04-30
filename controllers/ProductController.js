const db = require("../database/setup/products");

class ProductController {
    index(req, res, next) {
        db.all('SELECT * FROM products', (err, rows) => {
            if (err) {
                res.status(500).json({"error": err.message});
                return;
            }
            res.json(rows);
        });
    }

    create(req, res, next) {
        const {name, price, image} = req.body;
        const sql = 'INSERT INTO products (name, price, image) VALUES (?, ?, ?)';
        const params = [name, price, image];
        db.run(sql, params, function (err) {
            if (err) {
                res.status(400).json({"error": err.message});
                return;
            }
            res.json({"product_id": this.lastID});
        });
    }

    get(req, res, next) {
        const id = req.params.id;
        db.get('SELECT * FROM products WHERE id = ?', [id], (err, row) => {
            if (err) {
                res.status(400).json({"error": err.message});
                return;
            }
            res.json(row);
        });
    }

}

module.exports = new ProductController();