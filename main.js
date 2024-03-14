const { Worker } = require("worker_threads");
const geracao = require("./geracao");
const { TOTAL_ARQUIVOS } = require("./variaveis");
const ReduceFunction = require("./Reduce");

geracao();

let threadsConcluidas = 1;

for (let i = 0; i < TOTAL_ARQUIVOS; i++) {
  const worker = new Worker("./Map.js", {
    workerData: { arquivo: `./arquivo${i}.txt` },
  });
  worker.on("message", (message) => {
    console.log(`Arquivo ${message.arquivo} processado`);
    threadsConcluidas++;
    if (threadsConcluidas === TOTAL_ARQUIVOS) {
      ReduceFunction();
    }
  });   
  worker.on("error", (err) => {
    console.error(err);
  });
  worker.on("exit", (code) => {
    if (code !== 0) {
      console.error(new Error(`Worker stopped with exit code ${code}`));
    }
  });
}
