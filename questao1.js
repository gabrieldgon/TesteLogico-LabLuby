// 1) Implemente um método que crie um novo array baseado nos valores passados.
// Entradas do método (3,a), Resultado do método: ['a', 'a', 'a']

const q1={
    questao1(n=0,a=0){
   let vet=[]
   for(i=0;i<n;i++){
       vet[i]=a
   }
   return vet
}
} 
//testes
console.log(q1.questao1(3,'ola'))
console.log(q1.questao1(5,3))
console.log(q1.questao1(2,'oi'))
console.log(q1.questao1(0,'a'))
console.log(q1.questao1())
