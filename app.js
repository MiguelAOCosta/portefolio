const hamburger = document.querySelector(".hamburger")
const nav = document.querySelector(".nav-container")
const navLinks = document.querySelectorAll(".nav-link")

hamburger.addEventListener("click", (e) => {
  e.stopPropagation()

  hamburger.classList.toggle("open")
  nav.classList.toggle("open")

  if (nav.style.maxHeight) {
    nav.style.maxHeight = null
  } else {
    nav.style.maxHeight = nav.scrollHeight + "px"
  }

  navLinks.forEach((link, index) => {
    link.style.animation = "none"
    link.offsetHeight
    link.style.animation = ""
    link.style.animationDelay = `${index * 0.1}s`
  })
})

nav.addEventListener("click", (e) => {
  e.stopPropagation()
})

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("open")
    nav.classList.remove("open")
    nav.style.maxHeight = null
  })
})

window.addEventListener("click", () => {
  hamburger.classList.remove("open")
  nav.classList.remove("open")
  nav.style.maxHeight = null
})

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    hamburger.classList.remove("open")
    nav.classList.remove("open")
    nav.style.maxHeight = null
  }
})
