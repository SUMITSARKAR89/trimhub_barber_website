

// ===========================slider image indexHTML============================
const faqContent = document.querySelectorAll('.faq-content');

faqContent.forEach( faqs => {
    faqs.addEventListener("click", () => {
        faqs.classList.toggle("active");
    })
});

// ===========================package price serviceHTML================================
const packagePrice = document.querySelectorAll('.package-price');

packagePrice.forEach( faqs => {
    faqs.addEventListener("click", () => {
        faqs.classList.toggle("active");
    })
});




// ===========================slider image indexHTML============================
const diffContent = document.querySelectorAll('.diff-content');

diffContent.forEach( faqs => {
    faqs.addEventListener("click", () => {
        faqs.classList.toggle("active");
    })
});

// ===========================menubar responsive================================
const navigationLink = document.querySelector(".navigation-link");
const closeMenu = document.querySelector("#menu .close-menu");
const openMenu = document.querySelector("#menu .open-menu");

openMenu.addEventListener("click", () => {
    navigationLink.style.top = "0";
    navigationLink.style.opacity = "1";
    openMenu.style.display = "none";
    closeMenu.style.display = "block";
});

closeMenu.addEventListener("click", () => {
    navigationLink.style.top = "-800%";
    navigationLink.style.opacity = "0";
    openMenu.style.display = "block";
    closeMenu.style.display = "none";

});

// // ===========================active nav link================================
// const navListBtn = document.querySelectorAll(".nav-link-res");

// navListBtn.forEach((btn ) => {
//     btn.addEventListener('click', () => {
//         navListBtn.forEach( btn => {
//             btn.classList.remove('active-res');
//         })
//         btn.classList.add('active-res');
//     });
// });

// ===========================tab menu bar================================
window.onscroll = function(){
    scrollbarNavigation();
};
function scrollbarNavigation(){
    const header = document.querySelector("header");

    if(document.body.scrollTop > 50 || document.documentElement.scrollTop >50){
        header.style.top = "0px";
    }else{
        header.style.top = "-500px"
    }
};

// window.addEventListener("scroll", () => {
//     let serviceBtn = document.querySelector("servicebtn-group");
//     serviceBtn.classList.toggle("sticky", window.scrollY > 0)
//     console.log(serviceBtn)
// })





// ===========================bg slider iamge carousel================================
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




// ===========================top scroll bar============================
const topScroll = document.querySelector('.tab-to-up');

window.addEventListener('scroll', () => {
    if(window.pageYOffset > 600){
        topScroll.classList.add("active")
    }else{
        topScroll.classList.remove("active")
    }
});


//==========================scroll reveal=============================
ScrollReveal({ 
     reset: true,
    distance: "60px",
    duration: 2500,
    delay:400 
});
ScrollReveal().reveal('nav, .board-title', { delay: 100, origin: 'top', interval: 200 });
ScrollReveal().reveal('.logo', { delay: 200, origin: 'bottom' });
ScrollReveal().reveal('.hero-content h1, .applyBtn, .different-card, .diff-content', { delay: 200, origin: 'bottom' });
ScrollReveal().reveal('.hero-content p', { delay: 200, origin: 'top' });
ScrollReveal().reveal('.sroll-card, .number-txt, .bg-slider-img, .contact-contects, .footer-social ', { delay: 200, origin: 'bottom' });

ScrollReveal().reveal('.hero-contact-card, .specialities-img, .board-card, .expert-card, .article-card-content', { delay: 100, origin: 'bottom', interval: 200 });

ScrollReveal().reveal('.specialities-card, .special-card, .price-card, .contact-form, .footer-intro', { delay: 200, origin: 'left', interval: 100 });
ScrollReveal().reveal('.sc-2, .differ-foot, .footer-links', { delay: 200, origin: 'right', interval: 100 });



