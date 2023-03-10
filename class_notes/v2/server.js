import express from 'express'
import { testRouter } from './testHandler.js'

const app = express()
const port = 5050

app.use(express.json())

// try calling http://localhost:5050/test for this endpoint 
app.use('/test', testRouter)

app.get('/', (request, response)=>{
    response.send('server is up\n')
})

app.listen(port, ()=>{
    console.log(`Server is up on port ${port}`)
})