let mainNav = document.getElementById("js-menu");
let navBarToggle = document.getElementById('js-navbar-toggle');

navBarToggle.addEventListener('click', function() {
    console.log("button clicked");
    mainNav.classList.toggle('active');
})

const header = document.querySelector("#menu-component");

const sectionOne = document.querySelector("#about");

const sectionOneOptions = {
    rootMargin: "-75px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            header.classList.add('background-dark');
        } else {
            header.classList.remove('background-dark');
        }
    })
}, sectionOneOptions);

sectionOneObserver.observe(sectionOne);