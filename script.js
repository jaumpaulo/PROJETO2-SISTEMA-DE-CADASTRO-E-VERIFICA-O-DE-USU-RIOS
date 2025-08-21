let nome = prompt("Digite seu nome: ")
let idade = parseInt(prompt("Digite sua idade: "))
let senha = prompt("Digite sua senha: ")
//inicio do cadastro

let senhaVerificada
let nomeVerificada
//variaveis para identificar 

if (idade >=13) {
    alert("Parabéns você foi cadastrado. Vamos fazer o login")
    nomeVerificada = prompt("Digite seu nome: ")
    senhaVerificada = prompt("Digite sua senha: ")
    if (nomeVerificada == nome && senhaVerificada === senha)
        // faz o login do usuário

        {
        alert(`
            --- Login ---
            Nome: ${nome}
            Senha: ${senha}

            Login realizado com sucesso! Bem-vindo, ${nome}
            `)
    } //mostra que o usuário consegiu fazer o login

    else {alert("Nome ou senha incorretos. Tente novamente.")}
} //mostra que o usuário errou o nome ou a senha

else {
    alert("Não foi possível se cadastrar. Idade mínima: 13 anos")
}//diz ao usuário que não é possível fazer o cadastro   