const express = require('express');
const router = express.Router();

/* GET products listing. */
router.get('/', function (req, res, next) {
    res.json({"message": "Hello World"});
});


module.exports = router;