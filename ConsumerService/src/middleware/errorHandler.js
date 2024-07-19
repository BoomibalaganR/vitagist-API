const ApiError = require('../utils/ApiError')
const httpStatus = require('http-status')
const logger = require('../../config/logger')

module.exports = (err, req, res, next) => {
	// console.log(err)
	// Validation Error Handling
	if (err.name === 'ValidationError') {
		const errors = {}
		// console.log(err.details)
		if (err.details) {
			err.details.forEach((detail) => {
				errors[detail.path.join('.')] = detail.message
			})
		}

		return res.status(httpStatus.BAD_REQUEST).json({ errors })
	}
	// API Error Handling (Custom errors)
	if (err instanceof ApiError) {
		logger.info(`Api Error: ${err.message}`)
		// console.error(err.stack)
		return res.status(err.statusCode).json({ message: err.message })
	}

	// Axios Error Handling
	if (err.isAxiosError) {
		console.log('axisos')
		const status = err.response
			? err.response.status
			: httpStatus.INTERNAL_SERVER_ERROR
		const message = err.response.data.message
			? err.response.data.message
			: 'Internal Server Error'
		logger.error(
			`Error: Received ${err.response.status} response from server. Message: ${err.response.data}`
		)

		return res.status(status).json({ message: message })
	}

	// Generic Error Handling
	logger.error(err.message)
	// console.error(err.stack)

	return res
		.status(httpStatus.INTERNAL_SERVER_ERROR)
		.json({ message: err.message })
}
