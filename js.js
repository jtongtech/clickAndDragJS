var slider = document.querySelector('.items');
var isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    scrollLeft = slider.scrollLeft;
    startX = e.pageX - slider.offsetLeft;
});
slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
});
slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
});
slider.addEventListener('mousemove', (e) => {
    // if (isDown) {
    //     console.log(isDown, 'Do Work');
    // }
    if (!isDown) return; // stops the function from running
    e.preventDefault();
    var x = e.pageX - slider.offsetLeft;
    var walk = (x - startX) * 6;
    slider.scrollLeft = scrollLeft - walk;
});