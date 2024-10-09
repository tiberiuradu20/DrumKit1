`use strict`
const keyW = document.querySelector(`.w-control`)
const keyA = document.querySelector(`.a-control`)
const keyS = document.querySelector(`.s-control`)
const keyD = document.querySelector(`.d-control`)
const keyJ = document.querySelector('.j-control')
const keyK = document.querySelector(`.k-control`)
const keyL = document.querySelector(`.l-control`)

function playSound(){
  new Audio(`./source/sunet.mp3`).play()
}

 for(let i=0; i<document.querySelectorAll(`.wa`).length;i++){
    document.querySelectorAll(`.wa`)[i].addEventListener('mouseover',()=>{
    new Audio(`./source/hover.wav`).play()
})
 }

 for(let i=0; i<document.querySelectorAll(`.wa`).length;i++){
    document.querySelectorAll(`.wa`)[i].addEventListener('click',()=>{
    playSound()
})
 }
// document.querySelector('.wa').addEventListener('mouseover',()=>{
//     new Audio(`./source/hover.wav`).play() 
// })
document.addEventListener('keydown', (event) => {
    if (event.key === 'w' ||event.key === 'a' || event.key === 's'
       ||  event.key === 'd' || event.key === 'j'
       || event.key === 'k' || event.key === 'l'
     ) { // Verificăm dacă tasta apăsată este 'a'
       playSound()
    }
});
// window.addEventListener('load', () => {
//     console.log('Toate resursele paginii, inclusiv imaginile, au fost încărcate.');
//     new Audio(`./source/altsunet.wav`).play()
// });
const rosu = document.querySelector(`.rosuu`)
const galben = document.querySelector(`.galbenn`)
const verde = document.querySelector(`.verdee`)
const portocaliu = document.querySelector(`.portocaliuu`)
let nr=0
const element = document.querySelector('.element');
let position = 0;
let direction = 2
function animate() {
  position += direction;  // Modifici poziția în funcție de direcție
  rosu.style.transform = `translateX(${position}px)`;  // Aplici noua poziție
  galben.style.transform = `translateY(${position}px)`;
  verde.style.transform = `translateY(${-position}px)`;
  portocaliu.style.transform = `translateX(${-position}px)`;
  if (position >= 200 || position <= 0) {  // Dacă ajunge la 200px sau 0px
      direction = -direction;  // Inversează direcția
  }

  requestAnimationFrame(animate);  // Continuă animația
}

requestAnimationFrame(animate);  // Inițializezi animația
