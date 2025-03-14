

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
const closeMenu = document.querySelector(".close-menu");
const openMenu = document.querySelector(".open-menu");

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

// ==================haircutIdCarousel===============================
const hairCarouselImages = document.querySelector('.hair-carousel-images');
const hairImages = document.querySelectorAll('.hair-carousel-images img');
const hairprevBtn = document.querySelector('.hair-prev-btn');
const hairnextBtn = document.querySelector('.hair-next-btn');
const hairdots = document.querySelectorAll('.hair-dot');

let currentIndex = 0;

function showImage(index) {
hairImages.forEach((img, i) => {
img.classList.toggle('active', i === index);
});
hairdots.forEach((dot, i) => {
dot.classList.toggle('active', i === index);
});
}

function nextImage() {
currentIndex = (currentIndex + 1) % hairImages.length;
showImage(currentIndex);
}

function prevImage() {
currentIndex = (currentIndex - 1 + hairImages.length) % hairImages.length;
showImage(currentIndex);
}

hairdots.forEach((dot, index) => {
dot.addEventListener('click', () => {
currentIndex = index;
showImage(currentIndex);
});
});

hairprevBtn.addEventListener('click', prevImage);
hairnextBtn.addEventListener('click', nextImage);






// ==================beardIdCarousel===============================

const beardCarouselImages = document.querySelector('.beard-carousel-images');
const beardImages = document.querySelectorAll('.beard-carousel-images img');
const beardprevBtn = document.querySelector('.beard-prev-btn');
const beardnextBtn = document.querySelector('.beard-next-btn');
const bearddots = document.querySelectorAll('.beard-dot');

let currentIndex2 = 0;

function showImage2(index) {
beardImages.forEach((img, i) => {
img.classList.toggle('active-b', i === index);
});
bearddots.forEach((dot, i) => {
dot.classList.toggle('active-b', i === index);
});
}

function nextImage2() {
currentIndex2 = (currentIndex2 + 1) % beardImages.length;
showImage2(currentIndex2);
}

function prevImage2() {
currentIndex2 = (currentIndex2 - 1 + beardImages.length) % beardImages.length;
showImage2(currentIndex2);
}

bearddots.forEach((dot, index) => {
dot.addEventListener('click', () => {
currentIndex2 = index;
showImage2(currentIndex2);
});
});

beardprevBtn.addEventListener('click', prevImage2);
beardnextBtn.addEventListener('click', nextImage2);


// ==================grommingCarousel===============================

const grommingCarouselImages = document.querySelector('.gromming-carousel-images');
const grommingImages = document.querySelectorAll('.gromming-carousel-images img');
const grommingprevBtn = document.querySelector('.gromming-prev-btn');
const grommingnextBtn = document.querySelector('.gromming-next-btn');
const grommingdots = document.querySelectorAll('.gromming-dot');

let currentIndex3 = 0;

function showImage3(index) {
grommingImages.forEach((img, i) => {
img.classList.toggle('active-c', i === index);
});
grommingdots.forEach((dot, i) => {
dot.classList.toggle('active-c', i === index);
});
}

function nextImage3() {
currentIndex3 = (currentIndex3 + 1) % grommingImages.length;
showImage3(currentIndex3);
}

function prevImage3() {
currentIndex3 = (currentIndex3 - 1 + grommingImages.length) % grommingImages.length;
showImage3(currentIndex3);
}

grommingdots.forEach((dot, index) => {
dot.addEventListener('click', () => {
currentIndex3 = index;
showImage3(currentIndex3);
});
});

grommingprevBtn.addEventListener('click', prevImage3);
grommingnextBtn.addEventListener('click', nextImage3);


// ==================haircutIdCarousel===============================
const colortreatCarouselImages = document.querySelector('.colortreat-carousel-images');
const colortreatImages = document.querySelectorAll('.colortreat-carousel-images img');
const colortreatprevBtn = document.querySelector('.colortreat-prev-btn');
const colortreatnextBtn = document.querySelector('.colortreat-next-btn');
const colortreatdots = document.querySelectorAll('.colortreat-dot');

let currentIn = 0;

function showImage4(index) {
colortreatImages.forEach((img, i) => {
img.classList.toggle('active-d', i === index);
});
colortreatdots.forEach((dot, i) => {
dot.classList.toggle('active-d', i === index);
});
}

function nextImage4() {
currentIn = (currentIn + 1) % colortreatImages.length;
showImage4(currentIn);
}

function prevImage4() {
currentIn = (currentIn - 1 + colortreatImages.length) % colortreatImages.length;
showImage4(currentIn);
}

colortreatdots.forEach((dot, index) => {
dot.addEventListener('click', () => {
currentIn = index;
showImage4(currentIn);
});
});

colortreatprevBtn.addEventListener('click', prevImage4);
colortreatnextBtn.addEventListener('click', nextImage4);





