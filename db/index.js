const env = process.env
const Knex = require('knex')
const { Model, raw, ref, transaction, NotFoundError } = require('objection')
const { isDevelopment } = require('#constants')

let CONNECTION
if (isDevelopment) {
	CONNECTION = {
		host: env.POSTGRES_HOST,
		database: env.POSTGRES_NAME,
		user: env.POSTGRES_USER,
		password: env.POSTGRES_PASSWORD,
		port: env.POSTGRES_PORT
	}
} else {
	CONNECTION = `postgres://${env.POSTGRES_USER}:${env.POSTGRES_PASSWORD}@${env.POSTGRES_HOST}:${env.POSTGRES_PORT}/${env.POSTGRES_NAME}`
}

console.log('CONNECTION', CONNECTION)

const knex = Knex({
	client: 'pg',
	connection: CONNECTION,
	pool: {
		min: 1,
		max: 100,
		propagateCreateError: true
	}
})

Model.knex(knex)

module.exports = {
	constants: require('./constants'),
	raw,
	ref,
	NotFoundError,
	transaction,
	Transaction: require('./models/transaction'),
	Duration: require('./models/duration'),
	Winner: require('./models/winner'),
}
