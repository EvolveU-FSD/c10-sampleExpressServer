import express from 'express';

export const testRouter = express.Router()

testRouter.get('/', (request, response)=>{
    response.send('test router is working\n')
})