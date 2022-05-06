const express = require('express');
const connectDB = require('./config/db');
const cors = require("cors");
const app = express();

connectDB();
app.use(cors());
app.use(express.json());
app.use('/api/product', require('./routes/productroutes'));
app.use('/api/user', require('./routes/useroutes'));
app.use('/api/category', require('./routes/category'));
app.use('/api/auth', require('./routes/authroutes'));
app.use('/api/purchase', require('./routes/purchaseroutes'));

app.listen(4000, ()=>{
    console.log('The server is running very cool on port 4000')
})