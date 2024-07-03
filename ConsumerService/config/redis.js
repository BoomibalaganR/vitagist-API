const redis = require('redis')
const logger = require('./logger')
const config = require('./env')

// Create Redis client
const redisClient = redis.createClient({
    url: config.redis.uri
})

// Handle Redis client connection events
redisClient.on('connect', () => {
    logger.info('Redis connected successfully')
})

redisClient.on('error', (err) => {
    logger.error('Redis connection error:', err)
})

module.exports = redisClient
