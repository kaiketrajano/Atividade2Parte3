function sanitizarDados(dados) {
  const novo = JSON.parse(JSON.stringify(dados));

  novo.usuarios = novo.usuarios.map((u) => ({
    nome: u.nome,
    cpf: u.cpf.replace(/\d(?=\d{2})/g, "*"),
    cartaoCredito: u.cartaoCredito.replace(/\d(?=\d{4})/g, "*"),
    telefone: u.telefone.replace(/(\(\d{2}\))\s*\d{5}/, "$1 *****"),
  }));

  novo.metadata.token = novo.metadata.token.slice(0, 10) + "...";

  return novo;
}

const dadosSensiveis = {
  usuarios: [
    {
      cpf: "123.456.789-00",
      cartaoCredito: "5555-6666-7777-8888",
      telefone: "(11) 99999-9999",
      nome: "Fulano de Tal",
    },
  ],
  metadata: {
    ip: "192.168.1.100",
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
  },
};

console.log(sanitizarDados(dadosSensiveis));
