let joao=1;
let maria=2;
function getJoao(){
    return joao;
};
function getMaria(){
    return maria;
};
function setJoao(valor){
    if(valor>0){
        joao=valor;
    }else{
        joao=0;
    }
}
function setMaria(){
    if(valor>0){
        maria=valor;
    }else{
        maria=0;
    }
}
function deJoaoParaMaria(){
    setMaria(joao+maria);
    setJoao(0);
};
export{getJoao,getMaria,setJoao,setMaria,deJoaoParaMaria}