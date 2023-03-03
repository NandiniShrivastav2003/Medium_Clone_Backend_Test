const express = require('express');
const router = express.Router();
const Product = require('../models/product');

//display all the products
router.get('/products', async (req, res) => {
    //.find()  method finds all products.
    const products = await Product.find({});
    console.log(products);
    res.render('index',{products});
})
router.get('/products/new',(req,res)=>{
    res.render('new');
})
router.get('/products/:productid',async(req,res)=>{
    const {productid} =req.params;
   const product=await Product.findById(productid);
    res.render('show',{product});
})
router.post('/products', async function(req,res){
    const {title,description,markdown}=req.body;
// await Product.create({"name":product, "price":pri,"desc":descrip});
await Product.create({title,description,markdown});
 console.log('added');
    res.redirect('/products');
})

module.exports = router;