import express from 'express';
import { getAllXMen } from './data.js';

export const xmenRouter = express.Router()

xmenRouter.get('/', (request, response)=>{
    const xMen = getAllXMen()
    response.send(xMen)
})