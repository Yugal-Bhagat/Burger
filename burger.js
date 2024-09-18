let menu = document.querySelector('#menu-bar')
let cross = document.querySelector('#cross-bar')
let nav = document.querySelector('nav')
let Gotop = document.querySelector('.go-top')
let contain = document.querySelector('.container')
menu.addEventListener('click',()=>{
nav.className = "show"
e.stopPropagation()

})
nav.addEventListener('click',(e)=>{
e.stopPropagation()
})
cross.addEventListener('click',()=>{
    nav.className = "not-show"

})
Gotop.addEventListener('click',()=>{
    window.scrollTo(0,0)
})
window.addEventListener('click', (event) => {
    // Check if the click is outside the nav and menu
    if (!Gotop.contains(event.target) && !menu.contains(event.target) ) {
        if (nav.classList.contains('show')) {
            cross.click(); // Trigger cross click event to close the nav
        }
    }
});
