numero = prompt("insira um numero");
for (x = numero; x < 0; x--){
    if(numero % x == 0){
       divisao++;
}
}
if(divisao == 2){
    console.log('O numero' + numero +' é um numero primo');
}else{
    console.log('O numero' + numero + ' nao é numero primo');
}