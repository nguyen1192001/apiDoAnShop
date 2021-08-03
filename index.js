const express = require('express')
const app = express()
const port = 4000
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

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

