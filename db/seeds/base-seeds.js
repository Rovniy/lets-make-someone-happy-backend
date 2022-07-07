const { faker } = require('@faker-js/faker')
const { tables: { Duration, Transaction, Winner }, enumTypes } = require('#root/db/constants/index')
const { seeds_cycles } = require('#constants')
const { getRandomElementOfArray } = require('#helpers')

const createFakeDuration = (index, seed_uuid) => ({
	id: seed_uuid,
	start_at: faker.date.past(),
	end_at: faker.date.future(),
	status: getRandomElementOfArray(enumTypes.durationStatusType),
	payload: {
		seed_iterator: index
	}
})

const createFakeTransaction = (index, duration_id) => ({
	id: faker.datatype.uuid(),
	sum: faker.finance.amount(),
	status: getRandomElementOfArray(enumTypes.transactionStatusType),
	duration_id,
	payload: {
		seed_iterator: index
	}
})

const createFakeWinner = (index, duration_id) => ({
	id: faker.datatype.uuid(),
	duration_id,
	contacts: faker.address.city(),
	payload: {
		seed_iterator: index
	}
})

exports.seed = async knex => {
	const fakeDuration = []
	const fakeTransaction = []
	const fakeWinner = []

	for (let index = 1; index < seeds_cycles; index++) {
		const seed_uuid = faker.datatype.uuid()

		fakeDuration.push(createFakeDuration(index, seed_uuid))

		for (let index = 1; index < seeds_cycles; index++) {
			fakeTransaction.push(createFakeTransaction(index, seed_uuid))
		}

		fakeWinner.push(createFakeWinner(index, seed_uuid))
	}

	await knex(Duration).insert(fakeDuration)
	await knex(Transaction).insert(fakeTransaction)
	await knex(Winner).insert(fakeWinner)
}
