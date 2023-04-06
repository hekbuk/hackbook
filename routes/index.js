const Controller = require('../controllers')
const router = require('express').Router()

router.get('/', Controller.index )
router.post('/', Controller.postLogin )
router.get('/register', Controller.register )
router.post('/register', Controller.createUser )

router.use (function (req, res, next){
    if (!req.session.username){
        const error = 'Please login first'
        res.redirect(`/?error=${error}`)
    }else{
        next()
    }
})

router.get('/home', Controller.home )
router.post('/home', Controller.home )
router.get('/home/profile', Controller.profile )
router.get('/logout', Controller.logout )

module.exports = router