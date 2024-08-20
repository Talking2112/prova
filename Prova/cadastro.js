const usuarios = []

function adicionarUsuario(nome, idade, email){
    let usuariosNovo = {
        nome: nome,
        idade: idade,
        email: email
    }

    if(typeof(nome)!="string"){
        console.log("Os dados estão incorretos")
    }else if(typeof(idade)!="number"){
        console.log("Os dados estão incorretos")
    }else if(typeof(email)!="string"){
        console.log("Os dados estão incorretos")
    }else{
        if(idade >= 18){
            usuarios.push(usuariosNovo)
        }else{
            console.log( nome, "Não tem idade para se cadastrar." )
        }
    }
}

function listarUsuarios() {
    console.log("Lista de Usuários:")
    usuarios.forEach((usuario, index) => {
        console.log(`${index + 1}. Nome: ${usuario.nome}, Idade: ${usuario.idade}, Email: ${usuario.email}`)
    })
}

adicionarUsuario("Gabriel", 18, "gabriel_carada@estudante.sesisenai.org.br")
adicionarUsuario("Bignot", 1, "gabriel_bignotti@estudante.sesisenai.org.br")
adicionarUsuario("Kdari", 27, "gabriel_e_espindola@estudante.sesisenai.org.br")
adicionarUsuario("123", "cinco", "16")

listarUsuarios()