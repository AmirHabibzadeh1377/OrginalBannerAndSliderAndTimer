let currentIndex = 0;
const images = document.querySelectorAll('.slider-image img');
const totalImages = images.length;

function changeImage() {
    const currentImage = images[currentIndex];
    currentImage.classList.add('large');
    
    setTimeout(() => {
            currentImage.classList.remove('large');
            
            setTimeout(() => {
                currentImage.classList.add('exit');
                currentImage.classList.remove('large', 'exit');
                currentIndex = (currentIndex + 1) % totalImages; 
                const nextImage = images[currentIndex];
                const slider = document.querySelector('.slider');
                slider.style.transform = `translateX(+${currentIndex * 100}%)`;
        }, 2000); 
    }, 1000);
}

setInterval(changeImage, 4000); 
