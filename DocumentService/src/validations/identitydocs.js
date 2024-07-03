// const Joi = require('./joiExtensions')
const Joi = require('joi').extend(require('@joi/date'))

// Import custom validation functions
const {valid_id_proof } = require('./customValidation')

/**
 * Joi schema to validate request body for adding identity documents.
 * Includes validation for required fields and custom validations.
 */
exports.addIdentitydocs = {
    body: Joi.object().keys({
        docid: Joi.string()
            .required()
            .custom(valid_id_proof, 'custom doc-id validation')
            .messages({
                'string.base': 'Document ID must be a string',
                'string.empty': 'Document ID is required',
                'any.required': 'Document ID is required'
            }),
        doctype: Joi.string().required().messages({
            'string.base': 'Document Type must be a string',
            'string.empty': 'Document Type is required',
            'any.required': 'Document Type is required'
        }),
        filename: Joi.string().required().messages({
            'string.base': 'Filename must be a string',
            'string.empty': 'Filename is required',
            'any.required': 'Filename is required'
        }),
        content_type: Joi.string().required().messages({
            'string.base': 'Content Type must be a string',
            'string.empty': 'Content Type is required',
            'any.required': 'Content Type is required'
        }),
        category: Joi.string().required().messages({
            'string.base': 'Category must be a string',
            'string.empty': 'Category is required',
            'any.required': 'Category is required'
        }),
        country: Joi.string()
            .required()
            .messages({
                'string.base': 'Country must be a string',
                'string.empty': 'Country is required',
                'any.required': 'Country is required'
            }),
        tags: Joi.array()
            .items(Joi.string().valid('Identity').messages({
                'any.only': 'Tags must be one "Identity"'
            }))
            .length(1)
            .required()
            .messages({
                'array.base': 'Tags must be an array',
                'array.includes': 'Tags must include only one element - "Identity"',
                'array.length': 'Tags must include only one element - "Identity"',
                'any.required': 'Tags are required'
            }), 
        expiration_date: Joi.date()
            .format('DD-MM-YYYY')
            .min('now') // Ensure date is in the future
            .optional()
            .messages({
                'date.format': 'Expiration date must be in the format "DD-MM-YYYY"',
                'date.min': 'Expiration date must be a future date in the format "DD-MM-YYYY"',
            })
    }).options({ stripUnknown: true, abortEarly: false })
}

/**
 * Joi schema to validate request body for updating identity documents.
 * Allows optional fields for updating specific document attributes.
 */
exports.updateIdentitydocs = {
    body: Joi.object({
        docid: Joi.string().optional().messages({
            'string.base': 'Document ID must be a string'
        }),
        doctype: Joi.string().optional().messages({
            'string.base': 'Document Type must be a string'
        }),
        filename: Joi.string().optional().messages({
            'string.base': 'Filename must be a string'
        }),
        content_type: Joi.string().optional().messages({
            'string.base': 'Content Type must be a string'
        }),
        category: Joi.string().optional().messages({
            'string.base': 'Category must be a string'
        }),
        country: Joi.string()
            .optional()
            .messages({
                'string.base': 'Country must be a string'
            }),
        expiration_date: Joi.date()
            .format('DD-MM-YYYY')
            .min('now') // Ensure date is in the future
            .optional()
            .messages({
                'date.format': 'Expiration date must be in the format "DD-MM-YYYY"',
                'date.min': 'Expiration date must be a future date in the format "DD-MM-YYYY"',
            })
    }).options({ stripUnknown: true, abortEarly: false })
}
