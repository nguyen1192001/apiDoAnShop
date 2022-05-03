const express = require('express')
const khachhang = require('./model/khachhang')
const diachi = require('./model/diachi')
const router = express.Router()


router.get('/', (req, res) => {
    khachhang.find({})
        .then((item) => res.json(item))
})
router.get('/adress', (req, res) => {
    diachi.find({})
        .then((item) => res.json(item))
})

router.post('/', async (req, res) => {
    try {
        let flag = await khachhang.findOne({
            email: req.body.email
        });
        if (!flag) {
            return res.json("khong ton tai")
        }

        khachhang.find({})
        .then((item) => {
            item.map((e) => {
                if (e.email == req.body.email) {
                    if (e.matkhau == req.body.password) {
                        return res.json({
                            error: false,
                            e
                        })
                    }
                }
                if (e.email == req.body.email) {
                    if (e.matkhau != req.body.password) {
                        return res.json("mat khau sai")
                    }
                }
            })

        })
    } catch (error) {
        res.status(500).json("LỖI SERVER");
    }
})

router.post('/register', async (req, res) => {
    console.log("reqqqqqqqqq",req.body)
    req.body.diachi = {quan : req.body.quan, dcchitiet:req.body.dcchitiet}
    console.log("reqqqqqqqqq",req.body)
    
    try {
        let flag = await khachhang.findOne({
            email: req.body.email,
        });
        if (flag) {
            return res.json({
                error: true
            })
        }
        const postUser = new khachhang(req.body);
        await postUser.save();
        res.json({
            postUser
        });
    } catch (error) {
        res.status(500).json("LỖI SERVER");
    }
})



module.exports = router;