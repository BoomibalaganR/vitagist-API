const {validateIdProof} = require('../utils/country')


// validate ID proofs based on country and document type
exports.valid_id_proof = (value, helpers) => {
    const { country, doctype } = helpers.state.ancestors[0] // Retrieve country and document type from Joi state
    
    // Validate the ID proof using a utility function
    if (!validateIdProof(country, doctype, value)) {
        return helpers.message(`Invalid ${doctype} ID Format for ${country}`)
    }
    
    return value // Return the validated ID proof if valid
}
