function addActiveClass(event) {
    event.preventDefault();
    var activeLink = document.querySelector('.' + this.className + '.active');
    activeLink.classList.remove('active');
    this.classList.add('active');
}

function onSubmitNewsletter(event) {
    event.preventDefault();
    var newsletterInput = document.querySelector('.form-control');
    var newsletterValue = newsletterInput.value.indexOf("@")
    if (newsletterValue == -1) {
        alert("not a valid email, please, enter a valid email like example@example.com");
    } else {
        alert('El correo que ingresaste es: ' + newsletterInput.value);
    }
}

var navLinks = document.querySelectorAll('.nav-item .nav-link');
for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', addActiveClass);
}

var services = document.querySelectorAll('.services-2');
for (var i = 0; i < services.length; i++) {
    services[i].addEventListener('click', addActiveClass);
}

var newsletterForm = document.querySelector('.subscribe-form');
newsletterForm.addEventListener('submit', onSubmitNewsletter);