const nome = prompt("Digite seu nome: ")
let idade = parseInt(prompt("Digite sua idade: "))
const senha = prompt("Digite sua senha: ")
//inicio do cadastro

if (idade >=13) {
    alert(`
        --- Cadastro de Usuário ---
        Seu nome: ${nome}
        Sua idade: ${idade}
        `)
    let nomeVerificada = prompt("Digite seu nome: ")
    let senhaVerificada = prompt("Digite sua senha: ")
    if (nomeVerificada === nome && senhaVerificada === senha)
        //verifica se a senha e o nome são iguais e faz o login do usuário
        {
        alert(`
            --- Login ---
            Login realizado com sucesso! Bem-vindo, ${nome}
            `)
    } //mostra que o usuário consegiu fazer o login
    else {alert("Nome ou senha incorretos. Tente novamente.")}
} //mostra que o usuário errou o nome ou a senha
else {
    alert(`
        --- Cadastro de Usuário ---
        Você não pode se cadastrar. Idade mínima: 13 anos.
`)
}//diz ao usuário que não é possível fazer o cadastro   