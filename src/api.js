const express = require('express')
const serverless = require('serverless-http')

const app = express();
const router = express.Router()

router.get('/', (req, res, next) => {
    res.status(200).json({
        success: true,
        Hello: "Hello Noobs"
    })
})

app.use('/api', router)

module.exports.handler = serverless(app)