const images = document.querySelectorAll('.slider .gallery-container img');
let imgWidth = getComputedStyle(images[0]).width;
imgWidth = Number(imgWidth.slice(0, imgWidth.length - 2));
let translateQt = 0;

function goLeft(){
    if(translateQt < 0){
        translateQt += imgWidth
        for(let img of images){
            console.log(img)
            img.style.transform = `translateX(${translateQt}px)`
        }    
    }
}

function goRight(){
    if(translateQt > -imgWidth * (images.length - 1)){
        translateQt -= imgWidth
        for(let img of images){
            console.log(img)
            img.style.transform = `translateX(${translateQt}px)`
        }    
    }
}