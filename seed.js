const mongoose=require('mongoose');
const Product=require('./models/product');
const Dummy_Products=[
    {
        title:'Ukraine War 1,March 2023 Update',
        description:2/3/2023,
         markdown:"Hello everybody it is the new month and thus time for an update"
    },
    {
      title:'The maze is in the house',
        description:2/3/2023,
        markdown:"What ails Google,And how it can turn things around"
    },
    {
        title:'apple watch series-6',
        description:3/2/2023,
        markdown:"Apple"                                           
    },
   
];
async function seedDB(){
    //delete many is used to remove same occurrences of multiple products.
  await Product.deleteMany({});
 await Product.insertMany(Dummy_Products);
 console.log('DB seeded');
}

module.exports=seedDB;