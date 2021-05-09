let themeDot = document.getElementsByClassName('theme_dot')

let theme = localStorage.getItem('theme')

if(theme == null){
    themeSet('light')
}
else{
    themeSet(theme)
}








for(var i = 0; i< themeDot.length ; i++){
    themeDot[i].addEventListener('click', function (){
        let mode = this.dataset.mode
       themeSet(mode)
    })
}

function themeSet(mode){
    if(mode == 'light'){
        document.getElementById('theme_style').href = 'style.css'
    }
    if(mode == 'blue'){
        document.getElementById('theme_style').href = 'blue.css'
    }
    if(mode == 'green'){
        document.getElementById('theme_style').href = 'green.css'
    }
    if(mode == 'purple'){
        document.getElementById('theme_style').href = 'purple.css'
    }

    localStorage.setItem('theme' , mode)
}