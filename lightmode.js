/*só muda a cor*/

let lightmode = localStorage.getItem('lightmode');

const themeSwitch=document.getElementById('theme-switch');

const enableLightmode = () => {
    document.body.classList.add('lightmode')
    localStorage.setItem('lightmode','active')
}

if(lightmode === "active")enableLightmode()

const disableLightmode = () => {
    document.body.classList.remove('lightmode')
    localStorage.setItem('lightmode',null)
}

themeSwitch.addEventListener("click",()=> {
    lightmode=localStorage.getItem('lightmode')
    lightmode !== "active" ? enableLightmode() : disableLightmode()
})

/*------vai limitar o tipo de caractere que aparece------*/
const nomeInput = document.querySelector("#nome");

nomeInput.addEventListener("keypress", function(e){

    checkChar(e);

    if(!checkChar(e)){
        e.preventDefault();
    }

})

function checkChar(e) {
    const char = String.fromCharCode(e.keyCode);


    //console.log(e.keyCode); serve para conferir no console o que foi digitado
    //console.log(char);

    const pattern = '[a-zA-Z- ]';

    if(char.match(pattern)){
        console.log(char);
        return true;
    }
}

const numeroInput = document.querySelector("#numero");

numeroInput.addEventListener("keypress", function(e){
    checkChar2(e);

    if(!checkChar2(e)){
        e.preventDefault();
    }
})
function checkChar2(e) {
    const char = String.fromCharCode(e.keyCode);


    //console.log(e.keyCode); serve para conferir no console o que foi digitado
    //console.log(char);

    const pattern = '[0-9-]';

    if(char.match(pattern)){
        console.log(char);
        return true;
    }
}
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelector('section');
let navLinks = document.querySelector('header nav a')

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if(top >= offset && top < offset + height){
            navLinks.forEac(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [href*=' + id + ' ]').classList.add ('active');
            })
        }
    })
}
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active')
}