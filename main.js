const { MapFunction } = require("./Map");
const ReduceFunction = require("./Reduce");
const geracao = require("./geracao");
const {TOTAL_ARQUIVOS} = require("./variaveis");

geracao();

for(let i = 0; i < TOTAL_ARQUIVOS; i++) {
    MapFunction(`./arquivo${i}.txt`);
}

ReduceFunction();