var panels = document.querySelectorAll('.panel');
for(let panel of panels) {
    panel.addEventListener('click',() => {
        panels[i].classList.add('active');
    })
}