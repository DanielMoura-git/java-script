//for
//while
//do..while
//for..in
//for..of

for(let i = 1; i <=  5; i++){
    if(i % 2 !== 0){
        console.log(i)
    }
}

let a = 5

while (a >= 1){
    if(a % 2 !== 0){
        console.log(i)
    }
    a--
}
let i = 0
do {
    console.log('digitando',i)
    i++
} while(i <10)

const cores = ['vermelho','azul','verde']

for (let indice in cores){
    console.log(indice,cores[indice])
}

for (let cor of cores){
    console.log(cor)
}