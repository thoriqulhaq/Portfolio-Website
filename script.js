console.log("It's Work !!!")

let theme = localStorage.getItem('theme')

if (theme == null) {
    setMode ('Light')
}else{
    setMode(theme)
}

let themeDots = document.getElementsByClassName('theme-dot')

for (var i=0; themeDots.length > i; i++) {
    themeDots[i].addEventListener('click', function(){
        let mode = this.dataset.mode
        console.log('Option Click:', mode)
        setMode(mode)
    })
}

function setMode(mode) {
    if(mode == 'Light') {
        document.getElementById('color-mode').href = 'default-style.css'
    }
    if(mode == 'Dark') {
        document.getElementById('color-mode').href = 'dark-mode-style.css'
    }

    localStorage.setItem('theme', mode)
}