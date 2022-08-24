const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav-ul-ul');
const titlesDiv = document.querySelector('.titles');
let menuOpen = false;


menuBtn.addEventListener('click', () => {
    if(!menuOpen){
        menuBtn.classList.add('open');
        menuOpen = true;
        titlesDiv.classList.add('titlesOff');
        if(nav.classList.contains('liActive')){
            nav.classList.remove('liActive');
        }else {
            nav.classList.add('liActive');
        }
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
        titlesDiv.classList.remove('titlesOff');
        if(nav.classList.contains('liActive')){
            nav.classList.remove('liActive');
        }else {
            nav.classList.add('liActive');
        }
    }
})