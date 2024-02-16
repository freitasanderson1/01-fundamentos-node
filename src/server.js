import http from 'node:http'

const metodos = []

const server = http.createServer((req, res) => {
    const { method, url } = req
    method === 'GET' ? console.log('Esse não entra'):metodos.push(method)

    console.log(`Metodo: ${method} e URL: ${url}`)
    if(method === 'GET' && url=== '/'){
        return res
        .setHeader('Content-type','aplication/json')
        .end(JSON.stringify(metodos))
    }

    if(method === 'POST' && url === '/'){
        return res.writeHead(202).end(`Chegou um método ${method} aqui.`)
    }

    return res.writeHead(404).end('Método não permitido!')
})

server.listen(3333)