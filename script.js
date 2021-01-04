const dino= document.querySelector('.dino');
const background=document.querySelector('.background')
let isJumping=false;
let position =0;
//função para eitura do butão espaço
function handlkeyup(event){
    if(event.keyCode == 32){
        if(!isJumping){
       jump();
     }
    }
}
function jump(){
    isJumping= true;
    let  upInterval=setInterval(()=>{
        if(position>= 150){
          clearInterval(upInterval)  
            // descendo
            let downInterval = setInterval(()=>{
                if(position<=0){
                    // se a posição for menor ou igual a 0 a descida para de acontecer
                    // evitando que o bonerco suma da tela
                    clearInterval(downInterval);
                    isJumping= false; 
                }else{
                position -=20;
                dino.style.bottom=position + 'px';
            }},20)
        }else{
            //subindo
        position += 20; 
        dino.style.bottom=position + 'px';
    }},20)
}

function createCactus(){
    const cactus = document.createElement('div');
    let cactusPosition=1000;
    let randomTime= Math.random()*6000;
    
    cactus.classList.add('cactus');
    cactus.style.left=1000+'px';
    background.appendChild(cactus)

    let leftInterval= setInterval(()=>{
        // implementart aqui o aumento de velocidade de acordo com o tempo
       if(cactusPosition< -60){
       //se o cactu sair da tela ele será removido 
       //para evitar processamento desnecessários
       clearInterval(leftInterval);
       background.removeChild(cactus);
       }else if(cactusPosition>0 && cactusPosition<60 && position<60 ){
           //Game over
       clearInterval(leftInterval);
       document.body.innerHTML ='<h1 class="game-over">Fim de jogo</h1>';
    
    }else{//caso contrrátrio continuará percorrendo 
       cactusPosition -=10;
       cactus.style.left= cactusPosition + 'px';
       }
    }, 20);
      setTimeout(createCactus, randomTime);
    }
createCactus();
document.addEventListener('keyup', handlkeyup)
