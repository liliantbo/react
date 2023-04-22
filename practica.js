//sqare cada valor de input1
const input1= [1,2,3,4,5];
let input1New = input1.map((valor)=>{
    return Math.pow(valor,2);
})
console.log(input1New);

//sume solo los valores positivos
const input2 = [1, -4, 12, 0, -3, 29, -150]
let input2New = input2.reduce((acumulador, valorActual) =>{
    return valorActual>0?acumulador+valorActual:acumulador;
})
console.log(input2New);