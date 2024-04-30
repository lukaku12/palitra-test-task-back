const ProductFactory = require('../factories/ProductFactory');

class DatabaseSeeder {
    static run() {
        ProductFactory.create(10);
    }

}


module.exports = DatabaseSeeder;