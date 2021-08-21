window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0);
});

// Responsive navbar
function toggleMenu() {
    const menuToggle = document.querySelector('.menuToggle');
    const navigation = document.querySelector('.navigation');
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}

// Life at BookMania 
// Slideshow Gallery
function change(img_id) {
    document.getElementById("img1").src = img_id;
}

//nav
function openMenu() {
    var navMain = document.getElementById('navMenuId');
    if (navMain.className === 'navMenu') {
        navMain.className += ' mobileView';
    } else {
        navMain.className = 'navMenu';
    }
}

//form
const scriptURL = 'https://script.google.com/macros/s/AKfycbwh2o5mrqwwQDw43fVLt0EIZ4IGd0mvpQnrz3dPp2TDI1XtH_orVasWwwrw0IVST_p3/exec'
const form = document.forms['Submit-google-sheet']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, {
            method: 'POST',
            body: new FormData(form)
        })
        .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
        .catch(error => console.error('Error!', error.message))
});