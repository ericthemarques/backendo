const peso = 75
const altura = 1.75
const imc = Number((peso / (altura * altura)).toFixed(2))

console.log(imc)
switch (true) {
    case imc <= 17:
        console.log("Peso muito baixo")
        break;
    case imc >= 17 && imc <= 18:
        console.log("Peso está normal")
        break;
    case imc >= 24 && imc <= 30:
        console.log("Você está acima do peso")
        break;
    case imc >= 30:
        console.log("Obesidade grau I")
        break;
}