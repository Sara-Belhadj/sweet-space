/* START BUTTON */
const startButton = document.querySelector(".startButton");

if(startButton) {
    startButton.addEventListener("click", function() {
        window.location.href = "homePage.html";
    });
}


/* INITIAL PAGE */
const homeItem = document.querySelector("#home-nav");

    homeItem.querySelector("a").style.color = "#7a3254";
    homeItem.querySelector("img").src = homeItem.querySelector("img").dataset.active;

/* HOME PAGE NAVIGATION */
const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(link => {
        link.addEventListener("click", function() {
            const item = this.parentElement.parentElement;

            navLinks.forEach(link => {
                const otherItem = link.parentElement.parentElement;

                otherItem.querySelector("a").style.color = "#6a468c";
                otherItem.classList.remove("active");
                otherItem.querySelector("img").src = otherItem.querySelector("img").dataset.default;
            });

        item.classList.add("active");

        item.querySelector("img").src = item.querySelector("img").dataset.active;
        
        item.querySelector("a").style.color = "#7a3254";
        });

    });
    

    /* HOME SECTION */
    const homeLinks = document.querySelectorAll(".sidebar-nav a");
    const sections = document.querySelectorAll(".section");
    const home = document.querySelector(".home-section");

    homeLinks.forEach( link => {
        
        link.addEventListener("click", function() {

            sections.forEach(section => {
                section.classList.remove("active");
            });

            const target = document.querySelector(this.getAttribute("href"));
            target.classList.add("active");
        });
    });
