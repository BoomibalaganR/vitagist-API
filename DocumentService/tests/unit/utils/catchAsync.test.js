const httpMocks = require('node-mocks-http')

const { catchAsync } = require('../../../src/utils/catchAsync')

describe('catchAsync utility function', () => {
	let req, res, next

	// Mock request and response object for each test
	beforeEach(() => {
		req = httpMocks.createRequest()
		res = httpMocks.createResponse()
		next = jest.fn()

		// Clear all mocks before each test
		jest.clearAllMocks()
	})

	it('should call next with the error when an async function passed into it throws', async () => {
		// Mock service function to throw an error
		const error = new Error('catch Me!!!')

		const fun = catchAsync(async (req, res, next) => {
			throw error
		})
		await fun(req, res, next)

		//Assert next is called
		expect(next).toHaveBeenCalled()
	})
})
