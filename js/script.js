
const dino = document.querySelector('.dino');
const background = document.querySelector('.background');

let isJumping = false;

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
    let position = 0;
    isJumping = true;
    let upInterval = setInterval(() => {

    if (position >= 150)
    {
        clearInterval(upInterval);

        let downInterval = setInterval(() => {
            isJumping = false;
            if (position <= 0)
            {
                clearInterval(downInterval);
            }
            else
            {
                position -= 20;
                dino.style.bottom = position + 'px';
            }
        },20);
    }
    else
    {
        // para subir
        position += 20       
        dino.style.bottom = position + 'px';
    }
    },20); //20 milissegundos controle de velocidade.
}

function createCactus()
{
    const cactus = document.createElement('div');    // Criar elementos html pelo javscript
    let cactusPosition = 1000;
    let cactusAleatorio = Math.random() * 6000;

    cactus.style.left = 1000 + 'px';
    cactus.classList.add('cactus');
    background.appendChild(cactus);  // adiciona um nó onde cactus está ligado a background

    let leftInterval = setInterval(() => {
        if(cactusPosition < -69 )
        {
            clearInterval(leftInterval);
            background.removeChild(cactus);
        }
        else
        {
            cactusPosition -= 10;
            cactus.style.left = cactusPosition + 'px';
        }
        
    },20);
    
    setTimeout(createCactus,cactusAleatorio);   // Chama a função para criar cactus e depois uma função aleatoria para gerar os cactus.
}

createCactus();   // ao iniciar o jogo o cactus vai ser criado.
document.addEventListener('keyup', pressSpace);


// function Veloz()
// { 
//      for(i=100;i>20;i-=10)
//      {
//          console.log("teste");
//      }
//     return 20; 
// }