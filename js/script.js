const dino = document.querySelector('.dino')


function pressSpace(event)
{
    if (event.keyCode === 32)
    {
        console.log("Pressionando space");
    }
}
document.addEventListener('keyup', pressSpace);
