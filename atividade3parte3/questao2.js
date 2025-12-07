function analisarTexto(texto) {
  const palavras = texto.replace(/[.,]/g, "").split(/\s+/);

  const totalPalavras = palavras.length;

  const frequencias = {};
  palavras.forEach((p) => {
    frequencias[p] = (frequencias[p] || 0) + 1;
  });

  const freqArray = Object.entries(frequencias).map(
    ([palavra, frequencia]) => ({
      palavra,
      frequencia,
    })
  );

  const tamanhoMedioPalavras =
    palavras.reduce((acc, p) => acc + p.length, 0) / totalPalavras;

  return {
    totalPalavras,
    frequenciaPalavras: freqArray,
    tamanhoMedioPalavras: Number(tamanhoMedioPalavras.toFixed(2)),
  };
}

const texto =
  "JavaScript é uma linguagem de programação. JavaScript é versátil e JavaScript é poderoso.";
console.log(analisarTexto(texto));
