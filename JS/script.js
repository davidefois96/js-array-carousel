
const imgWrapper = document.querySelector('.imgWrapper');
const up= document.querySelector('.up');
const down= document.querySelector('.down');



let contImg= 0;



const images = [
  '../assets/img/01.webp',
  '../assets/img/02.webp',
  '../assets/img/03.webp',
  '../assets/img/04.webp',
  '../assets/img/05.webp',
]

const newCont = images.length;

console.log(newCont);


for (let i = 0; i < images.length; i++) {
   
  
 
  imgWrapper.innerHTML += ` <img class="d-none img" src=" ${images[i]}"> `;


  
}

const imgCollection= document.getElementsByClassName('img');

imgCollection[contImg].classList.remove('d-none');


up.addEventListener('click', function() {

  down.classList.remove('d-none');

  imgCollection[contImg].classList.add('d-none');

  

  
 

  if(contImg===0){
     
    contImg = images.length-1 ;
   
    
  } else {

    contImg--;


  }

  imgCollection[contImg].classList.remove('d-none');
  



})
down.addEventListener('click', function() {

  up.classList.remove('d-none');

  imgCollection[contImg].classList.add('d-none');

  

  
  
  if(contImg===images.length-1){
    
    contImg=0;


    
  } else {

    contImg++;



  }
  imgCollection[contImg].classList.remove('d-none');



})