import express from 'express'
import {testRouter} from './testRouter.js'

const app = express()
const port = 5051

app.use(express.json())
app.use('/test', testRouter)

// app.get('/', (request, response)=>{
//     response.send('ping!\n')
// })

app.listen(port, ()=>{
    console.log('server up on port '+port)
})