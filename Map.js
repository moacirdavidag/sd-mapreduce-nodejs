const fs = require("fs");

const PATH_INTERMEDIARIO = "./intermediario.txt";

const MapFunction = (arquivo) => {
  fs.writeFileSync(PATH_INTERMEDIARIO, "", (err) => {
    if (err) {
      throw new Error("Erro ao escrever o arquivo: " + err.message);
    }
  });
  const conteudo = fs.readFileSync(arquivo, "utf8", (err) => {
    if (err) {
      throw new Error("Erro ao ler o arquivo: " + err.message);
    }
  });
  const palavras = conteudo.split(/\n/);
  for (let i = 0; i < palavras.length; i++) {
    fs.appendFileSync(PATH_INTERMEDIARIO, `${palavras[i]} 1`, (err) => {
      if (err) {
        throw new Error("Erro ao escrever o arquivo: " + err.message);
      }
    });
    if (i !== palavras.length - 1) {
      fs.appendFileSync(PATH_INTERMEDIARIO, "\n", (err) => {
        if (err) {
          throw new Error("Erro ao escrever o arquivo: " + err.message);
        }
      });
    }
  }
};

module.exports = { MapFunction };
