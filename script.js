let togglebutton = document.querySelector(".buger")
let Closebutton = document.getElementById("closebtn")
let links = document.querySelector(".navbars")
togglebutton.addEventListener("click", () => {
    links.classList.toggle("active")
})
Closebutton.addEventListener("click", () => {
    links.classList.remove("active")
})
