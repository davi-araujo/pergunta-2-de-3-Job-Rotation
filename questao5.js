// 5) Escreva um programa que inverta os caracteres de um string.

// IMPORTANTE:
// a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
// b) Evite usar funções prontas, como, por exemplo, reverse;
const inverteString = (string) => {
    let stringEmArray = string.split('');

    stringEmArray.forEach((valor, indice, array) => {
        let aux;
        let tamanho = array.length;

        if (indice >= tamanho / 2) {
            return;
        }

        aux = valor;
        array[indice] = array[tamanho - indice - 1];
        array[tamanho - indice - 1] = aux;
    });

    string = stringEmArray.join('');

    return string;
};

const string = 'davi matias araujo' //INSIRA AQUI A STRING QUE DESEJA INVERTER
const stringInvertida = inverteString(string);
console.log(stringInvertida);