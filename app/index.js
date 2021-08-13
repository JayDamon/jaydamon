let menu = document.getElementById("menu-component");
let htmlFile = new XMLHttpRequest();
htmlFile.open("GET", "/core/menu.html", false);
htmlFile.onreadystatechange = function () {
    if (htmlFile.readyState === 4) {
        if (htmlFile.status === 200 || htmlFile.status == 0) {
            var allText = htmlFile.responseText;
            menu.innerHTML = allText;
        }
    }
}
htmlFile.send(null);


let mainNav = document.getElementById("js-menu");
let navBarToggle = document.getElementById('js-navbar-toggle');

navBarToggle.addEventListener('click', function() {
    mainNav.classList.toggle('active');
})
