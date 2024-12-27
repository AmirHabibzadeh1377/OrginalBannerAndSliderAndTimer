let specialCurrentIndex = 0;
const slider = document.querySelector('.special-offer-items');
const prevButton = document.querySelector('.start-special-offer');
const nextButton = document.querySelector('.end-special-offer');

const itemsToShow = 5; // Number of items visible at a time
const totalItems = slider.querySelectorAll('.product-box').length;
const slideWidth = 100 / itemsToShow; // Width of each item in percentage

// Set the initial width for each product box
document.querySelectorAll('.product-box').forEach(item => {
    item.style.flex = `0 0 ${slideWidth}%`;
});

// Move to the next slide
nextButton.addEventListener('click', () => {
    if (specialCurrentIndex < totalItems - itemsToShow) {
        console.log(specialCurrentIndex)
        specialCurrentIndex++;
        updateSliderPosition();
    }
});

// Move to the previous slide
prevButton.addEventListener('click', () => {
    if (specialCurrentIndex > 0) {
        specialCurrentIndex--;
        updateSliderPosition();
    }
});

// Update the slider's position
function updateSliderPosition() {
    const offset = +(specialCurrentIndex * slideWidth);
    console.log(offset)
    slider.style.transform = `translateX(${offset}%)`;
}

// setInterval(() => {
//     if (specialCurrentIndex < totalItems - itemsToShow) {
//         console.log(specialCurrentIndex)
//         specialCurrentIndex++;
//         updateSliderPosition();
//     }
//     else {
//         specialCurrentIndex = -1;
//     }
// }, 2000);