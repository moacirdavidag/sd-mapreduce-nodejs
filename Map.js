const { workerData, parentPort } = require('worker_threads');
const fs = require('fs');

const PATH_INTERMEDIARIO = "./intermediario.txt";

const MapFunction = (arquivo) => {
  const conteudo = fs.readFileSync(arquivo, "utf8", (err) => {
    if (err) {
      throw new Error("Erro ao ler o arquivo: " + err.message);
    }
  });
  const palavras = conteudo.split(/\n/);
  for (let i = 0; i < palavras.length; i++) {
    fs.appendFileSync(PATH_INTERMEDIARIO, `${palavras[i]} 1\n`, (err) => {
      if (err) {
        throw new Error("Erro ao escrever o arquivo: " + err.message);
      }
    });
  }
};

MapFunction(workerData.arquivo);
parentPort.postMessage({ arquivo: workerData.arquivo, status: 'concluido' });
