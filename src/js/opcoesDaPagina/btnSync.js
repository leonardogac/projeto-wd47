;(function(){
    const btnSync = document.querySelector('#btnSync')
    btnSync.addEventListener('click', function(){
        btnSync.classList.add('botaoSync--esperando')
        btnSync.classList.remove('botaoSync--sincronizado')

        const salvadorDeCartoes = new XMLHttpRequest()
        salvadorDeCartoes.open('POST', 'https://ceep.herokuapp.com/cartoes/salvar')
        salvadorDeCartoes.setRequestHeader('Content-Type', 'application/json')

        const cartoes = document.querySelectorAll('.cartao')
        const infosDoMural = {
            usuario:'l.gc@hotmail.com',
            cartoes: Array.from($('.cartao')).map(function(cartao){
                return{
                    conteudo: cartao.querySelector('.cartao-conteudo').textContent,
                    cor:getComputedStyle(cartao).getPropertyValue('background-color')
                }
            })
        }

        salvadorDeCartoes.send(JSON.stringify(infosDoMural))

        salvadorDeCartoes.addEventListener('load', function(){
            const response = JSON.parse(salvadorDeCartoes.response)
            console.log(`${response.quantidade} cartões salvos em ${response.usuario}`)

            btnSync.classList.remove('botaoSync--esperando')
            btnSync.classList.add('botaoSync--sincronizando')
        })
        
        salvadorDeCartoes.addEventListener('error', function(){
            btnSync.classList.remove('botaoSync--esperando')
            btnSync.classList.add('botaoSync--deuRuim')
        })
    })

    btnSync.classList.remove('no-js')
})()
