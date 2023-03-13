var drinks=[
    {name: 'Diet Pepsi', calories: 0},
    {name: 'Diet Coke', calories: 2},
    {name: 'Fresca', calories: 1}
]

export function getAllDrinks(){
    return drinks;
}

export function addADrink(drink){
    drinks.push(drink)
    // drinks[drinks.length] = drink
}

export function changeDrink(drinkName, newData){
    const theDrink = drinks.find(drink => drink.name === drinkName )
    Object.assign(theDrink, newData)
}

export function deleteDrink(drinkName){
    drinks = drinks.filter(drink => drink.name !== drinkName)
}