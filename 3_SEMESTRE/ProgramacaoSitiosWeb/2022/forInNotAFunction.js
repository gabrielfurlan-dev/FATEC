let  carro = {
    'Modelo' : 'celta',
    'PrecoVenda' : 10,
    'PrecoDesconto' : function(precoVenda){
        return precoVenda * 0.9
    },
    'Cores' : {
        'CorInterior' : 'Creme',
        'CorLataria' :  'Amarelo'
    }
}

function main1(){
    for (const properties in carro) {

        if (typeof carro[properties] == 'function') continue;

        if (typeof carro[properties] == 'object') {
            carro.forEach(element => {
                console.log(element)
            });
        }
    }
}
