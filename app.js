const barsBtn = document.querySelector(".bars-btn")
const closeBtn = document.querySelector(".right-nav-btn")
const rightNav = document.querySelector(".right-nav")




barsBtn.addEventListener("click", function() {
    rightNav.classList.add("toggle")
    rightNav.classList.remove("remove")
})

closeBtn.addEventListener("click", function() {
    rightNav.classList.remove("toggle")
    rightNav.classList.add("remove")
})

// LOADER

var loader = document.querySelector(".loader")

window.addEventListener("load", vanish);

function vanish(){
    loader.classList.add("disppear");
}
