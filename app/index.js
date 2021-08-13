// let menu = document.getElementById("menu-component");
// let htmlFile = new XMLHttpRequest();
// htmlFile.open("GET", "/core/menu.html", false);
// htmlFile.onreadystatechange = function () {
//     if (htmlFile.readyState === 4) {
//         if (htmlFile.status === 200 || htmlFile.status == 0) {
//             var allText = htmlFile.responseText;
//             menu.innerHTML = allText;
//         }
//     }
// }
// htmlFile.send(null);

let mainNav = document.getElementById("js-menu");
let navBarToggle = document.getElementById('js-navbar-toggle');

navBarToggle.addEventListener('click', function() {
    mainNav.classList.toggle('active');
})

let mainNav = document.getElementById("js-menu");
let navBarToggle = document.getElementById('js-navbar-toggle');

navBarToggle.addEventListener('click', function() {
    mainNav.classList.toggle('active');
})

const header = document.querySelector("#menu-component");

const sectionOne = document.querySelector("#about");

const sectionOneOptions = {
    rootMargin: "-50px 0px 0px 0px"
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