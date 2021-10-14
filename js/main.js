var images=Array.from(document.getElementsByClassName('img-item'));

var overlay=document.querySelector('.overlay');
var lightBox=document.querySelector('.lightbox');
var next=document.getElementById('next');
var prev=document.getElementById('prev');
var closee=document.getElementById('close')
var currentIndex=0;
var i;
//for loop for add event to each image and change background with that image
for ( i=0;i<images.length;i++){
    images[i].addEventListener('click',function(e){
        currentIndex= images.indexOf(e.target)
        console.log(currentIndex)
        imagesrc=e.target.getAttribute('src');
        overlay.classList.replace('d-none','d-flex');
        lightBox.style.backgroundImage=`url(${imagesrc})`
        
        
    })

}
////////////first sloution of slider left and right////////////////////
function slide(i){
    currentIndex=currentIndex+i
    if(currentIndex==images.length){
           currentIndex=0;
         }
    if(currentIndex == -1){
        currentIndex=images.length -1
    }
    imagesrc=images[currentIndex].getAttribute('src');
 lightBox.style.backgroundImage=`url(${imagesrc})`

}
next.addEventListener('click',function(){
    slide(1)
})
 prev.addEventListener('click',function(){
     slide(-1)
 })


//////////////////other option for slider left and right////////////
// //next-slide
// function nextslide(){
// currentIndex++
// if(currentIndex==images.length){
//     currentIndex=0;
// }
// imagesrc=images[currentIndex].getAttribute('src');
// lightBox.style.backgroundImage=`url(${imagesrc})`
// }
// //prev-slide
// function prevslide(){
//     currentIndex--;
//     if(currentIndex == -1){
//         currentIndex=images.length-1;
//     }
//     imagesrc=images[currentIndex].getAttribute('src');
//     lightBox.style.backgroundImage=`url(${imagesrc})`
//     }
// next.addEventListener('click',nextslide)
// prev.addEventListener('click',prevslide)

///close function
function closeslide(){
    overlay.classList.replace('d-flex','d-none');
}
closee.addEventListener('click',closeslide);


//keydowns actions
document.addEventListener('keydown',function(e){
    console.log(e)
  if(e.key =="ArrowRight"){
      slide(1);
  }
    
  if(e.key =="ArrowLeft"){
    slide(-1);
}
if(e.key=='Escape'){
    closeslide();
}


})