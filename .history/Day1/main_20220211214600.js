var panels = document.querySelectorAll('.panel');
console.log(panels);
for(let panel of panels) {
    panel.addEventListener('click',() => {
        for(let child of panel){
            child.classList.remove('active')
        }
        panel.classList.add('active');
    })
}