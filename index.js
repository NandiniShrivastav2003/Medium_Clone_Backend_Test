const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
app.set('view engine', 'ejs');
const seedDB = require('./seed');
const productRoutes = require('./routes/ProductRoutes');
const Product = require('./models/product');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true }));
mongoose.connect('mongodb://localhost:27017/mediumApp')
    .then(() => console.log('DB connected'))
    .catch((err) => console.log(err));

app.get('/',(req, res) => {
    res.send('Home Page');
})
// app.get('/products/:productid', (req, res) => {
//     //  console.log(req.params);
//     const { productid} = req.params;
//     const foundComment = Product.findByIdAndUpdate(productid);
//     //console.log(foundComment);
//     res.render('show', { product: foundComment });
// })

// app.get('/products/:productid/edit', (req, res) => {
//     const { productid } = req.params;
//     const foundComment = Product.findById(productid);
//     res.render('edit', { products: foundComment });
// })
// app.patch('/products/:productid', (req, res) => {
//     const { productid } = req.params;
//     const foundComment = Product.findByIdAndDelete(productid);
   
//     res.render('show', { products:foundComment});
// })

seedDB();
app.use(productRoutes);
app.listen(2000, () => {
    console.log('server is runnin gon port 2000');
})