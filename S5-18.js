let participantes = [" Rafael", " Manoel", "Daniel"]

function positions(nome){
        for(let i = 0; i < participantes.length; i++){
            if(participantes[2] != 0){
                participantes.reverse()
            }
            else{
                return "'Daniel é o vencedor'"
            }
        }
        
        return participantes
    }
console.log(`Este é o pódio ${positions(participantes)}`)

