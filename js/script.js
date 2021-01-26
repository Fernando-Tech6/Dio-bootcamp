
const dino = document.querySelector('.dino');
const background = document.querySelector('.background');


let isJumping = false;
let isGameOver = false;
let position = 0;

function pressSpace(event)    // controle do botão space
{
    if (event.keyCode === 32)
    {
        if(!isJumping)
        {
            jump();
        }
    }
}

function jump()
{
    isJumping = true;

    let upInterval = setInterval(() => {

    if (position >= 150)
    {
        clearInterval(upInterval);  //Descer

        let downInterval = setInterval(() => {
            if (position <= 0)         //posição inicial.
            {
                clearInterval(downInterval); 
                isJumping = false;
 
            }
            else
            {
                position -= 20;   //velocidade de descida.
                dino.style.bottom = position + 'px';
            }
        },20);
    }
    else
    {
        
        position += 20;         
        dino.style.bottom = position + 'px';
    }
    },20); //20 milissegundos.
}

function createCactus()
{
    const cactus = document.createElement('div');    // Criar elementos html pelo javscript
    let cactusPosition = 1000;
    let cactusAleatorio = Math.random() * 6000;
     
    if (isGameOver) return;

    cactus.style.left = 1000 + 'px';
    cactus.classList.add('cactus');
    background.appendChild(cactus);  // adiciona um nó onde cactus está ligado a background

    let leftInterval = setInterval(() => {
        if(cactusPosition < -60 )
        {
            clearInterval(leftInterval);
            background.removeChild(cactus);
        }
        else if(cactusPosition > 0 && cactusPosition < 60 && position < 60)   // 60 é o tamanho dem pixels do dino.
        {
            clearInterval(leftInterval);
            isGameOver = true;
            document.body.innerHTML = '<h1 class="gameover">YOU DIED</h1>';   // criando um body e mensagem de fim de jogo.
        }
        else
        {
            cactusPosition -= 6;
            cactus.style.left = cactusPosition + 'px';
        }
        
    },20);

    setTimeout(createCactus,cactusAleatorio);   // Chama a função para criar cactus e depois uma função aleatoria para gerar os cactus.
}


createCactus();   // ao iniciar o jogo o cactus vai ser criado.
document.addEventListener('keyup', pressSpace);

