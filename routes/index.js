const express = require('express')
const router = express.Router()

/* GET home page. */
router.post('/', function(req, res) {
	res.send('/ with a resource')
})

module.exports = router
