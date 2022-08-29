const express = require('express')
const router = express.Router()
const types = require('#types')
const moment = require('moment')
const createError = require('http-errors')
const { Duration, Transaction } = require('#db')
const { initial_value, base_commission } = require('#constants')

router.get('/', async (req, res, next) => {
	try {
		const current_duration = await getDuration()
		const current_pool = await getCurrentTransactionsPool(current_duration)
		const money_pool = current_pool.reduce((acc, value) => acc + value?.sum, 0)
		const users_count = current_pool.length
		const time_remaining = calculateDateDiff(current_duration)
		const current_timestamp = Date.now()
		const target_date = current_duration?.end_at
		const duration_id = current_duration?.id

		res.send({
			duration_id,
			current_timestamp,
			money_pool,
			users_count,
			initial_value,
			base_commission,
			time_remaining,
			target_date
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
		.returning([
			'id',
			'end_at'
		])
		.orderBy('start_at', 'asc')
}

const getCurrentTransactionsPool = current_duration => {
	return Transaction.query()
		.select('*')
		.where({
			duration_id: current_duration.id,
			status: types.transaction.status.completed
		})
}

const calculateDateDiff = current_duration => {
	const date_now = moment()
	const date_final = moment(current_duration?.end_at)

	return date_final.diff(date_now, 'seconds')
}

module.exports = router
