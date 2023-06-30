// make and get needed variable
let  slideimage=Array.from(document.querySelectorAll('.slid-con img'));

let  currentslide=1;

let  slidenum=document.getElementById('slid-num')


let  inde=document.getElementById('indicator');

let  uli=document.createElement('ul');

//create bullites

uli.setAttribute('id','pagination-ul')

for(i=1;i<=slideimage.length;i++){
   let  li= document.createElement('li');
   li.setAttribute('date-index',i)
   let  tex=document.createTextNode(i);
   li.append(tex)
   uli.append(li)

}
inde.append(uli)

let  ulp=document.getElementById('pagination-ul');
let  ul=Array.from(document.querySelectorAll('#pagination-ul li'));



let  nextbutton=document.getElementById('next');
let  prevbutton=document.querySelector('#prev');
nextbutton.onclick= nexton;
prevbutton.onclick= prevon;

// create the function that bulit the slider
function cheker(){
    // set number of slide
    slidenum.textContent= 'slide # ' + (currentslide) +' of ' + (slideimage.length)
    // remove all active classe
    removeallActiv()
// set active class to target slide
    slideimage[currentslide -1 ].classList.add('active');

     ulp.children[currentslide-1].classList.add('active');
//check if the slide is the first
     if(currentslide == 1){
        prevbutton.classList.add('disabled')
     }else{
        prevbutton.classList.remove('disabled')
     }
     // check the slide is the last
     if(currentslide == slideimage.length){
        nextbutton.classList.add('disabled')
     }else{
        nextbutton.classList.remove('disabled')
     }
     
}

// create function that remove active class
 function removeallActiv(){
slideimage.forEach(function(img){
img.classList.remove('active')
})
ul.forEach((li)=>{
    li.classList.remove('active')
})
}

// trigger function 

cheker()

//use the bullits to transition between slides

for(let  i=0;i<ul.length;i++){
    ul[i].getAttribute('data-index')
    ul[i].onclick=function(){
     currentslide=parseInt(this.getAttribute('date-index'))
     cheker()
    }
 }
 // use the button to transition between slides
 function nexton(){
    if(nextbutton.classList.contains('disabled')){
        return false;
    }else{
        currentslide++
        cheker()
    }
}
function prevon(){
if(prevbutton.classList.contains('disabled')){

}else{
    currentslide--
    cheker()
}

}