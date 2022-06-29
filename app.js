const hamburger = document.querySelector('.hambuga');
const mobileMenuLinks = document.querySelector('.navbar-mobile');


hamburger.addEventListener('click', () => {
    if (!hamburger.classList.contains('clicked')){
        hamburger.classList.add('hambuga-hover')
        setTimeout(() => {
            hamburger.classList.add('clicked')
        }, 500)
    }else {
        hamburger.classList.remove('clicked')
        setTimeout(() => {
            hamburger.classList.remove('hambuga-hover')
        }, 500)
    }
    mobileMenuLinks.classList.toggle('navbar-display')
} )