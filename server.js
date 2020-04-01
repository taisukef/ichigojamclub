const http = require('http')
const fs = require('fs')
const url = require('url')
const simplewebserver = require('./simplewebservertxt.js')

const server = http.createServer()
server.on('request', function(req, res) {
  console.log(req.url)
  const urlq = url.parse(req.url, true)
  console.log(urlq.query.ask)
  if (urlq.query.ask) {
    const ask = urlq.query.ask
    fs.writeFileSync('data/ask/' + new Date().getTime() + ".txt", ask)
    res.writeHead(200, { 'Content-Type' : 'text/plain; charset=ShiftJIS' })
    res.write("' Thank you! Please wait the answer.\n")
    res.write('?"MJ GET ichigojam.club/')
    res.end()
  }
  simplewebserver.serve(res, req.url)
  res.end()
})
server.listen(8001)
