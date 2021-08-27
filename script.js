const tabTamanho = document.querySelectorAll('.tamanho a');
const tabCor = document.querySelectorAll('.corRoupa a');
const tabRoupa = document.querySelectorAll('.numeraçãoRoupa');
const tabLinha = document.querySelectorAll('.linha');
console.log(roupaVariante);


tabTamanho[1].classList.add('ativo');
tabCor[1].classList.add('ativo');
tabRoupa[0].classList.add('ativo');
tabLinha[0].classList.add('ativo1');

// ativar o tamnho da roupa;
function activeTab(index){

    tabTamanho.forEach((item) => {
        item.classList.remove('ativo')
    });
    tabTamanho[index].classList.add('ativo');
}

// ativar a cor da roupa
function activeTabCor(index){

    tabCor.forEach((item) => {
        item.classList.remove('ativo')
    });
    tabCor[index].classList.add('ativo');
}

// variante da roupa 

function roupaVariante(index){
    tabRoupa.forEach((item) => {
        item.classList.remove('ativo')
    });

    tabLinha.forEach((item) => {
        item.classList.remove('ativo1')
    });
    tabRoupa[index].classList.add('ativo');
    tabLinha[index].classList.add('ativo1');
}



// ativar o tamnho da roupa;
tabTamanho.forEach((intem, index) =>{
    intem.addEventListener('click', () => {
        activeTab(index);
    });
});

// ativar a cor da roupa
tabCor.forEach((intem, index)=>{
    intem.addEventListener('click', ()=>{
        activeTabCor(index);
    })
})

// variante da roupa 

tabRoupa.forEach((item, index) =>{
    item.addEventListener('click', () =>{
        console.log(roupaVariante(index));
    })
})