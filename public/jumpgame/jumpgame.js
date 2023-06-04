// GAME STUFF
const character = document.querySelector('.character')
const barrel = document.querySelector('.barrel')
const tryAgain = document.querySelector('.tryagain')
const characterWidth = Number((getComputedStyle(character).width).replace('px', ''))
let pointsNow = 000
let record = 000
let loop

// USER INFOS
let username = sessionStorage.getItem('NOME_USUARIO')
let userid = sessionStorage.getItem('ID_USUARIO')

// GAME FUNCTIONS
puxarRecorde()
function jumpOnKeyboard(keycap){
    if(keycap.code == 'Space'){
        character.classList.add('jump')
        document.querySelector('.jumpButtonBox').style.transform = 'translateY(4px)';
    }
    setTimeout(()=>{
        character.classList.remove('jump')
        document.querySelector('.jumpButtonBox').style.transform = 'translateY(0)'
    }, 600);
};
document.addEventListener('keydown', jumpOnKeyboard);

function jumpOnButton(){
    character.classList.add('jump')
    setTimeout(()=>{
        character.classList.remove('jump')
    }, 600)
}

function verifyCollision(){
    if(getComputedStyle(character).bottom == '0px' && barrel.offsetLeft <= characterWidth){
        barrel.style.left = barrel.offsetLeft + 'px'
        barrel.style.animation = 'none';
        // pausa o jogo, o único elemento que se move é o barril.
        clearInterval(loop) 
        // para o setInterval que serve para verificar a colisão a cada 100 milisegundos
        character.src = 'imgs/death.png'
        tryAgain.classList.remove('hidden')
        tryAgain.textContent = 'Try Again'
        document.removeEventListener('keydown', jumpOnKeyboard) // não permite mais os pulos enquanto morto
        novoRecorde()
    }else{
        pointsNow+= 10
        document.querySelector('#pontosAtual').innerText = pointsNow
    }
}

inicio()
function inicio(){
    // pausa o jogo, o único elemento que se move é o barril.
    barrel.style.left = barrel.offsetLeft + 'px'
    barrel.style.animation = 'none';
    // para o setInterval que serve para verificar a colisão a cada 100 milisegundos
    character.src = 'imgs/luffy-running.gif'
    tryAgain.classList.remove('hidden')
    document.removeEventListener('keydown', jumpOnKeyboard)
    
}

function puxarRecorde(){
    fetch(`/jumping/puxarRecorde/${userid}`)
    .then(function(resposta){
        resposta.json().then(function(response){
            record = response[0].recordeAtual    
            document.querySelector('#recorde').innerText = record
        })
    })
}

function novoRecorde(){
    if(pointsNow > record){
        alert(`o usuario de id ${userid} passou o seu recorde anterior tendo agora ${record} pontos!!!`)
        record = pointsNow
        document.querySelector('#recorde').innerText = record
        fetch("/jumping/cadastrarRecorde", 
        {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            // crie um atributo que recebe o valor recuperado aqui
            // Agora vá para o arquivo routes/usuario.js
            recorde: record,
            usuario: userid
        })
    })
    }else{
        alert(`Boa tentativa, faltaram ${record - pointsNow} pontos para alcançar seu recorde atual, continue firme!!`)
    }
}

function refresh(){
    pointsNow = 000;
    character.src = 'imgs/luffy-running.gif';
    loop = setInterval(verifyCollision, 100);
    barrel.style.animation = 'barrelAnimation 2s linear infinite';
    document.addEventListener('keydown', jumpOnKeyboard);
    tryAgain.classList.add('hidden');
}