const Auth = require('../auth/auth.dao');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const SECRET_KEY = 'secretkey123456';

exports.createUser = (req, res, next) => {
    const newAuth = {
        name: req.body.name,
        lastname: req.body.lastname,
        username: req.body.username,
        password: bcrypt.hashSync(req.body.password),
        role: req.body.role
    }
    Auth.create(newAuth, (err, user)=> {
        if(err && err.code === 11000){
            return res.status(409).send("Username already exists");
        }
        if (err){
            return res.status(500).send('Server error');
        }
        const expiresIn = 24 * 60 *60;
        const accessToken = jwt.sign({id: user.id},
            SECRET_KEY,{
                expiresIn: expiresIn
            });
        const dataUser = {
            name: user.name,
            lastname: user.lastname,
            username: user.username,
            role: user.role,
            accessToken: accessToken,
            expiresIn: expiresIn
        }
        res.send({ dataUser })
    })
}
exports.login = (req, res, next) => {
    const userData ={
        username: req.body.username,
        password: req.body.password
    }
    Auth.findOne({username: userData.username}, (err, user) => {
        if(err){
            return res.status(500).send('Server error!');
        }
        if(!user){
            res.status(404).send({message: 'User not found'});
        } else{
            const resultPassword = bcrypt.compareSync(userData.password, user.password);
            if(resultPassword){
                const expiresIn = 24 * 60 * 60;
                const accessToken = jwt.sign({id: user.id}, SECRET_KEY, {expiresIn: expiresIn});
                const dataUser = {
                    name: user.name,
                    lastname: user.lastname,
                    username: user.username,
                    role: user.role,
                    accessToken: accessToken,
                    expiresIn: expiresIn
                }
                res.send({ dataUser });
            }else{
                res.status(404).send({message: 'Something is wrong'});
            }
        }
    })
}
exports.getUser = (req, res, next) => {
    try{
      const users = Auth.find(user); 
      console.log(users)  
      res.send({users})
    }
    catch (error){
        body_error={
          "Mistake in sight!":error
        }
        res.status(500).send(body_error);
      }
}