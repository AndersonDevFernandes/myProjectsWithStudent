var numero_correto, numero;
nmero_correto = false;
while(numero_correto==false){
  try{
    numero = parseInt(window.prompt('Insira um número par'));
    if(isNaN(numero)==false){
      if(numero % 2===0) {
        numero_correto=true;
        window.alert('voocê digitou um número ar !');
      } else { 
        numero_correto=false;
        window.alert('você digitou um número impar!');
      }
    } else{
      throw new error('Valor digitado não é um número válido');
    }
    } catch(error) {
      window.alert(error)
      window.alert('valor inválido. Digite novamente')
    }
  }
