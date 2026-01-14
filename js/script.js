const images = ["images/image-1.png", "images/image-2.png", "images/image-3.png"];
let index = 0;

const imgElement = document.getElementById('mainImage');

document.getElementById('nextBtn').addEventListener('click', () => {
    index++;
    if (index >= images.length) index = 0; // Loop back to start
    imgElement.src = images[index];
});

document.getElementById('prevBtn').addEventListener('click', () => {
    index--;
    if (index < 0) index = images.length - 1; // Loop to end
    imgElement.src = images[index];
});