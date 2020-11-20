// 10) Implemente um método que encontre os valores comuns entre dois arrays.
// Entrada do método ([6, 8], [8, 9]), Resultado do método: [8]


const q10 ={questao10(r1,r2) {
   
var todasAsDiferencas
    var apenasNoR1 = r1.filter(function (element, index, array) {
        if(r2.indexOf(element) != -1)
            return element;
    });
    return  todasAsDiferencas = apenasNoR1 
}
}
//testes
console.log(q10.questao10([6,8],[8,9]));
console.log(q10.questao10([6,8,1],[8,9,1]));
console.log(q10.questao10([6,8],[8,9,2,4]));
console.log(q10.questao10([6,8,2],[8,9,2,4]));
