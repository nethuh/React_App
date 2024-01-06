var express = require('express');
const ProductsController = require("../controller/ProductsController");
var router = express.Router();
// const [productsList] = require('../constants/const')
const {productsList} = require('../constants/const')

/* GET all products listing. */
// http://localhost:4000/products/all
router.get('/all', ProductsController.GetAllProducts);

router.post('/save', ProductsController.SaveProduct);

module.exports = router;
