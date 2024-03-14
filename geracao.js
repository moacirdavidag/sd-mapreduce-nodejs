const fs = require("fs");
const {
  TOTAL_ARQUIVOS,
  MAX_PALAVRAS,
  MIN_CARACTERES,
  MAX_CARACTERES,
} = require("./variaveis");

const geracao = () => {
  const criarArquivos = (TOTAL_ARQUIVOS) => {
    fs.writeFileSync("./intermediario.txt", "", (err) => {
      if (err) {
        throw new Error("Erro ao criar o arquivo: " + err.message);
      }
    });
    for (let i = 0; i < TOTAL_ARQUIVOS; i++) {
      const data = "";
      fs.writeFileSync(`./arquivo${i}.txt`, data, (err) => {
        if (err) {
          throw new Error("Erro ao criar o arquivo: " + err.message);
        }
      });
    }
  };

  const gerarPalavrasAleatorias = (
    TOTAL_ARQUIVOS,
    MAX_PALAVRAS,
    MIN_CARACTERES,
    MAX_CARACTERES
  ) => {
    const letras = "abcde";
    const gerarPalavra = () => {
      let TAMANHO_PALAVRA = Math.floor(
        Math.random() * (MAX_CARACTERES - MIN_CARACTERES + 1) + MIN_CARACTERES
      );
      let palavraAleatoria = "";
      for (let i = 0; i < TAMANHO_PALAVRA; i++) {
        palavraAleatoria += letras[Math.floor(Math.random() * letras.length)];
      }
      return palavraAleatoria;
    };
    for (
      let indiceArquivo = 0;
      indiceArquivo < TOTAL_ARQUIVOS;
      indiceArquivo++
    ) {
      const nomeArquivo = `./arquivo${indiceArquivo}.txt`;
      for (
        let totalPalavras = 0;
        totalPalavras < MAX_PALAVRAS;
        totalPalavras++
      ) {
        let palavra = gerarPalavra();
        fs.appendFileSync(nomeArquivo, `${palavra}`, (err) => {
          if (err) {
            throw new Error("Erro ao criar o arquivo: " + err.message);
          }
        });
        if (totalPalavras !== MAX_PALAVRAS - 1) {
          fs.appendFileSync(nomeArquivo, "\n", (err) => {
            if (err) {
              throw new Error("Erro ao criar o arquivo: " + err.message);
            }
          });
        }
      }
    }
  };

  criarArquivos(TOTAL_ARQUIVOS);
  gerarPalavrasAleatorias(
    TOTAL_ARQUIVOS,
    MAX_PALAVRAS,
    MIN_CARACTERES,
    MAX_CARACTERES
  );
};

module.exports = geracao;