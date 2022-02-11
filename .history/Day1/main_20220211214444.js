var panels = document.querySelectorAll('.panel');
for(let panel of panels) {
    panel.addEventListener('click',() => {
        panel.classList.add('active');
    })
}