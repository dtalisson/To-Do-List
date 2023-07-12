const button = document.querySelector('.newTask')
const input = document.querySelector('.inputTask')
const LiCompleta = document.querySelector('#List') 
const btnCheck = document.querySelector('#btnCheck')
const edit = document.querySelector('#edit')
const modal = document.querySelector('dialog')
const liModal = document.querySelector('modal')
const salvar = document.querySelector('#salvar')


// basicamente, pegando os itens!!
// seletores


let listValores = [] // 
// criando uma lista vázia.

function pegarValores () { 
   listValores.push({
   item: input.value,
   concluida: false
  }) 
  // 1 - adicionando pelo push um array:
  // contendo: item: que vai ser pegado o valor digitado
  // concluida: seria no caso a tarefa, valor definido: falso 

  input.value = ''  // assim que adicionar um valor no input, zerar 
  mostrarLi() 
   // chamando a função mostrar os itens!
} 
// função de pegar os valores /\

function mostrarLi() { 
    let li = ''  // criando uma variavel para usarmos como novo texto
    listValores.forEach((dados, index) => { // procurando os inputs que foram adicionados e dando eles o nome de "dados" | também procurando o index (o número onde ele se encontra[a posição])
        li +=  `  
        <li class="task ${dados.concluida && "done"}"> 
        <p>${dados.item}</p>
            <div class="box">
            <button type="button" id="btnCheck"><img src="img/checked.png" alt="" id="checked" onclick="sucesso(${index})"> </button> 
            <button type="button" id="btnRemove"><img src="img/trash.png" alt="" id="remove" onclick="removerItem(${index})"> </button>

            </div>
          </li>
        `
        
        // no li class, vamos direcionar, caso o dado for concluido insira a class "done" que estamos usando para verificar se a tarefa foi concluida ou não
        // basicamente, transformando o li nesse bloco de texto html
    })

     LiCompleta.innerHTML = li  // pegando a variavel do ol e usando o bloco de texto html que acabamos de pegar
     localStorage.setItem('lista', JSON.stringify(listValores)) 
     // colocando a lista no localStorage
     // e transformando ela em string
} 
// função de mostrar os valores
function editItem() { 
   modal.showModal()

   
}



function removerItem(index) { // função
   listValores.splice(index, 1)

   mostrarLi()
}
// função de remover item 
function sucesso(index){

   listValores[index].concluida = !listValores[index].concluida  // verificando se na lista a posição atual, o item foi concluido caso não, o item não foi concluido
   mostrarLi()  // chamando a função de mostrar item
}
// function de sucesso
function reload() { 
   const localDosItens = localStorage.getItem('lista') // salvando a lista que deixamos no localStorage numa constante
   if(localDosItens) { 
      listValores = JSON.parse(localDosItens)  // pegando a lista e transformando ela em objeto novamente 
   }
   mostrarLi() // chamando a função de mostrar os itens!
}
// function de pegar o localStorage e retornar para ficar salvo

// functions 

reload() 
// chamando a function de retornar o itens que foram salvos no storage
button.addEventListener('click', pegarValores)
// eventos







