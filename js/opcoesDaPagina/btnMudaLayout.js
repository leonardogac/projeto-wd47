const btn=document.querySelector('#btnMudaLayout')

function MudaTexto(){

    if(btn.textContent=='Blocos'){
        btn.textContent='Linhas'
    }else{
        btn.textContent='Blocos'
    }

}



btn.addEventListener('click', MudaTexto)
const mural=document.querySelector('.mural')

function MudaLayout() {
    mural.classList.toggle('mural--linha')
}

btn.addEventListener('click', MudaLayout)

btn.classList.remove('no-js')