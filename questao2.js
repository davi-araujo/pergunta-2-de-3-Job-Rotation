const fibonacci = (numero) => {
    if (numero < 2) return 1;
    return fibonacci(numero - 1) + fibonacci (numero - 2);
};

const pertenceAFibonacci = (numero) => {
    let teste = 0;
    let fibonacciTeste = fibonacci(teste);

    do {
        teste++;
        fibonacciTeste = fibonacci(teste);
    } while (fibonacciTeste < numero)

    if (numero === fibonacciTeste) {
        console.log(`${numero} pertence à sequência de Fibonacci.`)
    } else {
        console.log(`${numero} não pertence à sequência de Fibonacci.`)
    }
};

const numeroDeTeste = 55; //INSIRA O NÚMERO QUE DESEJA TESTAR
pertenceAFibonacci(numeroDeTeste);