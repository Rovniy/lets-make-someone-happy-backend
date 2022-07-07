const BaseModel = require('./DEFAULT_MODEL')
const { tables } = require('../constants')
const { transactionStatusType } = require('../constants/enum-types')
const types = require('#types')

module.exports = class Transaction extends BaseModel {
	static get tableName() {
		return tables.Transaction
	}

	static get jsonSchema() {
		return {
			type: 'object',
			properties: {
				id: { type: 'array' },
				sum: { type: 'number' },
				status:  { type: 'string', enum: transactionStatusType, default: types.transaction.status.created },
				duration_id: { type: 'number' },
				payload: { type: 'object', default: {} },
				created_at: { type: 'string' },
				updated_at: { type: 'string' }
			}
		}
	}
}
