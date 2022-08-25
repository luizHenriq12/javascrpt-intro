function cadastro(nome,idade){
    if(nome == undefined || idade == undefined){
        console.log('Preencha o nome e a idade');
    }else {
        console.log("Ola " + nome + "Bem Vindo");
    }
}
cadastro("luiz",5);
cadastro("luiz");