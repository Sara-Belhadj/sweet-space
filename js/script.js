/* START BUTTON */
const startButton = document.querySelector(".startButton");

if(startButton) {
    startButton.addEventListener("click", function() {
        window.location.href = "homePage.html";
    });
}

/* HOME PAGE NAVIGATION */
const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(link => {
        link.addEventListener("click", function() {

            navLinks.forEach(link => {
                link.parentElement.parentElement.classList.remove("active");
            });

        this.parentElement.parentElement.classList.add("active");

        this.parentElement.parentElement.querySelector("img").src = 
            this.parentElement.parentElement.querySelector("img").dataset.active;
       });
    });
 