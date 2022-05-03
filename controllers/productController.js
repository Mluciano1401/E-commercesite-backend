const Product = require("../models/Product");

exports.createProduct = async (req, res) => {
    try{
      let product;
      product = new Product(req.body);
      await product.save();
      res.status(201).send(product)
    }
    catch (error){
      body_error={
        "Mistake in sight!":error
      }
      res.status(500).send(body_error);
    }    
}

exports.getProducts = async (req,res) => {
  try{
    const products = await Product.find();
    res.json(products);
  }
  catch (error){
    body_error={
      "Mistake in sight!":error
    }
    res.status(500).send(body_error);
  }
}
exports.getProduct = async (req,res) => {
  try{
    let product = await Product.findById(req.params.id);
    if(!product){
      res.status(404).json({ msg: 'product not found'});
      res.send({ error: "404"});
    }
    else{
      res.json(product);
    }
  }
  catch (error){
    body_error={
      "Mistake in sight!":error
    } 
    res.status(500).send(body_error);
  }
}
exports.getsproductsbysupplier = async (req,res)=>{
  try{
    let product = await Product.find({supplier: req.params.supplier});
    if(!product){
      res.status(404).json({ msg: 'products not found'});
    }
    res.send(product);
  }
  catch (error){
    body_error={
      "Mistake in sight!":error
    }
    res.status(500).send(body_error);
  }
}
exports.getsproductsbycategory= async (req,res)=>{
  try{
    let product = await Product.find({category: req.params.category});
    if(!product){
      res.status(404).json({ msg: 'products not found'});
    }
    res.json(product);
  }
  catch (error){
    body_error={
      "Mistake in sight!":error
    }
    res.status(500).send(body_error);
  }
}
exports.updateProduct = async (req,res) => {
  try{
    const { name, description, urlImg, price, category, supplier }= req.body;
    let product = await Product.findById(req.params.id);
    if(!product){
      res.status(404).json({ msg: 'product not found'});
    }
    product.name = name;
    product.description = description;
    product.urlImg = urlImg;
    product.price = price;
    product.category = category;
    product.supplier = supplier;
    product = await Product.findByIdAndUpdate({_id: req.params.id}, product, {new:true});
    res.json(product);
  }
  catch (error){ 
    body_error={
      "Mistake in sight!":error
    }
    res.status(500).send(body_error);
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
    body_error={
      "Mistake in sight!":error
    }
    res.status(500).send(body_error);
  }
}