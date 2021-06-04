function displayTime() {
    alert(Date());
}

function addActiveClass(event) {
    event.preventDefault();
    var activeLink = document.querySelector('.nav-item .nav-link.active');
    activeLink.classList.remove('active');
    this.classList.add('active');
}

var navLinks = document.querySelectorAll('.nav-item .nav-link');
for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', addActiveClass)
}