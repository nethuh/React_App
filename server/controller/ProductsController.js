const {productsList} = require("../constants/const");
const ProductsController = {
    GetAllProducts:function(req, res, next) {
        res.send(productsList);
    },

    SaveProduct :function (req, res, next){

    }
}
module.exports = ProductsController;
