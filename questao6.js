// 6) Implemente um método que retorne um array, sem valores duplicados.
// Entrada do método ([1,2,3,3,2,4,5,4,7,3]), Resultado do método: [1,2,3,4,5,7]

const q6={
    

    questao6(a){
        var res= a.filter((este, i) => a.indexOf(este) === i);
        return res
    }
}
//testes
console.log(q6.questao6([1,2,3,3,2,4,5,4,7,3])) 
console.log(q6.questao6([1,2,3,9,9,9,9,9,9,10])) 
console.log(q6.questao6([9,8,7,6,5,4,4,4,3,3,2,2,1,1]))