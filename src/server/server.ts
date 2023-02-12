import express from 'express'
import http from 'node:http'
import { resolve } from 'node:path'

const rootDir = resolve(process.cwd())
const buildDir = resolve(rootDir, 'build')

var app = express()
var server = http.createServer(app)


// Serve static files
app.use(express.static(buildDir))

// Send index.html file to the client (browser in this case)
// @ts-ignore
app.get('/', function (req, res) {
  res.sendFile(resolve(buildDir, 'index.html'))
})

const port = 8081
server.listen(port, function () {
  console.log(`Listening on ${port}`)
})
