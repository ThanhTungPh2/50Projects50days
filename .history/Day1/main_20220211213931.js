var panels = document.querySelectorAll('.panel');
for(let i in panels) {
    panels[i].addEventListener('click',() => {
        for(let j in panels){
            panels[j].classList.remove('active')
        }
        panels[i].classList.add('active')
    })
}