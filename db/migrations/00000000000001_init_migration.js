const {	Duration, Transaction, Winner } = require('#root/db/constants/tables')
const {	durationStatusType, transactionStatusType } = require('#root/db/constants/enum-types')
const types = require('#types')

const durationStatusTypeName = 'duration_status_type_name'
const transactionStatusTypeName = 'transaction_status_type_name'

exports.up = async knex => {
	try {
		await knex.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')

		await knex.schema.createTable(Duration, table => {
			table.uuid('id').primary()
			table.string('start_at', 100).index()
			table.string('end_at', 100).index()
			table.enum('status', durationStatusType, {
				useNative: true,
				enumName: durationStatusTypeName
			})
				.defaultTo(types.duration.status.in_progress)
				.index()
			table.jsonb('payload').defaultTo({})
			table.dateTime('created_at').defaultTo(knex.fn.now())
			table.dateTime('updated_at')
		})

		await knex.schema.createTable(Transaction, table => {
			table.uuid('id').primary()
			table.float('sum').index()
			table.enum('status', transactionStatusType, {
				useNative: true,
				enumName: transactionStatusTypeName
			})
				.defaultTo(types.transaction.status.created)
				.index()
			table.uuid('duration_id')
				.index()
				.notNullable()
				.references('id')
				.inTable(Duration)
			table.jsonb('payload').defaultTo({})
			table.dateTime('created_at').defaultTo(knex.fn.now())
			table.dateTime('updated_at')
		})

		await knex.schema.createTable(Winner, table => {
			table.uuid('id').primary()
			table.uuid('duration_id')
				.notNullable()
				.references('id')
				.inTable(Duration)
				.index()
			table.string('contacts')
			table.jsonb('payload').defaultTo({})
			table.dateTime('created_at').defaultTo(knex.fn.now())
			table.dateTime('updated_at')
		})
	} catch (e) {
		console.error('Base schema UP migration failed: ', e)
		process.exit(1)
	}
}

exports.down = async knex => {
	try {
		await knex.schema.dropTableIfExists(Winner)
		await knex.schema.dropTableIfExists(Transaction)
		await knex.schema.dropTableIfExists(Duration)

		await knex.raw(`DROP TYPE IF EXISTS ${transactionStatusTypeName} CASCADE`)
		await knex.raw(`DROP TYPE IF EXISTS ${durationStatusTypeName} CASCADE`)
	} catch (e) {
		console.error('Base schema rollback failed: ', e)
		process.exit(1)
	}
}
