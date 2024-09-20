const http = require('http')
http.createServer((request,response)=>{

    response.writeHead(200,{'Content-type': 'text/html'})
    response.write(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <header>
        <h1>headrer</h1>
    </header>
    <main>
        <h2>
            main
        </h2>
    </main>
    <footer>
        <h4>
            footers
        </h4>
    </footer>
</body>
</html>
        `)
    response.end()
})

server.listen(6000, ()=>{
    console.log("Sever is running at'http://localhost.6000")
})