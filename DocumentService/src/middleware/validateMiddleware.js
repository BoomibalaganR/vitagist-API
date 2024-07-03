/**
 * Middleware to validate request data against a given schema.
 * 
 * @param {object} schema - Validation schema
 * @returns {function} Middleware function
 */
exports.validate = (schema) => {
    return (req, res, next) => {
        // Check if req.body.tags exists and is a string
        if (req.body.tags && typeof req.body.tags === 'string') {
            try {
                // Convert tags string to array
                req.body.tags = JSON.parse(req.body.tags)
            } catch (error) {
                // Pass error to the next middleware
                return next(Error('Invalid Array of string for tags'))
            }
        }

        // Validate request body against schema
        const { error, value } = schema.body.validate(req.body)
        if (error) {
            return next(error)
        }

        // Replace request body with validated value
        req.body = value
        next()
    }
}
