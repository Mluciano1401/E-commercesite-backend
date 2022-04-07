const mongoose = require('mongoose');
const UserSchema = require('../models/User');

UserSchema.statics = {
    create: function(data, cb){
        const user = new this(data)
        user.save(cb)
    },
    login: function(query, cb){
        this.find(query, cb);
    }
}
const authModel = mongoose.model("Auth", UserSchema);
module.exports = authModel;