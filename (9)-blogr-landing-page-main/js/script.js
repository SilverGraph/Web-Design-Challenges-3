var menuItem = document.getElementsByTagName("span");
var downArrow = document.getElementsByClassName("arrow");
var subItem = document.getElementsByClassName("sub-item");

for(var i=0; i<3; ++i) {
    menuItem[i].addEventListener("click", toggleItem, false);
}

function toggleItem() {
    var items = this.parentNode.childNodes[4];
    var arrow = this.parentNode.childNodes[2];
    var dropDown = items.toggleAttribute("visibility");

    for(var i=0; i<3; ++i) {
        subItem[i].style.visibility = 'hidden';
        downArrow[i].className = "arrow";
    }

    if(dropDown == true) {
        arrow.className = "arrow down";
        // arrow.style.transform = "rotate(180deg)";
        // items.setAttribute("style", "visibility: visible;");
        items.style.visibility = 'visible';
    }
    // else {
    //     arrow.classList.remove("down");
    //     // arrow.style.transform = "rotate(0deg)";
    //     items.setAttribute("style", "visibility: hidden;");
    // }
}
