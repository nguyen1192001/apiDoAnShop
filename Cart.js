const express = require('express')
const dondathang = require('./model/dondathang')
const router = express.Router()
router.get('/', (req, res) => {
  dondathang.find({})
    .then((item) => res.json(item))
})
router.post("/", async (req, res) => {
  const data = req.body
  console.log("data",data)
  const Dondathang = new dondathang(data)
  console.log("carttttttttttttttttttt",Dondathang)
  Dondathang.save()
    .then(() => res.json("ok"))
});

router.post('/update', (req, res, next) => {
   
  console.log("don dat hangggggggg",req.body.madondathang , req.params)
  dondathang.updateOne({ _id:req.body.madondathang }, req.body)
      .then((item) => res.json({
          error:true,
          item
      }))
      .catch(next)
})
module.exports = router;