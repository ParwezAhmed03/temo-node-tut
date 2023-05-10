const http = require('http')

const server = http.createServer((req,res)=>{
if(req.url=='/'){
    res.end('welcome to our home page')
}
if(req.url=='/about'){
    res.end('Here is the short history')
}
res.end(`
<h1>Ooops!<h1>
<p>We can't find the page that you looking for</p>
<a href="/">Back home</a>
`)
})
server.listen(5000)