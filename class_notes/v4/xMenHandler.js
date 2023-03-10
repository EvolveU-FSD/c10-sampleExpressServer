import express from 'express';
import { 
    getAllXMen, addXman, patchXman, deleteXman 
} from './data.js';

export const xmenRouter = express.Router()

xmenRouter.get('/', (request, response)=>{
    const xMen = getAllXMen()
    response.send(xMen)
})

xmenRouter.post('/', (request, response)=>{
    const newXMan = request.body
    addXman(newXMan)

    // you could just return success but you can also return
    // anything useful, like say the whole roster
    const xMen = getAllXMen()
    response.send(xMen)
})

xmenRouter.patch('/:name', (request, response)=>{
    const name = request.params.name
    const update = request.body
    patchXman(name, update)

    response.send(getAllXMen())
})

xmenRouter.delete('/:name', (request, response)=>{
    const name = request.params.name
    deleteXman(name)

    response.send(getAllXMen())
})