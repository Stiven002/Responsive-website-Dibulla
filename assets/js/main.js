// show menu
const showMenu = (toggleId,navId)=>{
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);
    const item = document.getElementById('dropdown-item');
    const item1 = document.getElementById('dropdown-item-1');
    const icon = document.getElementById('icon');
    const icon1 = document.getElementById('icon1');

    if(toggle && nav){
        toggle.addEventListener('click', () =>{
            nav.classList.toggle('show')
            toggle.classList.toggle('ri-close-line')
            item.classList.remove('show-dropdown')
            item1.classList.remove('show-dropdown')
            icon.classList.remove('icon__rotate')
            icon1.classList.remove('icon__rotate')
            icon2.classList.remove('icon__rotate')
            lenguageActive.classList.remove('show-dropdown');
        })
    }
}

showMenu('header-toggle','nav-menu');

// active and remove menu
const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
    navLink.forEach(n => n.classList.remove('active'));
    this.classList.add('active');
}

navLink.forEach(n => n.addEventListener('click', linkAction));

// show dropdown
const showDrop = (DropId,ItemId)=>{
    const drop = document.getElementById(DropId);
    const item = document.getElementById(ItemId);


    if(drop && item){
        drop.addEventListener('click', () =>{
            item.classList.toggle('show-dropdown');
        })
    }
}

showDrop('dropdown-active','dropdown-item');
showDrop('dropdown-active-1','dropdown-item-1');

const rotateIcon = (btnId,iconId)=>{
    const rotate = document.getElementById(btnId);
    const icon = document.getElementById(iconId);

    if(rotate && icon){
        rotate.addEventListener('click', ()=>{
            icon.classList.toggle('icon__rotate')
        })
    }
}

rotateIcon('dropdown-active','icon');
rotateIcon('dropdown-active-1','icon1');

// change backgroud header
function scrollHeader(){
    const header = document.getElementById('header'),
        logo = document.getElementById('logo'),
        logo1 = document.getElementById('logo1'),
        navColor = document.querySelectorAll('.nav__link');
    if(this.scrollY >= 20){
        header.classList.add('scroll-header');
        logo.classList.add('logo-color');
        logo1.classList.add('logo-color');
        for (let index = 0; index < navColor.length; index++) {
            navColor[index].classList.add('color');
        }
    }
    else{
        header.classList.remove('scroll-header');
        logo.classList.remove('logo-color');
        logo1.classList.remove('logo-color');
        for (let index = 0; index < navColor.length; index++) {
            navColor[index].classList.remove('color');
        }
    }
}

// scroll header

window.addEventListener('scroll', scrollHeader);

const lenguage = document.getElementById('lenguage'),
        lenguageActive = document.getElementById('lenguage-active'),
        icon2 = document.getElementById('icon2');

lenguage.addEventListener('click', ()=>{
    lenguageActive.classList.toggle('show-dropdown')
    icon2.classList.toggle('icon__rotate')
})

// swiper discover
let swiper = new Swiper(".discover__container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 32,
    coverflowEffect: {
        rotate: 0,
    },
})

// show scroll up
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp);

// dark light theme 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'
const changeText = document.getElementById('change-text');

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

// scroll reverse animation
const sr = ScrollReveal({
    distance: '60px',
    duration: 2400,
});

sr.reveal(`.home__data, .home__social-link, .home__info, .discover__container,
            .footer__data, .footer__rights`,{
    origin: 'top',
    interval: 100,
});

sr.reveal(`.about__data`,{
    origin: 'left',
});

sr.reveal(`.about__img-overlay`,{
    origin: 'right',
    interval: 100,
});