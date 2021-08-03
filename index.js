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
function checkUserAuth(req, res, next) {
  if (req.session.user) return next();
  return next(new NotAuthorizedError());
}
app.use('/product',checkUserAuth,productRoute)
app.use('/user',checkUserAuth,productUser)
app.use('/cart',checkUserAuth,productCart)

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});


