const background = document.querySelector('.background');
const loading = document.querySelector('.loading');
var load  = 0;
var myInterval = setInterval(blurring,30);
function blurring() {
    load++;
    if(load > 99) {
        clearInterval(myInterval);
    }
    loading.innerText = `${load}%`;
    loading.style.opacity = scale(load, 0, 100, 1, 0)
    background.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}
c  
// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
