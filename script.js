const tabTamanho = document.querySelectorAll('.tamanho a');
tabTamanho[0].classList.add('ativo');

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