const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')

const jump = () => {
    mario.classList.add('jump') // ADICIONA CLASSE jump

    setTimeout(() => {
        mario.classList.remove('jump') // REMOVE CLASSE jump
    }, 500)
}

// VERIFICA SE PERDEMOS O JOGO OU NÃO
const loop = setInterval(() => {
    // offsetLeft SE REFERE AO DESLOCAMENTO ESQUERDO DO ELEMENTO
    const pipePosition = pipe.offsetLeft

    // PARA CAPTURAR A PROPRIEDADE bottom DO MARIO USAMOS O getComputedStyle
    // replace PQ QUEREMOS SOMENTE O NÚMERO, SEM O px
    // O + TRANSFORMA EM Number AQUILO QUE ESTÁ SENDO RETORNADO COMO String
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')
    

    if (pipePosition > 0 && pipePosition <= 120 && marioPosition <= 80) {
        pipe.style.animation = 'none'
        pipe.style.left = `${pipePosition}px`

        mario.style.bottom = `${marioPosition}px`
        mario.style.animation = 'none'
        
        mario.src = 'img/game-over.png'
        mario.style.width = '80px'
        mario.style.left = '30px'

        // ENCERRA O setInterval
        clearInterval(loop)
    }
}, 10)

document.addEventListener('keydown', jump)
