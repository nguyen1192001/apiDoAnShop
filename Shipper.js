const express = require('express')
const nguoivanchuyen = require('./model/nguoivanchuyen')
const router = express.Router()


router.get('/', (req, res) => {
    nguoivanchuyen.find({})
        .then((item) => res.json(item))
})

router.post('/', async (req, res) => {
    console.log("req",req.body)
    try {
        let flag = await nguoivanchuyen.findOne({
            email: req.body.email
        });
        if (!flag) {
            return res.json("khong ton tai")
        }

        nguoivanchuyen.find({})
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
    try {
        let flag = await nguoivanchuyen.findOne({
            email: req.body.email,
        });
        if (flag) {
            return res.json({
                error: true
            })
        }
        const postUser = new nguoivanchuyen(req.body);
        await postUser.save();
        res.json({
            postUser
        });
    } catch (error) {
        res.status(500).json("LỖI SERVER");
    }
})



module.exports = router;