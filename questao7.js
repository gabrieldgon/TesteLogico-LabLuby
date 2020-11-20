// 7) Implemente um método que compare a igualdade de dois arrays e retorne um valor booleano.
// Entrada do método ([1,2,3,4],[1,2,3,4]), Resultado do método: true
const q7={
    questao7(a,b){
        if(a.length==b.length){
            for(i=0;i<a.length;i++){
                if(a[i]==b[i]){}

                else return false
            }
            return true
        }
        else return false
    }
}
//testes
console.log(q7.questao7([1,2,3,4],[1,2,3,4]))
console.log(q7.questao7([1,2,3,4],[1,2,3,4,5]))
console.log(q7.questao7([1,2,3,4,4],[1,2,3,4,3]))
console.log(q7.questao7([1,2,3,4,5,6,7],[1,2,3,4,5,6,7]))