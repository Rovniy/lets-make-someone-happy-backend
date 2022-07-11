const express = require('express')
const router = express.Router()

router.get('/', (_, res) => {
	res.send('1233412321 donate!')
})

module.exports = router
