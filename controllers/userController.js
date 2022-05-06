const User = require('../auth/auth.dao');
exports.createuser = async (req, res) => {
    try{
      let user;
      user = new User(req.body);
      await user.save();
      res.send(user);
    }
    catch (error){
      body_error={
        "Mistake in sight!":error
      }
      res.status(500).send(body_error);
    }    
}

exports.getusers = async (req,res) => {
  try{
    const users = await User.find();
    res.json(users);
  }
  catch (error){
    body_error={
      "Mistake in sight!":error
    }
    res.status(500).send(body_error);
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
    body_error={
      "Mistake in sight!":error
    }
    res.status(500).send(body_error);
  }
}
exports.getuserbyname = async (req,res)=>{
  try{
    let user= await User.find({username: req.params.username});
    if(!user){
      res.status(404).json({ msg: 'user not found'});
    }
    res.send(user);
  }
  catch (error){
    body_error={
      "Mistake in sight!":error
    }
    res.status(500).send(body_error);
  }
}
exports.updateuser = async (req,res) => {

  
  try{
    const { name, lastname, username, password,role, money,urlImg }= req.body;
    let user = await User.findById(req.params.id);
    if(!user){
      res.status(404).json({ msg: 'user not found'});
    } 
    
    user.name = name;
    user.lastname = lastname;
    user.username = username;
    user.password= password;
    user.role = role;
    user.money = money;
    user.urlImg = urlImg;
    user.save()
    res.json(user);
  }
  catch (error){ 
    body_error={
      "Mistake in sight!":error
    }
    res.status(500).send(body_error);
  }
}
exports.updatemoneyuser = async (req,res) => {  
  try{
    const {money}= req.body;
    let user = await User.findById(req.params.id);
    if(!user){
      res.status(404).json({ msg: 'user not found'});
    } 
    user.money = money;
    user.save();   
    res.json(user);
   
  }
  catch (error){ 
    body_error={
      "Mistake in sight!":error
    }
    res.status(500).send(body_error);
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
    body_error={
      "Mistake in sight!":error
    }
    res.status(500).send(body_error);
  }
}