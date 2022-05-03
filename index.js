const express = require('express')
const app = express()
const port = 4000
const db  = require('./config')
const productRoute = require('./Product')
const productCart = require('./Cart')
const productUser = require('./Users')
const productAdmin = require('./Admin')
const shipperRoute = require('./Shipper')
const dcShippingRouter = require('./DocumentShipping')

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
app.use('/admin',productAdmin)
app.use('/shipper',shipperRoute)
app.use('/dcShiping',dcShippingRouter)


// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`)
// })

app.listen(process.env.PORT || 4000, function () {
  console.log(
    "Express server listening on port %d in %s mode",
    this.address().port,
    app.settings.env
  );
});


