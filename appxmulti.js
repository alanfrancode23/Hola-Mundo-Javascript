const fs = require('fs');

console.clear();

console.log('++++++++++++++++++++++')
console.log('     tabla del 5'      )
console.log('++++++++++++++++++++++')

const base = 5;
let salida =''; 

for (let i = 1; i <=10; i++){
    salida += `${base} x ${i} = ${base * i }\n`;
} 


console.log(salida);


fs.writeFileSync (`tabla-${base}.txt`, salida);

console.log(`tabla-${base}.txt creada`);