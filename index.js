const menuBtn = document.querySelector('.menu-btn');
const liArr = document.querySelectorAll('.nav-li');
let menuOpen = false;

// menuBtn.addEventListener('click', (e) => {
//     liArr.forEach(li => {
//         if(li.classList.contains('liActive')){
//             li.classList.remove('liActive');
//         }else {
//             li.classList.add('liActive');
//         }
//     })
// });

menuBtn.addEventListener('click', () => {
    if(!menuOpen){
        menuBtn.classList.add('open');
        menuOpen = true;
        liArr.forEach(li => {
            if(li.classList.contains('liActive')){
                li.classList.remove('liActive');
            }else {
                li.classList.add('liActive');
            }
        })
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
        liArr.forEach(li => {
            if(li.classList.contains('liActive')){
                li.classList.remove('liActive');
            }else {
                li.classList.add('liActive');
            }
        })
    }
})