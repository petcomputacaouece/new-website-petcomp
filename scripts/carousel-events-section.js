let slideIndex = 0;
let slides = document.getElementsByClassName("slide");
let dots = document.getElementsByClassName("dot");
let slideInterval;

function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (let j = 0; j < dots.length; j++) {
        dots[j].className = dots[j].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "flex";
    dots[slideIndex - 1].className += " active";
    slideInterval = setTimeout(showSlides, 3500); 
}

function currentSlide(n) {
    clearTimeout(slideInterval); 
    slideIndex = n;
    showSlides();
}

function pauseSlides() {
    clearTimeout(slideInterval);
}

function resumeSlides() {
    slideInterval = setTimeout(showSlides, 3500);
}

let carousel = document.querySelector('.carousel');
carousel.addEventListener('mouseover', pauseSlides);
carousel.addEventListener('mouseout', resumeSlides);

showSlides();