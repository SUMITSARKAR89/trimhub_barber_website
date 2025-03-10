const faqContent = document.querySelectorAll('.faq-content');

faqContent.forEach( faqs => {
    faqs.addEventListener("click", () => {
        faqs.classList.toggle("active");
    })
});


// ===========================slider image================================
const diffContent = document.querySelectorAll('.diff-content');

diffContent.forEach( faqs => {
    faqs.addEventListener("click", () => {
        faqs.classList.toggle("active");
    })
});







//btn variable
const nextBtn = document.querySelector("#next");
const prevBtn = document.querySelector("#prev");
const slideImage = document.querySelectorAll(".bg-slider-img"); //image variable
const dot = document.querySelectorAll(".dot")// dot variable
const slider = document.querySelector(".slider-container")// slider container


let counter = 0;
let length = slideImage.length;
//1 .next btn
nextBtn.addEventListener('click', nextSlider);
function nextSlider(){
    slideImage[counter].style.animation = "next1 0.5s ease-in forwards "
    // if(counter >= length-1){
    //     counter = 0;
    // }else{
    //     counter++
    // }
    counter >= length-1 ? counter = 0 :counter++;
    slideImage[counter].style.animation = "next2 0.5s ease-in forwards ";
    dotIndecator(); //this is for count dots
}
//2 .prev btn
prevBtn.addEventListener('click', prevSlider);
function prevSlider(){
    slideImage[counter].style.animation = "prev1 0.5s ease-in forwards"
    counter == 0 ? counter = length-1 : counter--;
    slideImage[counter].style.animation = "prev2 0.5s ease-in forwards";
    dotIndecator();//this is for count dots
}

//3. auto run

function autoRun(){
    defaultInterval = setInterval(timer, 3000);
    function timer(){
        nextSlider();
        dotIndecator();//this is for count dots
    }
};
autoRun();

//5. resume auto slider
slider.addEventListener('mouseout', autoRun);


//4. stop when mouseover
slider.addEventListener('mouseover', function(){
    clearInterval(defaultInterval)
});

//6. add indecator for count dots
function dotIndecator(){
    for( i = 0; i< dot.length; i++){
        dot[i].className = dot[i].className.replace('active', '')
    }
    dot[counter].className += ' active';
};

//add click to change image
function changeImage(a){
    a.classList.add('active'); //select classlist
    let imageId = a.getAttribute('attr');

    if(imageId > counter){
        slideImage[counter].style.animation = "next1 0.5s ease-in forwards ";
         counter = imageId;
        slideImage[counter].style.animation = "next2 0.5s ease-in forwards ";
    }
    else if(imageId == counter){
        return;
    }else{
        slideImage[counter].style.animation = "prev1 0.5s ease-in forwards ";
         counter = imageId;
        slideImage[counter].style.animation = "prev2 0.5s ease-in forwards ";
    }
    dotIndecator();//this is for count dots
}


