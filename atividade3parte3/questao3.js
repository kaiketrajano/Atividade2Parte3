const usuariosJSON = `[
  {"nome": "  carlos silva  ", "email": "CARLOS@EMAIL.COM", "idade": "25"},
  {"nome": "MARIA", "email": "maria@email.com", "idade": "30"},
  {"nome": "João Santos", "email": "joao@email.com", "idade": "17"}
]`;

function capitalizarNome(nome) {
  return nome
    .trim()
    .split(" ")
    .map((p) => p.charAt(0).toUpperCase() + p.slice(1).toLowerCase())
    .join(" ");
}

function normalizarUsuarios(json) {
  const lista = JSON.parse(json);

  return lista.map((user) => {
    const nome = capitalizarNome(user.nome);
    const email = user.email.toLowerCase();
    const idade = Number(user.idade);
    const maiorDeIdade = idade >= 18;

    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    return {
      nome,
      email,
      emailValido,
      idade,
      maiorDeIdade,
    };
  });
}

console.log(normalizarUsuarios(usuariosJSON));
