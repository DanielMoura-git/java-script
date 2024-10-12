//velocidade maxima de ate 70
//a cada 5km acma do limiete voca ganha 1 ponto
//Math.floor
//caso pontos for maior que 12 -> "carteira suspensa"

verificacaodevelocidade (200)


function verificacaodevelocidade(velocidade){
    const velocidadeMaxima = 70;
    const kmPorPontos = 5;
    if ( velocidade <= velocidadeMaxima )
        console.log("ok");
    else {
        const pontos = Math.floor(((velocidade - velocidadeMaxima) / kmPorPontos));
        if (pontos >= 12)
            console.log("carteira suspensa");
        else 
        console.log("pontos", pontos);
    }
}