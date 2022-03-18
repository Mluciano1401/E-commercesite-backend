const Product = require("../models/Product");

exports.createProduct = async (req, res) => {
    try{
      let product;
      product = new Product(req.body);
      await product.save();
      res.send(product);
    }
    catch (error){
      res.status(500).send('Mistake in sight!', error);
    }    
}

exports.getProducts = async (req,res) => {
  try{
    const products = await Product.find();
    res.json(products);
  }
  catch (error){
    res.status(500).send('Mistake in sight!', error);
  }
}
exports.getProduct = async (req,res) => {
  try{
    let product = await Product.findById(req.params.id);
    if(!product){
      res.status(404).json({ msg: 'product not found'});
    }
    res.json(product);
  }
  catch (error){
    res.status(500).send('Mistake in sight!', error);
  }
}
exports.updateProduct = async (req,res) => {
  try{
    const { name, description, urlImg, price, idCategory }= req.body;
    let product = await Product.findById(req.params.id);
    if(!product){
      res.status(404).json({ msg: 'product not found'});
    }
    product.name = name;
    product.description = description;
    product.urlImg = urlImg;
    product.price = price;
    product.idCategory = idCategory;
    product = await Product.findByIdAndUpdate({_id: req.params.id}, product, {new:true});
    res.json(product);
  }
  catch (error){ 
    res.status(500).send('Mistake in sight!', error);
  }
}
exports.deleteProduct = async (req,res) => {
  try{
    let product = await Product.findById(req.params.id);
    if(!product){
      res.status(404).json({ msg: 'product not found'});
    }
    await Product.findByIdAndRemove({_id: req.params.id})
    res.json({ msg: 'product removed successfully'});
  }
  catch (error){
    res.status(500).send('Mistake in sight!', error);
  }
}