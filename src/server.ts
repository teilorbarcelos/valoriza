import express, { request, response } from "express"

const app = express()

app.get('/get', (request, response) => {
    return response.send('pagina test get')
})

app.post('/post', (request, response) => {
    return response.send('pagina test post')
})

// http://localhost:3000
app.listen(3000, () => console.log('Server is running!'))