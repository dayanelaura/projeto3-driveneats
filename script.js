function selecionar(elemento, selecao){
    const clicado = document.querySelector('.${selecao} .borda');
  
    if(clicado !== null)
         clicado.classList.remove("borda");
    
    elemento.classList.add("borda");

    ativaricone();
    finalizarpedido();
} 

let prato = null; 
let bebida = null; 
let sobremesa = null;

function finalizarpedido(){

   if(prato !== null && bebida !== null && sobremesa !== null){ 
        const confirmar = document.querySelector("button");
        confirmar.innerHTML = "Fechar Pedido";
        confirmar.classList.add("botaoverde");
    }   
}

function ativaricone(elemento, selecao){
    const clicado = document.querySelector('.${selecao} .iconeverde'); 
    const icone = elemento.querySelector(".iconeverde");

    if(clicado !== null)
        clicado.classList.remove("iconeverde");
    
    icone.classList.add("iconeverde");
}