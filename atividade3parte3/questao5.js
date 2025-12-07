function parseQueryString(query) {
  const obj = {};

  query.split("&").forEach((par) => {
    const [chave, valor] = par.split("=");

    if (!isNaN(valor) && valor.trim() !== "") {
      obj[chave] = Number(valor);
    } else {
      obj[chave] = valor;
    }
  });

  return obj;
}

const queryString =
  "categoria=eletronicos&preco=500&marca=samsung&avaliacao=4.5";

console.log(parseQueryString(queryString));
