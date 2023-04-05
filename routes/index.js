const Controller = require('../controllers')
const router = require('express').Router()

router.get('/', Controller.index )
router.get('/register', Controller.register )
router.post('/home', Controller.home )
router.get('/home/:username/profile', Controller.profile )

module.exports = router