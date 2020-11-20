// 2) Implemente um método que inverta um array, não utilize métodos nativos do array.
// Entrada do método ([1,2,3,4]), Resultado do método: [4,3,2,1]

const q2= {
    questao2(a){
        var l = a.length
        var i1 = null;
        var i2 = null;
        for (i1 = 0, i2 = l - 1; i1 < i2; i1 += 1, i2 -= 1) {
            var temporary = a[i1];
            a[i1] = a[i2];
            a[i2] = temporary;
        }
        return a
    }
}
//testes
console.log(q2.questao2([1,2,3,4]));
console.log(q2.questao2([9,8,7,6]));
console.log(q2.questao2([5,4,3,2,1]));
console.log(q2.questao2([0,1,2,3,4,5]));