const createError = require('http-errors')
const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const indexRouter = require('./routes/index')
const nowRouter = require('./routes/now')

const app = express()

const corsOptions = {
	origin: process.env.CORS_ORIGIN,
	optionsSuccessStatus: 200
}

app.use(logger('dev'))
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.use('/now', cors(corsOptions), nowRouter)
app.use('/', cors(corsOptions), indexRouter)

// catch 404 and forward to error handler
app.use((req, res, next) => next(createError(404)))

// error handler
app.use(async function(err, req, res) {
	// set locals, only providing error in development
	res.locals.message = err?.message
	res.locals.error = req.app.get('env') === 'development' ? err : {}

	// render the error page
	res.status(err?.status || 500)
	res.render('error')
})

module.exports = app
