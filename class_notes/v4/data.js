var xMen = [
    {name: 'Colussus', powers: ['Made of Metal', 'Superstrength']},
    {name: 'Cyclops', powers: ['Eye beams']},
    {name: 'Shadowcat', powers: ['Phasing']},
    {name: 'Storm', powers: ['Weather manipulation', 'Flight', 'Lightning attacks']},
]

export function getAllXMen(){
    return xMen;
}

export function addXman(newXman){
    // you might check to make sure this xmen is not already in the list
    xMen.push(newXman)
}

export function patchXman(name, update){
    const xMan = xMen.find(x => x.name === name)
    console.log('found', xMan)
    // Object assign is new but pretty much what you'd guess
    Object.assign(xMan, update)            
}

export function deleteXman(name){
    xMen = xMen.filter(x => x.name !== name)
}