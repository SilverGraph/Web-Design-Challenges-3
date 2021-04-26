const menuItem = document.getElementsByTagName("span");
const menu = document.getElementsByClassName("menu-item");
const downArrow = document.getElementsByClassName("arrow");
const subItem = document.getElementsByClassName("sub-item");
const dropDownButton = document.querySelector(".drop-down-button");

// HAMBURGER-MENU
const hr = document.querySelectorAll("hr");

const login = document.querySelector(".login-sign-up");

// CODE FOR NAVBAR
for(var i=0; i<3; ++i) {
    menuItem[i].addEventListener("click", toggleItem, false);
}

function toggleItem() {
    var items = this.parentNode.childNodes[6];
    var arrow = this.parentNode.childNodes[2];
    var dropDown = items.toggleAttribute("visibility");

    for(var i=0; i<3; ++i) {
        subItem[i].style.visibility = "hidden";
        menu[i].style.height = '40px';
        downArrow[i].className = "arrow";
    }

    if(dropDown == true) {
        arrow.className = "arrow down";
        // arrow.style.transform = "rotate(180deg)";
        // items.setAttribute("style", "visibility: visible;");
        this.parentNode.style.height = 'auto';
        items.style.visibility = 'visible';
        items.style.transition = 'none';
    }
    // else {
    //     arrow.classList.remove("down");
    //     // arrow.style.transform = "rotate(0deg)";
    //     items.setAttribute("style", "visibility: hidden;");
    // }
}


// CODE FOR HAMBURGER-MENU
dropDownButton.addEventListener("click", function(){
    for(var i=0; i<3; ++i) {    
        downArrow[i].setAttribute("src", "images/icon-arrow-dark.svg");
        // downArrow[i].style.transition = 'transform 0.01s ease-in-out';
    }

    var dropDownToggle = document.getElementById("menu").toggleAttribute("visibility");

    if(dropDownToggle == true) {
        // MAIN-MENU
        document.getElementById("menu").style.visibility = 'visible';
        document.getElementById("menu").style.animation = 'animate 0.25s ease-in-out';

        // LOGIN-SIGN-UP
        login.style.visibility = 'visible';
        login.style.animation = 'animate 0.1s ease-in-out';

        // BURGER-MENU-BUTTON-ANIMATION
        hr[0].style.transform = 'translateY(10px) rotate(-45deg)';
        hr[1].style.transform = 'rotate(45deg)';
        hr[2].style.transform = 'translateY(-9px) rotate(-45deg)';
    }
    else {
        // MAIN-MENU
        document.getElementById("menu").style.visibility = 'hidden';
        document.getElementById("menu").style.animation = 'none';

        // LOGIN-SIGN-UP
        login.style.visibility = 'hidden';
        // login.style.animation = 'none';

        // BURGER-MENU-BUTTON-ANIMATION
        hr[0].style.transform = 'translateY(0) rotate(0deg)';
        hr[1].style.transform = 'rotate(0deg)';
        hr[2].style.transform = 'translateY(0) rotate(0)';
    }
});