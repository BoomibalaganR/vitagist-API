const app = require('./app') // Importing the Express application instance
const logger = require('../config/logger') // Importing the logger utility
const config = require('../config/env')
require('../config/db')

// Start the Express application server
app.listen(config.app.port || 3000, () => {
	logger.info(`consumer service is running on ${config.app.port || 3000}`)
})
