const express = require('express')
const router = express.Router()

router.get('/', (_, res) => res.send('Lets change someone life!'))

module.exports = router
