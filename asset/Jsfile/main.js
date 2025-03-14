

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
    // reset: true,
    distance: "60px",
    duration: 2500,
    delay:400 
});

// ScrollReveal().reveal('.avatar-img', { delay: 100, origin: 'top' });
// ScrollReveal().reveal('.text-info', { delay: 300, origin: 'bottom' });
// ScrollReveal().reveal('.social-home', { delay: 600, origin: 'left' });
// ScrollReveal().reveal('.scroll-bar', { delay: 700, origin: 'bottom' });
// ScrollReveal().reveal('.about-image, .contact-info', { delay: 800, origin: 'left' });
// ScrollReveal().reveal('.about-body, .contact-form', { delay: 900, origin: 'right' });
// ScrollReveal().reveal('.about-card-container', { delay: 400, origin: 'bottom' });
// ScrollReveal().reveal('.about-content, .contact-card', { delay: 300, origin: 'bottom' });
// ScrollReveal().reveal('.about-card', { delay: 500, origin: 'right', interval: 200 });
// ScrollReveal().reveal('.btn-group .hire-btn, .btn-group .head-btn', { delay: 800, origin: 'right', interval: 200 });
// ScrollReveal().reveal('.portfolio-btns, .footer-links', { delay: 400, origin: 'top', interval: 200 });
// ScrollReveal().reveal('.resume-btn .tab-btn', { delay: 300, origin: 'right', interval: 200 });
// ScrollReveal().reveal('.port-with-modal, .contact-social-link', { delay: 300, origin: 'right', interval: 200 });

ScrollReveal().reveal('.resume-content', { delay: 300, origin: 'bottom' });
ScrollReveal().reveal('.service-text, .testimonial-text, .contact-text, .resume-text', { delay: 300, origin: 'bottom' });

