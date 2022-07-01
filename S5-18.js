let competidores = ["Rafael", "Manoel", "Daniel"]

function positions(nomes){
  
  let resultado = []

       if(nomes[2] == "Daniel"){
        resultado.push(nomes[0])
        resultado.push(nomes[2])
        resultado.push(nomes[1])   
       }

       else if(nomes[1] == "Daniel"){
        resultado.push(nomes[1])
        resultado.push(nomes[0])
        resultado.push(nomes[2])
       }
       
        else{
          
          return 'Daniel é o vencedor'
        }
        
        console.log( 'Este é o pódio ' + resultado)
        return resultado
}
      positions(competidores)
