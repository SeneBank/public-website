let menuButton = document.querySelector(".bi-list");
let nav = document.querySelector("nav");
let showMenu = false
menuButton.addEventListener("click", ()=>{
    showMenu = !showMenu

    if(showMenu)
        nav.style.height="300px"
    else
        nav.style.height="100px" 
})