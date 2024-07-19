const httpStatus = require('http-status')
const { ConsumerRelationship } = require('../models')
const catchAsync = require('../utils/catchAsync')

exports.getAllRelationship = catchAsync(async (res, req, next) => {
	res.status(httpStatus.OK)
})

exports.requestRelationship = catchAsync(async (res, req, next) => {})

exports.acceptRelationship = catchAsync(async (res, req, next) => {})
