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

//JavaScript for API on map information 
//Sending API requests using async/await
async function InteractiveMap() {
    //School's location coordinates
    const location = {lat: 39.732189, lng: -90.2495076};

    //Creating a map object and specifying the DOM element for display
    const map = new google.maps.Map(document.getElementById("map-container"), {
        //Default amount of area shown on the map
        zoom: 15,
        //School's location is the center of the map
        center: location, 
    });

    //Pinning the school's location on the map
    new google.maps.Marker({
    position: location,
    map: map
    });
}

//Event listener for button click to fetch map
document.getElementById("fetch-map-btn").addEventListener("click", () => {
    InteractiveMap();
});