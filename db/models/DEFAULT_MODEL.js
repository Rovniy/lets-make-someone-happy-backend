const { Model } = require('objection')
const uuid = require('uuid')

module.exports = class BaseModel extends Model {
	$beforeUpdate() {
		this.updated_at = new Date().toISOString()
	}

	$beforeInsert() {
		this.id = uuid.v4()
		this.updated_at = new Date().toISOString()
	}

	static get modelPaths() {
		return [ __dirname ]
	}
}
