let pessoas = [
    {name:"Eduardo", cargo: "Professor", curso: "POO"},
    {name:"Eduardo2", cargo: "Professor2", curso: "POO2"},
    {name:"Eduardo3", cargo: "Professor3", curso: "POO3"},
]

let valor = pessoas.filter((item) => {
    return item == "Eduardo"
})



if (valor == null)
    return "Não encontrado."