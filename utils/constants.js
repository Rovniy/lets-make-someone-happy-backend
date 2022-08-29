module.exports = {
	isProduction: process.env.NODE_ENV === 'production',
	isDevelopment: process.env.NODE_ENV === 'development',
	seeds_cycles: 10,
	initial_value: 1,
	base_commission: 10,
	api_prefix: '/api'
}
