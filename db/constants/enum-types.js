const types = require('#types')

exports.transactionStatusType = [
	types.transaction.status.created,
	types.transaction.status.completed,
	types.transaction.status.refunded,
]

exports.durationStatusType = [
	types.duration.status.in_progress,
	types.duration.status.finished,
	types.duration.status.cancelled,
]
