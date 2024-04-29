const { Pool } = require('pg')
require('dotenv').config()

const db = new Pool({
  connectionString: "postgres://default:nZKS4GtkL5co@ep-orange-sky-a4ngwca7-pooler.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require",
})


module.exports = db;