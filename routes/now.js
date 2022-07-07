const express = require('express')
const router = express.Router()
const { Duration, Transaction } = require('#db')
const types = require('#types')
const createError = require('http-errors')

router.get('/', async (req, res, next) => {
	try {
		const current_duration = await getDuration()
		const current_pool = await getCurrentTransactionsPool(current_duration)

		res.send({

			current_duration,
			current_pool
		})
	} catch (e) {
		next(createError('Cant get current duration', 500, e))
	}
})

const getDuration = () => {
	return Duration.query()
		.findOne({
			status: types.duration.status.in_progress
		})
		.orderBy('start_at', 'asc')
}

const getCurrentTransactionsPool = current_duration => {
	return Transaction.query()
		.sum('sum as sum')
		.where({
			duration_id: current_duration.id
		})
}

module.exports = router
