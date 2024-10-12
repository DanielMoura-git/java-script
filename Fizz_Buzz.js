//divisivel por 3 => fizz
//divisivel por 5 => buzz
//divisivel por 3 e 5 => fizz buzz
//nao divisivel por 3 e 5 => entrada
//nao e um numero retorna a mensagem 'nao e um numero'
const resultado = FizzBuzz(15)

console.log(resultado)

function FizzBuzz(entrada){
     if (entrada % 3 === 0 && entrada % 5 === 0)
        return 'Fizz Buzz'
    if(typeof entrada !== 'number')
        return 'nao e um pinto'
    if (entrada % 3 == 0)
        return 'Fizz'
    if (entrada % 5 ==0)
        return "Buzz"
    return entrada
}