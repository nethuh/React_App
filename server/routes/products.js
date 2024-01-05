var express = require('express');
var router = express.Router();

/* GET all products listing. */
router.get('/all', function(req, res, next) {
  res.send(
      [
        {
          "id": 1,
          "name": "Product 1",
          "price": "200",
          "currency": "LKR",
          "image": "src/images/pig.png"
        },
        {
          "id": 2,
          "name": "Product 2",
          "price": "200",
          "currency": "LKR",
          "image": "pig.png"
        },
        {
          "id": 3,
          "name": "Product 3",
          "price": "200",
          "currency": "LKR",
          "image": "pig.png"
        }
      ]

  );
});

module.exports = router;
