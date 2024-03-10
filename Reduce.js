const fs = require("fs");

const PATH_INTERMEDIARIO = "./intermediario.txt";
const PATH_FINAL = "./final.txt";

const ReduceFunction = () => {
  const conteudo = fs.readFileSync(PATH_INTERMEDIARIO, "utf8");
  const linhas = conteudo.split(/\n/);

  const contagem = {};

  linhas.forEach((linha) => {
    const [palavra, ocorrencias] = linha.split(" ");
    if (contagem[palavra]) {
      contagem[palavra] += parseInt(ocorrencias);
    } else {
      contagem[palavra] = parseInt(ocorrencias);
    }
  });

  fs.writeFileSync(PATH_FINAL, "", (err) => {
    if (err) {
      throw new Error("Erro ao escrever o arquivo: " + err.message);
    }
  });

  Object.entries(contagem).forEach(([palavra, ocorrencias]) => {
    fs.appendFileSync(PATH_FINAL, `${palavra}: ${ocorrencias}\n`, (err) => {
      if (err) {
        throw new Error("Erro ao escrever o arquivo: " + err.message);
      }
    });
  });
};

ReduceFunction();