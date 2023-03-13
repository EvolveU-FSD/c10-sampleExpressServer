import express from "express";
import { getAllDrinks, addADrink, changeDrink, deleteDrink } from "./data.js";


export const testRouter = express.Router();

testRouter.get('/', (request, response)=>{
    const drinks = getAllDrinks()
    response.send(drinks)
})

testRouter.post('/', (request, response)=>{
    const newDrink = request.body;
    addADrink(newDrink)

    response.send('ok')
})

testRouter.patch('/:drinkName', (request, response)=>{
    const dName = request.params.drinkName
    const changeData = request.body
    changeDrink(dName, changeData)

    response.send(getAllDrinks())
})

testRouter.delete('/:drinkName', (request, response)=>{
    const drinkToDelete = request.params.drinkName
    deleteDrink(drinkToDelete)

    response.send(getAllDrinks())
})