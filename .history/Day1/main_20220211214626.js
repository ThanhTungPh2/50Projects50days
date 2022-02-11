var panels = document.querySelectorAll('.panel');
console.log(panels);
for(let panel of panels) {
    panel.addEventListener('click',() => {
        for(let child of panels){
            child.classList.remove('active')
        }
        panel.classList.add('active');
    })
}