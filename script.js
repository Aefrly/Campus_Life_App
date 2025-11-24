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

async function initMap() {
    //  Request the needed libraries.
    const [{ Map }, { AdvancedMarkerElement }] = await Promise.all([
        google.maps.importLibrary("maps"),
        google.maps.importLibrary("marker"),
    ]);
    // Get the gmp-map element.
    const mapElement = document.querySelector("gmp-map");
    // Get the inner map.
    const innerMap = mapElement.innerMap;
    // Set map options.
    innerMap.setOptions({
        mapTypeControl: false,
    });
    // Add a marker positioned at the map center (Uluru).
    const marker = new AdvancedMarkerElement({
        map: innerMap,
        position: mapElement.center,
        title: "Illinois College",
    });
}
initMap();
