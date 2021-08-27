const tabTamanho = document.querySelectorAll('.tamanho a');
const tabCor = document.querySelectorAll('.corRoupa a');
tabTamanho[1].classList.add('ativo');
tabCor[1].classList.add('ativo');

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