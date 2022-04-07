const User = require("../models/User");

exports.createuser = async (req, res) => {
    try{
      let user;
      user = new User(req.body);
      await user.save();
      res.send(user);
    }
    catch (error){
      res.status(500).send('Mistake in sight!', error);
    }    
}

exports.getusers = async (req,res) => {
  try{
    const users = await User.find();
    res.json(users);
  }
  catch (error){
    res.status(500).send('Mistake in sight!', error);
  }
}
exports.getuser = async (req,res) => {
  try{
    let user = await User.findById(req.params.id);
    if(!user){
      res.status(404).json({ msg: 'user not found'});
    }
    res.json(user);
  }
  catch (error){
    res.status(500).send('Mistake in sight!', error);
  }
}
exports.updateuser = async (req,res) => {
  try{
    const { name, lastname, username, password, money }= req.body;
    let user = await User.findById(req.params.id);
    if(!user){
      res.status(404).json({ msg: 'user not found'});
    }
    user.name = name;
    user.lastname = lastname;
    user.username = username;
    user.password= password;
    user.money = money;
    user = await user.findByIdAndUpdate({_id: req.params.id}, user, {new:true});
    res.json(user);
  }
  catch (error){ 
    res.status(500).send('Mistake in sight!', error);
  }
}
exports.deleteuser = async (req,res) => {
  try{
    let user = await User.findById(req.params.id);
    if(!user){
      res.status(404).json({ msg: 'user not found'});
    }
    await user.findByIdAndRemove({_id: req.params.id})
    res.json({ msg: 'user removed successfully'});
  }
  catch (error){
    res.status(500).send('Mistake in sight!', error);
}
}