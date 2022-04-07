const Category = require("../models/Category");

exports.createcategory = async (req, res) => {
    try{
      let category;
      category = new Category(req.body);
      await category.save();
      res.send(category);
    }
    catch (error){
      res.status(500).send('Mistake in sight!', error);
    }    
}

exports.getcategorys = async (req,res) => {
  try{
    const categorys = await Category.find();
    res.json(categorys);
  }
  catch (error){
    res.status(500).send('Mistake in sight!', error);
  }
}
exports.getcategory = async (req,res) => {
  try{
    let category = await Category.findById(req.params.id);
    if(!category){
      res.status(404).json({ msg: 'category not found'});
    }
    res.json(category);
  }
  catch (error){
    res.status(500).send('Mistake in sight!', error);
  }
}
exports.updatecategory = async (req,res) => {
  try{
    const { name, description, urlImg, price, idCategory }= req.body;
    let category = await category.findById(req.params.id);
    if(!category){
      res.status(404).json({ msg: 'category not found'});
    }
    category.name = name;
    category.description = description;
    category.urlImg = urlImg;
    category.price = price;
    category.idCategory = idCategory;
    category = await Category.findByIdAndUpdate({_id: req.params.id}, category, {new:true});
    res.json(category);
  }
  catch (error){ 
    res.status(500).send('Mistake in sight!', error);
  }
}
exports.deletecategory = async (req,res) => {
  try{
    let category = await Category.findById(req.params.id);
    if(!category){
      res.status(404).json({ msg: 'category not found'});
    }
    await category.findByIdAndRemove({_id: req.params.id})
    res.json({ msg: 'category removed successfully'});
  }
  catch (error){
    res.status(500).send('Mistake in sight!', error);
  }
}