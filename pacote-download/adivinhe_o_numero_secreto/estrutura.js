var numeroSecreto = parseInt(Math.random() * 1001);
var contadorTentativas = 0;
var limiteTentativas = 5;

while(contadorTentativas < limiteTentativas) {
  
//while(chute != numeroSecreto) {
var chute = prompt('Digite um numero entre 0 e 1000');
contadorTentativas++; 
  
  if (chute == numeroSecreto) {
    alert('Parabens você acertou :)');
    alert('Numero de Tentativas: ' + contadorTentativas);
  break;
    
  }
  else if(chute > numeroSecreto) {  
    alert('Errou... o numeroSecreto é menor');}
  else if(chute < numeroSecreto){
    alert('Errou... o numeroSecreto é maior');}
  else{
    alert('nao foi dessa vez, tente novamente');
  }
  if(contadorTentativas === limiteTentativas) {
    alert('Limite de Tentativas atingido. O numero secreto é: ' + numeroSecreto);
    
  }
}  

// alert = imprime um texto na tela
// else if = Senao...
// if = se... 


