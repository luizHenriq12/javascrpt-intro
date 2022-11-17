
$(document).ready(function(){

        //adicionando css
        $("#lista").css("color","red");
 
    //adicionando html
    $('.element').html("Meu texto via jquery")
    $("a").click(function(){
        alert("Olá mundo") 
    })

    
});
function pegarvalor(){
var nome = document.querySelector('.nome'). value;
var sobrenome = document.querySelector('.sobrenomenome'). value;

alert("Seja bem-Vindo" + nome + " " + sobrenome );
console.log(nome);
} 