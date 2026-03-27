const images = [
    "assets/slideshow/hero-section/dokita 1.jpg",
    "assets/slideshow/hero-section/dokita 2.jpg",
    "assets/slideshow/hero-section/dokita 3.jpg"
];

let index = 0;
const slide_image = document.querySelector('.slide-image');

// Load first image with fade
slide_image.src = images[index];
slide_image.classList.add("fade-in");

setInterval(() => {
    slide_image.classList.remove("fade-in");  

    setTimeout(() => {
        index = (index + 1) % images.length;
        slide_image.src = images[index];
        slide_image.classList.add("fade-in");  
    }, 200); // slight delay makes the fade smooth
}, 3000);