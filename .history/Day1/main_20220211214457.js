var panels = document.querySelectorAll('.panel');
console.log(panels);
for(let panel of panels) {
    panel.addEventListener('click',() => {
        panel.classList.add('active');
    })
}