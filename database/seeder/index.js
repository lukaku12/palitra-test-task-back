const ProductFactory = require('../factories/ProductFactory');

class DatabaseSeeder {
    static run() {
        ProductFactory.create(100);
    }

}


module.exports = DatabaseSeeder;