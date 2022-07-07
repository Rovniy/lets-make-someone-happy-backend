const express = require('express')
const router = express.Router()

/* GET home page. */
router.get('/', function(req, res) {
	res.send('Welcome!6666')
})

module.exports = router
