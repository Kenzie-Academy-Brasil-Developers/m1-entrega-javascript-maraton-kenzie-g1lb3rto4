let nomes = [" Rafael", " Manoel", " Daniel"]

function positions(){
    for(let i = 0; i < nomes.length; i++){
       if(nomes){
        nomes[1] = " Daniel"
        nomes[2] = " Manoel"
       }
    }
    if(nomes){
        nomes[0] = " Daniel"
        nomes[1] = " Rafael"
    }
    else{
        'Daniel é o vencedor'
    }
    return `Este é o pódio${nomes}`
}
console.log(positions())



