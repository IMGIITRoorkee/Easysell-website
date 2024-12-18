var i = 0;

function show_hide() {
    if (i == 1) {
        document.querySelector('.main-nav').style.display = "flex";
        return i = 0;
    } else {
        document.querySelector('.main-nav').style.display = "none";
        return i = 1;
    }
}

const slider = document.getElementById('rectangle9');
const progress = document.getElementById('rectangle10');
const testimonials = document.querySelector('.container12');
const totalTestimonials = 8;
const visibleTestimonials = 4;

let isDragging = false;

const handleMouseMove = (event) => {
    if (!isDragging) {
        return;
    }
    const sliderRect = slider.getBoundingClientRect();
    const sliderWidth = sliderRect.width;


    let cursorX = event.clientX - sliderRect.left;
    cursorX = Math.max(0, Math.min(cursorX, sliderWidth)) - progress.getBoundingClientRect().width;
    let progressPercentage = (cursorX / sliderWidth) * 100;
    if (progressPercentage < 0){
        progressPercentage = 0;
    }
    progress.style.left = `${progressPercentage}%`;
    


    let translateX = -((progressPercentage / 100) * 100) *(5/7) ;
    if (translateX > 0){
        translateX = 0;
    }
    testimonials.style.transform = `translateX(${translateX}%)`;
};

slider.addEventListener('mousedown', (event) => {
    isDragging = true;
    handleMouseMove(event); // Ensure the first click updates the position
});

document.addEventListener('mousemove', (event) => {
    if (!isDragging) return;
    handleMouseMove(event);
});

document.addEventListener('mouseup', () => {
    isDragging = false;
});

