// get elements from html and declare variables
let span = document.querySelector(".top") as HTMLSpanElement;
let pageMenu = document.getElementById("pageMenu") as HTMLElement;
let menu = document.getElementById("menubar") as HTMLElement;
let flag = true;
let nav = document.getElementById("sidenav") as HTMLElement;
let btnOne = document.getElementById("btnOne") as HTMLButtonElement ;
let btnTwo = document.getElementById("btnTwo") as HTMLButtonElement;
let btnThree = document.getElementById("btnThree") as HTMLButtonElement;
let boxProduct = document.getElementsByClassName("boxProduct") as any;

// scroll to top 
window.onscroll = function () {
    window.scrollY >= 500 ? span.classList.remove("show") : span.classList.add("show");
};
span.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};

// show menu
pageMenu.onclick = function (event) {
    // Prevent the document click event from firing
    event.stopPropagation();
    menu.style.display = flag ? "flex" : "none";
    flag = !flag;
};

// Add an event listener to the document to hide the menu when clicking anywhere else
document.onclick = function () {
    menu.style.display = "none";
    flag = true; // Reset flag so that menu can be shown again when pageMenu is clicked
};

// nav menu
function openNav() {
    nav.style.width = "100%";
}
function closeNav() {
    nav.style.width = "0";
}

// product operation 
btnOne.onclick = function name(params) {
    // btn change color
    btnOne.classList.add("activeBtn");
    btnTwo.classList.remove("activeBtn");
    btnThree.classList.remove("activeBtn");
    btnOne.classList.remove("inactiveBtn");
    btnTwo.classList.add("inactiveBtn");
    btnThree.classList.add("inactiveBtn");

    // show products
    boxProduct[0].style.display = "flex";
    boxProduct[1].style.display = "flex";
    boxProduct[2].style.display = "flex";
    boxProduct[3].style.display = "flex";
    boxProduct[4].style.display = "flex";
    boxProduct[5].style.display = "flex";
    boxProduct[6].style.display = "flex";
    boxProduct[7].style.display = "flex";
}
btnTwo.onclick = function name(params) {
    // btn change color
    btnOne.classList.remove("activeBtn");
    btnTwo.classList.add("activeBtn");
    btnThree.classList.remove("activeBtn");
    btnOne.classList.add("inactiveBtn");
    btnTwo.classList.remove("inactiveBtn");
    btnThree.classList.add("inactiveBtn");
    
    // show products
    boxProduct[1].style.display = "none";
    boxProduct[3].style.display = "none";
    boxProduct[7].style.display = "none";
    boxProduct[0].style.display = "flex";
    boxProduct[2].style.display = "flex";
    boxProduct[4].style.display = "flex";
    boxProduct[5].style.display = "flex";
    boxProduct[6].style.display = "flex";
}
btnThree.onclick = function name(params) {
    // btn change color
    btnOne.classList.remove("activeBtn");
    btnTwo.classList.remove("activeBtn");
    btnThree.classList.add("activeBtn");
    btnOne.classList.add("inactiveBtn");
    btnTwo.classList.add("inactiveBtn");
    btnThree.classList.remove("inactiveBtn");

    // show products
    boxProduct[0].style.display = "none";
    boxProduct[2].style.display = "none";
    boxProduct[4].style.display = "none";
    boxProduct[5].style.display = "none";
    boxProduct[6].style.display = "none";
    boxProduct[1].style.display = "flex";
    boxProduct[3].style.display = "flex";
    boxProduct[7].style.display = "flex";
}