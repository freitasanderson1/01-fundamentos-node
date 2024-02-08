import http from 'node:http'

const server = http.createServer((request, response) => {
    return response.end('Olá mundo, testando script')
})

server.listen(3333)