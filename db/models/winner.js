const BaseModel = require('./DEFAULT_MODEL')
const { tables } = require('../constants')

module.exports = class Winner extends BaseModel {
	static get tableName() {
		return tables.Winner
	}

	static get jsonSchema() {
		return {
			type: 'object',
			properties: {
				id: { type: 'array' },
				duration_id: { type: 'number' },
				contacts: { type: 'string', default: '', required: false },
				payload: { type: 'object',  default: {} },
				created_at: { type: 'string' },
				updated_at: { type: 'string' }
			}
		}
	}
}
