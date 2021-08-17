const express = require('express')
const users = require('./model/users')
const router = express.Router()


router.get('/', (req, res) => {
    users.find({})
        .then((item) => res.json(item))
})

router.post('/', async (req, res) => {
    try {
        let flag = await users.findOne({
            email: req.body.email
        });
        if (!flag) {
            return res.json("khong ton tai")
        }

        users.find({})
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

router.post('/register', async (req, res) => {
    try {
        let flag = await users.findOne({
            email: req.body.email,
        });
        if (flag) {
            return res.json({
                error: true
            })
        }
        const postUser = new users(req.body);
        await postUser.save();
        res.json({
            postUser
        });
    } catch (error) {
        res.status(500).json("LỖI SERVER");
    }
})



module.exports = router;