//Double check that the script is linked properly
console.log("Hello World!");

//JavaScript Code for slideshow
let slideIndex = 1;
showSlide(slideIndex);

function changeSlide(n) {
    showSlide(slideIndex += n);
}

function showSlide(n) {
    const slides = document.querySelectorAll('.slide');
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }
    slides.forEach(slide => slide.classList.remove('active'));
    const activeSlide = slides[slideIndex - 1];
    activeSlide.classList.add('active');
    activeSlide.classList.remove('fade');
    void activeSlide.offsetWidth; // Trigger reflow
}