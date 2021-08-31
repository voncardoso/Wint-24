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

tabTamanho.forEach((intem, index) =>{
    intem.addEventListener('click', () => {
        activeTab(index);
    });
});

// ativar a cor da roupa
function activeTabCor(index){

    tabCor.forEach((item) => {
        item.classList.remove('ativo')
    });
    tabCor[index].classList.add('ativo');
}

tabCor.forEach((intem, index)=>{
    intem.addEventListener('click', ()=>{
        activeTabCor(index);
    })
})


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

// variante da roupa 

tabRoupa.forEach((item, index) =>{
    item.addEventListener('click', () =>{
        console.log(roupaVariante(index));
    })
});

//const coracao = document.querySelectorAll('.coracao');
const coracao = document.querySelector('.coracao');
const coracao1 = document.querySelector('.coracao1');

function activeCoracao(){
    coracao1.classList.toggle('ativo');
}

coracao.addEventListener('click', () =>{
    coracao.classList.toggle('ativo');
    activeCoracao();
})


function activeCoracao2(){
    coracao.classList.toggle('ativo');
}

coracao1.addEventListener('click', () =>{
    coracao1.classList.toggle('ativo');
    activeCoracao2();
})

//coracao.forEach((item) =>{
  //  item.addEventListener('click', () =>{
  //      item.classList.toggle('ativo');
  //  });
//})


// Ativar o botão da Category

const AtivarCategory = document.querySelectorAll('.footer a');
AtivarCategory[1].classList.add('ativo');

function Category(index){
    AtivarCategory.forEach((item) => {
        item.classList.remove('ativo');
    });
    AtivarCategory[index].classList.add('ativo');
}

AtivarCategory.forEach((item, index) =>{
    item.addEventListener('click', () => {
        Category(index);
    });
        //item.classList.add('ativo') 
});


