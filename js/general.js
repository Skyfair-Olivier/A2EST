window.addEventListener("load", () => {
    affichageMenu();
})

window.addEventListener("resize", () => {
    affichageMenu();
})
let activeMenu = document.querySelector("header .header__ouvertureDeroulant >div");
let menuActive = 0;

activeMenu.addEventListener("click", () => {
    activateMenu();
})

document.onkeydown = function (pressEchap) {
    pressEchap = pressEchap || window.event;
    if (pressEchap.keyCode == 27 && menuActive == 1) {
        closeMenu();
    }
};

function activateMenu() {
    if (menuActive == 0) {
        openMenu();
    } else {
        closeMenu();
    }
}

function openMenu() {
    activeMenu.parentNode.setAttribute("class", "header__ouvertureDeroulant--click header__ouvertureDeroulant");
    let contentElements = document.querySelectorAll("body *:not(header):not(header *)");
    contentElements.forEach(function (contentElement) {
        contentElement.classList.add('hidden');
    })
    menuActive = 1;
}

function closeMenu() {
    activeMenu.parentNode.setAttribute("class", "header__ouvertureDeroulant");
    let contentElements = document.querySelectorAll("body *:not(header):not(header *)");
    contentElements.forEach(function (contentElement) {
        contentElement.classList.remove('hidden');
    })
    menuActive = 0;
}

function affichageMenu() {
    if (window.innerWidth < 1303) {
        var subDeroulants = document.querySelectorAll(".nav__deroulant");

        subDeroulants.forEach(function (subDeroulant) {
            subDeroulant.parentNode.firstChild.addEventListener("click", function (e) {
                e.preventDefault();
                if (subDeroulant.parentNode.classList.contains("nav__item--deploy")) {
                    subDeroulant.parentNode.classList.remove("nav__item--deploy");
                } else {
                    subDeroulant.parentNode.classList.add("nav__item--deploy");
                }
            });
        });


        activeMenu.addEventListener("mouseover", () => {
            if (menuActive == 1) {
                activeMenu.style.animation = "rotateCross 0.3s";
            }
        })

        activeMenu.addEventListener("mouseout", () => {
            if (menuActive == 1) {
                activeMenu.style.animation = "";
            }
        })

    } else {
        closeMenu();
    }
}