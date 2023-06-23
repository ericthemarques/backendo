const palavra = "Morango"
let letra = {};

for (let i = 0; i <= palavra.length; i++){
    if(letra[palavra[i]]){
        letra[palavra[i]]++;
    } else {
        letra[palavra[i]] = 1;
    }
    }


console.log(letra)