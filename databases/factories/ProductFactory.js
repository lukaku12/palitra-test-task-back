const faker = require('@faker-js/faker');
const db = require('../setup/products');

class ProductFactory {
    createProduct() {
        const name = faker.fakerEN.commerce.productName();
        const price = faker.fakerEN.commerce.price();
        const image = faker.fakerEN.image.url();

        const sql = 'INSERT INTO products (name, price, image) VALUES (?, ?, ?)';
        const params = [name, price, image];

        db.run(sql, params, function (err) {
            if (err) {
                console.log("Error: ", err.message);
                return;
            }
            console.log("Product created with id: ", this.lastID);
        });
    }

    create(count = 1) {
        for (let i = 0; i < count; i++) {
            this.createProduct();
        }
    }
}

module.exports = new ProductFactory();