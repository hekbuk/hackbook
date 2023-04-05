const Controller = require('../controllers')
const router = require('express').Router()

router.get('/', Controller.home )
// router.get('/stores', Controller.store )

module.exports = router