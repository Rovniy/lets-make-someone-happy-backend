require('dotenv').config()
const env = process.env
const CONNECTION_STRING = `postgres://${env.POSTGRES_USER}:${env.POSTGRES_PASSWORD}@${env.POSTGRES_HOST}:${env.POSTGRES_PORT}/${env.POSTGRES_NAME}`

const CONNECTION_OBJECT = {
	port: env.POSTGRES_PORT,
	database: env.POSTGRES_NAME,
	user: env.POSTGRES_USER,
	password: env.POSTGRES_PASSWORD
}

module.exports = {
	client: 'pg',
	connection: (env.NODE_ENV === 'development') ? CONNECTION_OBJECT : CONNECTION_STRING,
	migrations: {
		directory: `${__dirname}/db/migrations`
	},
	seeds: {
		directory: `${__dirname}/db/seeds`
	}
}

