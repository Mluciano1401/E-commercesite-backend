const Purchase = require('../models/Shop')

exports.buyproccess = async (req,res) =>{
    try{
      let purchase;
      purchase = new Purchase(req.body);
      await purchase.save();
      res.send(purchase);
    }
    catch (error){
      body_error={
        "Mistake in sight!":error
      }
      res.status(500).send(body_error);
    }    
  }
exports.gethistorybyuser = async (req,res)=>{
    try{
        let customer= await Purchase.find({customer: req.params.customer});
        if(!customer){
          res.status(404).json({ msg: 'customer not found'});
        }
        res.send(customer);
      }
      catch (error){
        body_error={
          "Mistake in sight!":error
        }
        res.status(500).send(body_error);
      }
}