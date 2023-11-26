import{getJoao,getMaria,setJoao,setMaria,deJoaoParaMaria,deMariaParaJoao} from "../src/joaoEMaria.js";

let maria=getMaria();
let joao=getJoao();

console.log(`Maria possuía ${maria} maçãs e João possuía ${joao}.`);

deJoaoParaMaria();
maria=getMaria();
joao=getJoao();

console.log(`Mas maria é esperta e fez uma aposta com João valendo todas as suas maçãs, como Maria ganhou a aposta, agora ela tem ${maria} maçãs e João tem ${joao}.`);