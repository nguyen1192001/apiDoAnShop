const express = require('express')
const app = express()
const db  = require('./config')
const productRoute = require('./Product')
const productCart = require('./Cart')
const productUser = require('./Users')
const cors = require('cors');
// const authMiddleware = require('./middleware/authMiddleware')
app.use(cors());
app.use (express.urlencoded())
db.connect();
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
     next();
});

app.use('/product',productRoute)
app.use('/user',productUser)
app.use('/cart',productCart)

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});


