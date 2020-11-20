// 3) Implemente um método que limpe os itens desnecessários de um array (false, undefined, strings vazias, zero, null).
// Entrada do método ([1,2,'', undefined]), Resultado do método: [1,2]
const q3={
    

    questao3(a){

        for(i=0;i<a.length;i++){

            if(a[i]===''|| a[i]===undefined ||a[i]=== false||a[i]===null||a[i]==0) { a[i]='remova'}
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
console.log(q3.questao3([1,2,'', undefined,3,0,3,undefined]))
console.log(q3.questao3([1,2,'', false,3,0,3,null,4,5 ]))



