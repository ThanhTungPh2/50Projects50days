var panels = document.getElementsByClassName ("panel");
for (let panel of panels) {
    panel.addEventListener('click', () => {
        for(let child of panels) {
            child.classList.remove ("active");
        }
        panel.classList.add ("active"); 
    })
}