var panels = document.querySelectorAll('.panel');
for(let i in panels) {
    panels[i].addEventListener('click',() => {
        panels[i].classList.add('active')
    })
}