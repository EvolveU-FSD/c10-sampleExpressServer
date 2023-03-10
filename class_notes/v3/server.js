import express from 'express'
import { xmenRouter } from './xMenHandler.js'

const app = express()
const port = 5050

app.use(express.json())

// try calling http://localhost:5050/xMen for this endpoint 
app.use('/xMen', xmenRouter)

app.listen(port, ()=>{
    console.log(`Server is up on port ${port}`)
})