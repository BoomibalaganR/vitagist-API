const path = require('path')
const gateway = require('express-gateway') 
require('dotenv').config() // Load environment variables from .env file


gateway()
  .load(path.join(__dirname, 'config'))
  .run()

