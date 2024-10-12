// falsy

// unddefined
// null
// 0
// false
// ''
// NaN - not a number

//truthy

//false || true
//true
//false || 'pinto'  //string
//'pinto'
//false || 1  //number
// 1

let corPersonalizada = 'vermelho'
let corPadrao = 'azul'
let corPerfil = corPersonalizada || corPadrao

console.log(corPerfil)
