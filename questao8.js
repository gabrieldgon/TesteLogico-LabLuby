// 8) Implemente um método que remova os aninhamentos de um array de arrays para um array unico.
// Entrada do método ([1, 2, [3], [4, 5]]), Resultado do método: [1, 2, 3, 4, 5]

const q8={
    

    questao8(a){

        var res = a.reduce((list, sub) => list.concat(sub), [])
        return res
    }
}
//testes
console.log(q8.questao8([1,2,[3],[4,5]]))
console.log(q8.questao8([1,[2],[3,3,2,4],[4,5]]))
console.log(q8.questao8([1,2,[3],[4,5],1,3,4,5,[1,2,3,4]]))




