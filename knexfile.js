require('dotenv').config()
const CONNECTION_STRING = `postgres://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@${process.env.POSTGRES_HOST}:${process.env.POSTGRES_PORT}/${process.env.POSTGRES_NAME}`

const CONNECTION_OBJECT = {
	port: process.env.POSTGRES_PORT,
	database: process.env.POSTGRES_NAME,
	user: process.env.POSTGRES_USER,
	password: process.env.POSTGRES_PASSWORD
}

module.exports = {
	client: 'pg',
	connection: (process.env.NODE_ENV === 'development') ? CONNECTION_OBJECT : CONNECTION_STRING,
	migrations: {
		directory: `${__dirname}/db/migrations`
	},
	seeds: {
		directory: `${__dirname}/db/seeds`
	}
}

