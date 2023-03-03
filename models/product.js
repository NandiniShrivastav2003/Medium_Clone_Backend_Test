const mongoose=require('mongoose');

const productSchema = new mongoose.Schema({
  title:{
        type:String,
        trim :true,  // (Spaces ko trim kr dega)
        required:true
    },
    description:{
        type:Date,

    },
  markdown:{
        type:String,
        trim:true
    }

});
const Product=mongoose.model('Product',productSchema);
module.exports=Product;