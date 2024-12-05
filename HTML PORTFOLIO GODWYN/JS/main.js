/*=================================== toggle icon navbar ======================= */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active')
}

/*=================================== Scroll Section Active link ======================= */
let Sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    Sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navlinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    /*=================================== sticky nav bar ======================= */
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /*=================================== remove toggle icon and navbar ======================= */
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};


/*=================================== Scroll reveal ======================= */
ScrollReveal({
    distance:'80px',
    duration: 2000,
    delay: 200,
 });

 ScrollReveal().reveal('.home-content,heading', { origin:'top' });
 ScrollReveal().reveal('.home-img, .services-container, .portlfolio-box, .contact-form', { origin:'bottom' });
 ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
 ScrollReveal().reveal('.home-contact p, about-content', { origin:'right' });

/*=================================== TYPE JS ======================= */
const typed = new Typed('.multiple-text',{
    strings: ['Computer Engineer','Photographer','Computer Technician'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});