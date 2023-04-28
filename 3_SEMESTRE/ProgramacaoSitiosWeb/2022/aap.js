
function RetornarNumeroAleatorio(casas)
{
    try{
        return Math.floor(Math.random() * casas);
    }
    catch (e){

        return `Não foi possível gerar um número aleatório. Erro: ${ e } `
    }
}

console.log(RetornarNumeroAleatorio("asdgasdgasjdhgj"))