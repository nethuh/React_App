const {productsList} = require("../constants/const");
const Product = require("../model/Product");

const ProductsController = {
    GetAllProducts:async function(req, res, next) {
        try {
            const ProductList = await Product.find();
            res.status(200).json(productsList)
            // res.send(productsList);
        }catch (err){
            console.error(err);
            res.stale(500).json({
                error: "Something went Wrong"
            })
        }
    },

    GetProduct :async function (req, res, next){
        try {
            const ProductID = req.params.id;
            const product = await Product.find({id:ProductID})

            res.status(200).json(product);
        } catch (err){
            console.error(err);
            res.status(500)
                .json({ error:
                        'Something went wrong'})
        }


    },

    UpdateProduct :async function (req, res, next){
        try {
            const productID = req.params.id;
            const productData = req.body;
            const updateProduct
            = Product.findOneAndUpdate({
                id:productID
            },
                productData,
                {new: true});

            if (!updateProduct){
                return res.status(404).json({error:'Product not found'});
            }
            res.status(200).json(updateProduct);

        } catch (err){
            console.error(err);
            res.status(500)
                .json({ error:
                        'Something went wrong'})
        }


    },



    SaveProduct :async function (req, res, next){
        try {
            const ProductData = req.body;

            const product = await Product.create(ProductData)
            res.status(200).json(product);
        } catch (err){
            console.error(err);
            res.status(500)
                .json({ error:
                'Something went wrong'})
        }


    }
}
module.exports = ProductsController;
