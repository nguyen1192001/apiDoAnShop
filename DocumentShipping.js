const express = require('express')
const phieugiaohang = require('./model/phieugiaohang')
const donHang = require('./model/dondathang')
const router = express.Router()
router.get('/', (req, res) => {
    phieugiaohang.find({})
        .then((item) => res.json(item))
})
router.post("/", async (req, res) => {

    const data = req.body
    console.log("phieu giao hang", data)
    
    donHang.findById({_id : req.body.madondathang}).then((item)=>{
        const Phieugiaohang = new phieugiaohang({dondathang : item , nguoivc : data.nguoivc , ngaygiao:data.ngaygiao , trangthai:data.trangthai})
        Phieugiaohang.save()
            .then((item) => {
                return res.json({
                    trangthai: item.trangthai,
                })
            })
    })
});

router.post('/update', (req, res, next) => {
   
    console.log("req query",req.body)

    console.log("phieu giao hang",req.body)
    phieugiaohang.updateOne({ _id:req.body.madondathang }, req.body)
        .then((item) => res.json({
            error:true,
            item
        }))
        .catch(next)
})

module.exports = router;