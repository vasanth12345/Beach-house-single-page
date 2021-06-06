function nitbtn() {
const dnbtn = document.querySelector('.dnbtn i');
const day = document.querySelector('.day');
const nit = document.querySelector('.nit');
const root = document.querySelector(':root');

dnbtn.classList.remove('fa-sun');
dnbtn.classList.add('fa-moon');

root.style.setProperty('--black', '#ffffff');
root.style.setProperty('--white', '#000000');

nit.style.display = "none";
day.style.display = "block";

}

function daybtn() {
const dnbtn = document.querySelector('.dnbtn i');
const nit = document.querySelector('.nit');
const day = document.querySelector('.day');
const root = document.querySelector(':root');

dnbtn.classList.remove('fa-moon');
dnbtn.classList.add('fa-sun');

root.style.setProperty('--black', '#000000');
root.style.setProperty('--white', '#ffffff');

day.style.display = "none";
nit.style.display = "block";

}


const bar = document.querySelector('.bar');
const nava = document.querySelectorAll('.navbar a');
const nav = document.querySelector('.navbar');
const baricon = document.querySelector('.bar i');

bar.addEventListener('click', ()=>{
 
baricon.classList.toggle('fa-bars');
baricon.classList.toggle('fa-times');
  
nav.classList.toggle('navopen');
 
nava.forEach(atag =>{
  atag.classList.toggle('opacity');
});
  
});


/// owl



const nexti = '<i class="fas fa-arrow-right"></i>';
const previ = '<i class="fas fa-arrow-left"></i>';

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    center:true,
    dots:true,
    nav:true,
    navText:[
      previ,
      nexti
      ],
    autoplay: true,
    autoplayTimeout:3000,
    dotsSpeed:1500,
    responsive:{
        360:{
            items:1
        },
        500:{
            items:3
        },
        720:{
            items:4
        },
        1000:{
            items:4
        }
    }
});


function nfhover(){
const img = document.querySelector('.nfimghover');
//img.style.transition = "0.5s";

const imgarray = ["../loot/boat.jpg", "../loot/nf-hover.jpg", "../loot/travel.jpg"];
const randimg = Math.floor(Math.random() * 3);

img.src = imgarray[randimg];

}
setInterval(nfhover, 3000);

