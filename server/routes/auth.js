const express = require('express')
const { model } = require('mongoose')
const router = express.Router()
const mongoose = require('mongoose')
const User = mongoose.model("User")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('../keys')
const requireLogin = require('../middleware/requireLogin')


router.get('/protected', requireLogin, (req, res) => {
    res.send("Hello User")
})
router.get('/', (req, res) => {
    res.end('Hello')
})

router.post('/signup', (req, res) => {
    const { name, email, password } = req.body
    if (!email || !password || !name) {
        return res.status(422).json({ error: "Please add all the fields" })
    }
    User.findOne({ email: email })
        .then((savedUser) => {
            if (savedUser) {
                return res.status(422).json({ error: "User Already Exist" })
            }
            bcrypt.hash(password, 12).then(
                hashedPassword => {
                    const user = new User({
                        email,
                        password: hashedPassword,
                        name
                    })
                    user.save()
                        .then(user => {
                            res.json({ message: "Saved Succefully" })
                        })
                        .catch(err => {
                            console.log(err);
                        })
                }
            )


        }).catch(err => {
            console.log(err);
        })

}
)


router.post('/signin', (req, res) => {
    const { email, password } = req.body
    if (!email || !password) {
        return res.status(422).json({ error: "Please add Email or Password" })
    }
    User.findOne({ email: email })
        .then(savedUser => {

            if (!savedUser) {
                return res.status(422).json({ error: "Invalid Email or Password" })
            }
            bcrypt.compare(password, savedUser.password)
                .then(doMatch => {
                    if (doMatch) {
                        const token = jwt.sign({
                            _id: savedUser._id
                        }, JWT_SECRET)
                        //res.json({message:"Successfully SignIn"})
                        res.json({ token })
                    }
                    else {
                        return res.status(422).json({ error: "Invalid Email or Password" })
                    }
                })
                .catch(err => {
                    console.log(err);
                })
        })
})

module.exports = router