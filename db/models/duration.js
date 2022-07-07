const BaseModel = require('./DEFAULT_MODEL')
const { tables } = require('../constants')
const { durationStatusType } = require('#root/db/constants/enum-types')
const types = require('#types')

module.exports = class Duration extends BaseModel {
	static get tableName() {
		return tables.Duration
	}

	static get jsonSchema() {
		return {
			type: 'object',
			properties: {
				id: { type: 'array' },
				start_at: { type: 'string' },
				end_at: { type: 'string' },
				status:  { type: 'string', enum: durationStatusType, default: types.duration.status.in_progress },
				payload: { type: 'object',  default: {} },
				created_at: { type: 'string' },
				updated_at: { type: 'string' }
			}
		}
	}
}
