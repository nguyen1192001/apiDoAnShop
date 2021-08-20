const express = require('express')
const admin = require('./model/admin')
const router = express.Router()


router.get('/', (req, res) => {
    admin.find({})
        .then((item) => res.json(item))
})

router.post('/', async (req, res) => {
    try {
        let flag = await admin.findOne({
            email: req.body.email
        });
        if (!flag) {
            return res.json("khong ton tai")
        }

        admin.find({})
        .then((item) => {
            item.map((e) => {
                if (e.email == req.body.email) {
                    if (e.password == req.body.password) {
                        return res.json({
                            error: false,
                            e
                        })
                    }
                }
                if (e.email == req.body.email) {
                    if (e.password != req.body.password) {
                        return res.json("mat khau sai")
                    }
                }
            })

        })
    } catch (error) {
        res.status(500).json("LỖI SERVER");
    }
})



module.exports = router;