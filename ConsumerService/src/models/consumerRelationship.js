const mongoose = require('mongoose')
const { Schema } = mongoose

// Define the consumer to consumer Relationship schema
const consumerRelationshipSchema = new Schema({
	// requestor: {
	// 	type: mongoose.Schema.Types.Mixed, // Polymorphic reference field
	// 	refPath: 'requestor_type',
	// },
	requestor_type: {
		type: String,
		required: true, // The type of the requestor
	},
	requestor_uid: {
		type: String,
		required: true, // The unique ID of the requestor
	},
	requestor_group_acls: {
		type: [String], // Access control list for requestor
	},
	requestor_tags: {
		type: [String],
		default: [], // Tags for requestor
	},
	// acceptor: {
	// 	type: mongoose.Schema.Types.Mixed, // Polymorphic reference field
	// 	refPath: 'acceptor_type',
	// },
	acceptor_type: {
		type: String,
		required: true, // The type of the acceptor
	},
	acceptor_uid: {
		type: String,
		required: true, // The unique ID of the acceptor
	},
	accepted_date: {
		type: Date, // Date when the request was accepted
	},
	acceptor_group_acls: {
		type: [String], // Access control list for acceptor
	},
	acceptor_tags: {
		type: [String],
		default: [], // Tags for acceptor
	},
	isaccepted: {
		type: Boolean,
		default: false, // Whether the request is accepted
	},
	description: {
		type: String, // Description of the relationship
	},
	status: {
		type: String, // Status of the relationship
	},
	reject_reason: {
		type: String, // Reason for rejection, if any
	},
	created: {
		type: Date,
		default: Date.now, // Creation date
	},
	tcfilename: {
		type: String, // Filename for terms and conditions
	},
})

// Export the model
module.exports = mongoose.model(
	'ConsumerRelationship',
	consumerRelationshipSchema
)
