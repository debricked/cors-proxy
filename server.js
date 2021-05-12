const express = require('express')
const { createProxyMiddleware } = require('http-proxy-middleware')
const cors = require('cors')

const app = express()

app.use(cors({origin: 'http://localhost:8080'}))

app.use('/api', createProxyMiddleware({
    target: 'https://app.debricked.com',
    changeOrigin: true
}))

app.listen(8081)
