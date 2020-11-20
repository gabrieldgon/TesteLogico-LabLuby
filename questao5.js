// 5) Implemente um método que retorne um array, sem os itens passados por parâmetro depois do array de entrada. Entrada do método ([5,4,3,2,5], 5,3), Resultado do método: [4,2]
const q5={
    

    questao5(a=[],b=0,c=0){

        for(i=0;i<a.length;i++){

            if(a[i]===b|| a[i]===c) { a[i]='remova'}
        }
        let busca='remova'
        let indice=a.indexOf(busca)
        while(indice>=0){
            a.splice(indice, 1);
            indice = a.indexOf(busca)
        }
        return a
    }
}
//testes
console.log(q5.questao5([5,4,3,2,5],5,3))
console.log(q5.questao5([5,4,3,2,5],4,2))
console.log(q5.questao5([1,2,3,4,5,6,7,2,2,1,1,9],1,2));


