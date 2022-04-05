var main = document.querySelector('.main');
var input = document.querySelector('.search');
var btn = document.querySelector('.btn');
console.log(input);
btn.addEventListener('click', () => {
    main.classList.toggle('active');
})