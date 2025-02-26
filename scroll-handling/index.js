const sections = document.querySelectorAll("section");
const link = document.querySelectorAll(".nav-bar");

function heightlightMenu () {
    let scrollPos = window.scrollY;

    sections.forEach((section, index) => {
        if(scrollPos >= section.offsetTop - 50 && scrollPos < section.offsetTop + section.clientHeight - 70 ) {
            link.forEach(prev => prev.classList.remove("active"));
            link[index].classList.add("active")
        }
    })
}

window.addEventListener("scroll", heightlightMenu)