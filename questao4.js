const valorDeFaturamento = [
    { estado: 'SP', valor: 67836.43},
    { estado: 'RJ', valor: 36678.66},
    { estado: 'MG', valor: 29229.88},
    { estado: 'ES', valor: 27165.48},
    { estado: 'Outros', valor: 19849.53},
];

const totalDeFaturamento = valorDeFaturamento.reduce((total, elemento) => total += elemento.valor, 0);
const percentualDeFaturamento = valorDeFaturamento.map(elemento => ({ estado: elemento.estado, percentual: `${((elemento.valor/totalDeFaturamento)*100).toFixed(2)}%`}));

console.log(percentualDeFaturamento);